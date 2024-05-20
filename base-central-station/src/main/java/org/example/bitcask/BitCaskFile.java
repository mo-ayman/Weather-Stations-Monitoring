package org.example.bitcask;

import com.google.protobuf.ByteString;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.util.concurrent.atomic.AtomicInteger;

public class BitCaskFile {
    public static final int TIMESTAMP_SIZE = 8;
    public static final int KEY_SIZE = 4;
    public static final int VALUE_SIZE = 4;
    public static final int HEADER_SIZE = TIMESTAMP_SIZE + KEY_SIZE + VALUE_SIZE;

    private final String fileId;
    private BitCaskFileState state = BitCaskFileState.CLOSED;
    private final FileChannel readChannel;
    private FileChannel appendChannel;
    private FileChannel hintChannel;
    private final AtomicInteger offset = new AtomicInteger(0);

    @SuppressWarnings("resource")
    public BitCaskFile(String dirname, String fileId) throws IOException {
        // Set the file id
        this.fileId = fileId;

        // Check if the directory exists
        boolean isDirExists = new File(dirname).exists();
        if (!isDirExists) {
            throw new IOException("Directory does not exist");
        }

        // Check if the file exists, if not open it in append mode, else open it in read mode
        String filename = dirname + "/" + fileId + ".data";
        boolean isFileExists = new File(filename).exists();

        if (!isFileExists) {
            appendChannel = new FileOutputStream(filename, true).getChannel();
            hintChannel = new FileOutputStream(dirname + "/" + fileId + ".hint", true).getChannel();
            state = BitCaskFileState.ACTIVE;
        } else {
            state = BitCaskFileState.INACTIVE;
        }

        readChannel = new RandomAccessFile(filename, "r").getChannel();
    }

    public BitCaskKeyDirEntry write(ByteString key, ByteString value) throws IOException {
        // Check if the file is inactive
        if (state == BitCaskFileState.INACTIVE) {
            throw new IOException("File is inactive");
        }

        // Check if the file is closed
        if (state == BitCaskFileState.CLOSED) {
            throw new IOException("File is closed");
        }

        // Get the timestamp
        long timestamp = System.currentTimeMillis();

        // Get the size of the key and value
        int keySize = key.size();
        int valueSize = value.size();

        // Calculate the size of the entry
        int entrySize = HEADER_SIZE + key.size() + value.size();

        // Update the offset atomically
        int entryPosition = offset.getAndAdd(entrySize);

        // Compute value position
//        int valuePosition = entryPosition + HEADER_SIZE + keySize;

        // Construct byte buffer for the header
        ByteBuffer headerBuffer = ByteBuffer.allocate(HEADER_SIZE);
        headerBuffer.putLong(timestamp);
        headerBuffer.putInt(keySize);
        headerBuffer.putInt(valueSize);
        headerBuffer.flip();

        // Construct byte buffer for the key and value
        ByteBuffer keyBuffer = key.asReadOnlyByteBuffer();
        ByteBuffer valueBuffer = value.asReadOnlyByteBuffer();

        // Construct array of byte buffers for the entry
        ByteBuffer[] entryBuffers = {headerBuffer, keyBuffer, valueBuffer};

        // Write the entry to the append channel
        long bytesWritten = appendChannel.write(entryBuffers, 0, entryBuffers.length);

        // Check if the bytes written is equal to the entry size
        if (bytesWritten != entrySize) {
            throw new IOException("Failed to write the entry");
        }

        // Construct byte buffer for the hint
        ByteBuffer hintHeaderBuffer = ByteBuffer.allocate(TIMESTAMP_SIZE + KEY_SIZE + VALUE_SIZE + 4);
        hintHeaderBuffer.putLong(timestamp);
        hintHeaderBuffer.putInt(keySize);
        hintHeaderBuffer.putInt(entrySize);
        hintHeaderBuffer.putInt(entryPosition);
        hintHeaderBuffer.flip();

        // Rewind the key buffer
        keyBuffer.rewind();

        // Construct array of byte buffers for the hint
        ByteBuffer[] hintBuffers = {hintHeaderBuffer, keyBuffer};

        // Write the hint to the hint channel
        long hintBytesWritten = hintChannel.write(hintBuffers, 0, hintBuffers.length);

        // Check if the bytes written is equal to the hint size
        if (hintBytesWritten != TIMESTAMP_SIZE + KEY_SIZE + VALUE_SIZE + 4 + keySize) {
            throw new IOException("Failed to write the hint");
        }

        // Return the value position and timestamp
        return new BitCaskKeyDirEntry(fileId, entrySize, entryPosition, timestamp);
    }

    public ByteString read(ByteString key, int offset) {
        // Check if the file is closed
        if (state == BitCaskFileState.CLOSED) {
            return null;
        }

        // Construct byte buffer for the key
        ByteBuffer keyBuffer = key.asReadOnlyByteBuffer();

        // Seek to the offset
        try {
            readChannel.position(offset);
        } catch (IOException e) {
            return null;
        }

        // Construct byte buffer for the header
        ByteBuffer headerBuffer = ByteBuffer.allocate(HEADER_SIZE);
        int bytesRead;
        try {
            bytesRead = readChannel.read(headerBuffer);
        } catch (IOException e) {
            return null;
        }

        // Check if the bytes read is equal to the header size
        if (bytesRead != HEADER_SIZE) {
            return null;
        }

        // Flip the header buffer
        headerBuffer.flip();

        // Read the timestamp, key size and value size
        long timestamp = headerBuffer.getLong();
        int readKeySize = headerBuffer.getInt();
        int readValueSize = headerBuffer.getInt();

        // Check if the key size is equal to the read key size
        if (keyBuffer.remaining() != readKeySize) {
            return null;
        }

        // Construct byte buffer for the read key
        ByteBuffer readKeyBuffer = ByteBuffer.allocate(readKeySize);
        int readKeyBytesRead = 0;
        try {
            readKeyBytesRead = readChannel.read(readKeyBuffer);
        } catch (IOException e) {
            return null;
        }

        // Check if the bytes read is equal to the key size
        if (readKeyBytesRead != readKeySize) {
            return null;
        }

        // Flip the read key buffer
        readKeyBuffer.flip();

        // Check if the key is equal to the read key
        if (!keyBuffer.equals(readKeyBuffer)) {
            return null;
        }

        // Construct byte buffer for the read value
        ByteBuffer readValueBuffer = ByteBuffer.allocate(readValueSize);
        int readValueBytesRead = 0;
        try {
            readValueBytesRead = readChannel.read(readValueBuffer);
        } catch (IOException e) {
            return null;
        }

        // Check if the bytes read is equal to the value size
        if (readValueBytesRead != readValueSize) {
            return null;
        }

        // Flip the read value buffer
        readValueBuffer.flip();

        // Return the value
        return ByteString.copyFrom(readValueBuffer);
    }

    public String getFileId() {
        return fileId;
    }

    public void close() throws IOException {
        // Check if the file is already closed
        if (state == BitCaskFileState.CLOSED) {
            return;
        }

        // Close the append channel and hint channel
        if (state == BitCaskFileState.ACTIVE) {
            appendChannel.close();
            hintChannel.close();
        }

        // Close the read channel
        readChannel.close();

        state = BitCaskFileState.CLOSED;
    }

    public void deactivate() throws IOException {
        // Check if the file is already inactive or closed
        if (state == BitCaskFileState.INACTIVE || state == BitCaskFileState.CLOSED) {
            return;
        }

        appendChannel.close();
        hintChannel.close();
        state = BitCaskFileState.INACTIVE;
    }

}
