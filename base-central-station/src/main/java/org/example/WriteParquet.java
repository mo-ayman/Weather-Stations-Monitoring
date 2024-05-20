package org.example;

import org.apache.avro.reflect.ReflectData;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.parquet.avro.AvroParquetWriter;
import org.apache.parquet.hadoop.ParquetWriter;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.nio.file.Files;
import java.nio.file.Paths;

import java.util.ArrayList;
import static org.apache.parquet.hadoop.ParquetFileWriter.Mode.OVERWRITE;
import static org.apache.parquet.hadoop.metadata.CompressionCodecName.SNAPPY;

public class WriteParquet {

    public WriteParquet() {
    }

    public void write(String dirPath, ArrayList<WeatherMessage> messages) throws IOException {
        Path dataFile = new Path(dirPath);
        // Write as Parquet file.
        try (ParquetWriter<WeatherMessage> writer = AvroParquetWriter.<WeatherMessage>builder(dataFile)
                .withSchema(ReflectData.AllowNull.get().getSchema(WeatherMessage.class))
                .withDataModel(ReflectData.get())
                .withConf(new Configuration())
                .withCompressionCodec(SNAPPY)
                .withWriteMode(OVERWRITE)
                .build()) {

            for (WeatherMessage message : messages) {
                writer.write(message);
            }
        }
    }
}
