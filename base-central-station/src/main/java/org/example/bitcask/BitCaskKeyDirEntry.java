package org.example.bitcask;

public class BitCaskKeyDirEntry {
    private final String fileId;
    private final int entrySize;
    private final int entryPosition;
    private final long timestamp;

    public BitCaskKeyDirEntry(String fileId, int entrySize, int entryPosition, long timestamp) {
        this.fileId = fileId;
        this.entrySize = entrySize;
        this.entryPosition = entryPosition;
        this.timestamp = timestamp;
    }

    public String fileId() {
        return this.fileId;
    }

    public int entrySize() {
        return this.entrySize;
    }

    public int entryPosition() {
        return this.entryPosition;
    }

    public long timestamp() {
        return this.timestamp;
    }
}
