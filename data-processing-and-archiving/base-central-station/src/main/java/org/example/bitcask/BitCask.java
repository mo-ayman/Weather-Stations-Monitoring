package org.example.bitcask;

import com.google.protobuf.ByteString;
import com.soundicly.jnanoidenhanced.jnanoid.NanoIdUtils;

import java.io.*;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.stream.Collectors;

public class BitCask {
    private static final int MAX_FILE_SIZE = 1_000_000_000;

    // Initialize HashMap for key-value store
    private final ConcurrentHashMap<ByteString, BitCaskKeyDirEntry> keyDir = new ConcurrentHashMap<>();

    // Initialize hashmap for BitCask files pool
    private final ConcurrentHashMap<String, BitCaskFile> filePool = new ConcurrentHashMap<>();
    private final String dirname;
    Lock keyDirLock = new ReentrantLock();
    Lock filePoolLock = new ReentrantLock();
    Lock mergeLock = new ReentrantLock();
    ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
    private BitCaskFile currentFile;
    private int bytesWritten = 0;

    public BitCask(String dirname) throws IOException {
        // Set the directory name
        this.dirname = dirname;

        // Check if the directory exists, create it if it does not
        boolean isDirExists = new File(dirname).exists();
        if (!isDirExists) {
            boolean isDirCreated = new File(dirname).mkdir();
            if (!isDirCreated) {
                throw new IOException("Failed to create directory");
            }
        }

        // Check if the directory is a directory, throw an exception if it is not
        boolean isDirFile = new File(dirname).isDirectory();
        if (!isDirFile) {
            throw new IOException("Not a directory");
        }

        // Scan the directory for files and make sure they are BitCask files (end with .data or .hint)
        // Make sure each .data file has a corresponding .hint file
        // Extract the file id from the filename and make sure there are no duplicates
        File[] files = new File(dirname).listFiles();
        Set<String> fileIds = new HashSet<>();
        if (files != null) {
            for (File file : files) {
                String filename = file.getName();
                if (!filename.endsWith(".data") && !filename.endsWith(".hint")) {
                    throw new IOException("Invalid file found in directory");
                }
            }

            Arrays.sort(files, Comparator.comparing(File::getName));

            for (int i = 0; i < files.length; i++) {
                String filename = files[i].getName();
                if (filename.endsWith(".data")) {
                    String fileId = filename.substring(0, filename.length() - 5);
                    if (fileIds.contains(fileId)) {
                        throw new IOException("Duplicate file id found in directory");
                    }
                    fileIds.add(fileId);
                    if (i + 1 >= files.length || !files[i + 1].getName().equals(fileId + ".hint")) {
                        throw new IOException("Missing hint file for data file");
                    }
                }
            }
        } else {
            throw new IOException("Failed to list files in directory");
        }

        // Build the key directory from the hint files
        for (String fileId : fileIds) {
            // Build the key directory from the hint file
            // It's in this format: TIMESTAMP_SIZE + KEY_SIZE + VALUE_SIZE + 4 + keySize
            String hintFilename = dirname + "/" + fileId + ".hint";
            try (DataInputStream reader = new DataInputStream(new BufferedInputStream(new FileInputStream(hintFilename)))) {
                while (reader.available() > 0) {
                    // Read the timestamp, key size, value size, and entry position
                    long timestamp = reader.readLong();
                    int keySize = reader.readInt();
                    int valueSize = reader.readInt();
                    int entryPosition = reader.readInt();

                    // Read the key bytes
                    byte[] keyBytes = new byte[keySize];
                    int keyBytesRead = reader.read(keyBytes);
                    if (keyBytesRead != keySize) {
                        throw new IOException("Failed to read key bytes");
                    }

                    // Convert the key bytes to ByteString
                    ByteString key = ByteString.copyFrom(keyBytes);

                    // Compute the entry size
                    int entrySize = BitCaskFile.HEADER_SIZE + keySize + valueSize;

                    // Check if the key already exists in the key directory with a newer timestamp
                    if (keyDir.containsKey(key)) {
                        BitCaskKeyDirEntry existingEntry = keyDir.get(key);
                        if (existingEntry.timestamp() > timestamp) {
                            continue;
                        }
                    }

                    // Create a new BitCaskKeyDirEntry and add it to the key directory
                    BitCaskKeyDirEntry entry = new BitCaskKeyDirEntry(fileId, entrySize, entryPosition, timestamp);
                    keyDir.put(key, entry);
                }
            }
        }

        // Collect file Ids having up-to-date data
        Set<String> upToDateFileIds = keyDir.values().stream().map(BitCaskKeyDirEntry::fileId).collect(Collectors.toSet());

        // Get file Ids that are not up-to-date
        Set<String> outdatedFileIds = fileIds.stream().filter(fileId -> !upToDateFileIds.contains(fileId)).collect(Collectors.toSet());

        // Delete the outdated files
        for (String outdatedFileId : outdatedFileIds) {
            File dataFile = new File(dirname + "/" + outdatedFileId + ".data");
            File hintFile = new File(dirname + "/" + outdatedFileId + ".hint");
            boolean isDataFileDeleted = dataFile.delete();
            boolean isHintFileDeleted = hintFile.delete();
            if (!isDataFileDeleted || !isHintFileDeleted) {
                throw new IOException("Failed to delete outdated files");
            }
        }

        // Put the up-to-date files in the file pool
        for (String upToDateFileId : upToDateFileIds) {
            BitCaskFile bitCaskFile = new BitCaskFile(dirname, upToDateFileId);
            filePool.put(upToDateFileId, bitCaskFile);
        }

        // Open a new file for writing
        String newFileId = NanoIdUtils.randomNanoId();
        currentFile = new BitCaskFile(dirname, newFileId);
        filePool.put(newFileId, currentFile);

        // Run merge every 30 seconds
        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                mergeAsync();
            }
        }, 0, 30 * 1000);
    }

    public boolean write(String key, String value) {
        try {
            // Acquire the read lock
            readWriteLock.readLock().lock();

            // Convert the key and value to ByteString
            ByteString keyByteString = ByteString.copyFromUtf8(key);
            ByteString valueByteString = ByteString.copyFromUtf8(value);

            // Write the key and value to the current file
            BitCaskKeyDirEntry entry = currentFile.write(keyByteString, valueByteString);
            keyDirLock.lock();
            keyDir.put(keyByteString, entry);
            keyDirLock.unlock();

            // Update the bytes written
            bytesWritten += entry.entrySize();

            // Check if the bytes written is greater than or equal to MAX_FILE_SIZE
            if (bytesWritten >= MAX_FILE_SIZE) {
                // Deactivate the current file
                currentFile.deactivate();

                // Open a new file for writing
                String newFileId = NanoIdUtils.randomNanoId();
                currentFile = new BitCaskFile(dirname, newFileId);
                filePoolLock.lock();
                filePool.put(newFileId, currentFile);
                filePoolLock.unlock();

                // Reset the bytes written
                bytesWritten = 0;
            }
        } catch (IOException e) {
            System.err.println("❌ Failed to write key-value pair to file");
            System.err.println(e.getMessage());
            return false;
        } finally {
            // Release the read lock
            readWriteLock.readLock().unlock();
        }

        return true;
    }

    public String read(String key) {
        try {
            // Acquire the read lock
            readWriteLock.readLock().lock();

            // Convert the key to ByteString
            ByteString keyByteString = ByteString.copyFromUtf8(key);

            // Get the entry from the key directory
            keyDirLock.lock();
            BitCaskKeyDirEntry entry = keyDir.get(keyByteString);
            keyDirLock.unlock();
            if (entry == null) {
                return null;
            }

            // Read the value from the found entry
            String fileId = entry.fileId();
            int valuePosition = entry.entryPosition();

            // Check if the file exists in the file pool
            filePoolLock.lock();
            BitCaskFile file = filePool.get(fileId);
            filePoolLock.unlock();
            if (file == null) {
                System.err.println("❌ File does not exist in file pool");
                return null;
            }

            // Read the value from the file
            return file.read(keyByteString, valuePosition).toStringUtf8();
        } finally {
            // Release the read lock
            readWriteLock.readLock().unlock();
        }
    }

    public void merge() throws IOException {
        // Print a message to indicate that the merge is running
        System.out.println("🧹 Running merge");

        // Make sure there is no another merge in progress
        boolean isLockAcquired = mergeLock.tryLock();
        if (!isLockAcquired) {
            return;
        }

        try {
            // Get the file ids of the files in the file pool as copy excluding the current file
            filePoolLock.lock();
            Set<String> inactiveFileIds = new HashSet<>(filePool.keySet());
            filePoolLock.unlock();
            inactiveFileIds.remove(currentFile.getFileId());

            // Create a new file pool for inactive files
            HashMap<String, BitCaskFile> inactiveFilePool = new HashMap<>();
            for (String inactiveFileId : inactiveFileIds) {
                BitCaskFile inactiveFile = new BitCaskFile(dirname, inactiveFileId);
                inactiveFilePool.put(inactiveFileId, inactiveFile);
            }

            // Copy the key directory for inactive files
            keyDirLock.lock();
            HashMap<ByteString, BitCaskKeyDirEntry> inactiveKeyDir = new HashMap<>(keyDir);
            keyDirLock.unlock();
            inactiveKeyDir.values().removeIf(entry -> !inactiveFileIds.contains(entry.fileId()));

            // Initialize a new key directory to track the new entries
            HashMap<ByteString, BitCaskKeyDirEntry> newKeyDir = new HashMap<>();

            // Initialize a new variable to track size of data written (Each file should be less than 1GB)
            long sizeWritten = 0;

            // Initialize a variable to maintain an array of new files
            List<BitCaskFile> newFiles = new ArrayList<>();

            // Initialize a variable to maintain the current file used for writing
            BitCaskFile activeNewFile = null;

            // Iterate over the entries in the key directory
            for (BitCaskKeyDirEntry entry : inactiveKeyDir.values()) {
                // Get the file id and entry position
                String fileId = entry.fileId();
                int entryPosition = entry.entryPosition();

                // Check if the file exists in the file pool
                if (!inactiveFilePool.containsKey(fileId)) {
                    System.err.println("❌ File does not exist in file pool");
                    return;
                }

                // Read the value from the file
                ByteString key = inactiveKeyDir.entrySet().stream().filter(e -> e.getValue().equals(entry)).findFirst().get().getKey();
                ByteString value = inactiveFilePool.get(fileId).read(key, entryPosition);

                // Write the key and value to the new file
                try {
                    if (activeNewFile == null) {
                        // Open a new file for writing
                        String newFileId = NanoIdUtils.randomNanoId();
                        activeNewFile = new BitCaskFile(dirname, newFileId);
                        newFiles.add(activeNewFile);
                    }

                    BitCaskKeyDirEntry newEntry = activeNewFile.write(key, value);
                    newKeyDir.put(key, newEntry);

                    // Update the size written
                    sizeWritten += newEntry.entrySize();
                } catch (IOException e) {
                    System.err.println("❌ Failed to write key-value pair to file");
                    System.err.println(e.getMessage());
                    return;
                }

                // Check if the size written is greater than or equal to 1GB
                if (sizeWritten >= MAX_FILE_SIZE) {
                    // Deactivate the active new file
                    activeNewFile.deactivate();

                    // Set the active new file to null
                    activeNewFile = null;

                    // Reset the size written
                    sizeWritten = 0;
                }
            }

            // If there is an active new file, deactivate it
            if (activeNewFile != null) {
                activeNewFile.deactivate();
            }

            // Push the new files to the file pool
            for (BitCaskFile newFile : newFiles) {
                filePoolLock.lock();
                filePool.put(newFile.getFileId(), newFile);
                filePoolLock.unlock();
            }

            // Update the key directory with the new entries
            keyDirLock.lock();
            keyDir.putAll(newKeyDir);
            keyDirLock.unlock();

            // Close files in the inactive file pool
            for (BitCaskFile inactiveFile : inactiveFilePool.values()) {
                inactiveFile.close();
            }

            try {
                // Acquire the write lock
                readWriteLock.writeLock().lock();

                // Remove the inactive files from the file pool and close them
                for (String inactiveFileId : inactiveFileIds) {
                    filePoolLock.lock();
                    BitCaskFile inactiveFile = filePool.remove(inactiveFileId);
                    filePoolLock.unlock();
                    inactiveFile.close();
                }

                // Remove the inactive files from the directory
                for (String inactiveFileId : inactiveFileIds) {
                    File dataFile = new File(dirname + "/" + inactiveFileId + ".data");
                    File hintFile = new File(dirname + "/" + inactiveFileId + ".hint");
                    boolean isDataFileDeleted = dataFile.delete();
                    boolean isHintFileDeleted = hintFile.delete();
                    if (!isDataFileDeleted || !isHintFileDeleted) {
                        System.err.println("❌ Failed to delete inactive files");
                    }
                }
            } finally {
                // Release the write lock
                readWriteLock.writeLock().unlock();
            }
        } finally {
            mergeLock.unlock();
        }

        // Print a message to indicate that the merge is complete
        System.out.println("✅ Merge complete");
    }

    // A new method for merging in new thread
    public void mergeAsync() {
        CompletableFuture.runAsync(() -> {
            try {
                merge();
            } catch (IOException e) {
                System.err.println("❌ Failed to merge files");
                System.err.println(e.getMessage());
            }
        });
    }
}
