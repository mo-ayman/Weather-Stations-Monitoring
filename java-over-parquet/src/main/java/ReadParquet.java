import com.google.gson.Gson;
import org.apache.avro.generic.GenericRecord;
import org.apache.avro.reflect.ReflectData;
import org.apache.hadoop.fs.Path;
import org.apache.parquet.avro.AvroParquetReader;
import org.apache.parquet.hadoop.ParquetReader;

import java.io.IOException;
import java.util.ArrayList;

public class ReadParquet {
    static Gson jsonAdapter = new Gson();

    public ReadParquet() {
    }

    public static ArrayList<String> read(String filePath) throws IOException {
        ArrayList<String> messages = new ArrayList<>();
        Path dataFile = new Path(filePath);
        System.out.println(dataFile);
        // Create a reader for the Parquet file
        ParquetReader<GenericRecord> reader = AvroParquetReader.<WeatherMessage>builder(dataFile)
                .withDataModel(ReflectData.get())
                .build();
//
        GenericRecord record;
        while ((record = reader.read()) != null) {
            // Process each record
//            WeatherMessage message = jsonAdapter.fromJson(record.toString(), WeatherMessage.class);

            messages.add(record.toString());
//            System.out.println(message.getWeather());
        }

        return messages;
    }

}
