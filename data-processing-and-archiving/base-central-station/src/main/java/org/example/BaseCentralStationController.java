package org.example;

import com.google.gson.Gson;
import org.example.bitcask.BitCask;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class BaseCentralStationController {
    final WriteParquet writeParquet = new WriteParquet();
    final BitCask bitCask = new BitCask("kv_store");
    int BATCH_SIZE = 10000;
    String outputDirectory = "output";
    // hash map key station id and value ArrayList of WeatherMessage
    HashMap<Long, ArrayList<WeatherMessage>> stationWeatherMap = new HashMap<>();

    public BaseCentralStationController(long stationIdStart, long stationIdEnd, int batchSize) throws IOException {
        for (long stationId = stationIdStart; stationId <= stationIdEnd; stationId++) {
            stationWeatherMap.put(stationId, new ArrayList<>());
        }

        BATCH_SIZE = batchSize;
    }

    // insert WeatherMessage into stationWeatherMap
    public void insert(long stationId, ArrayList<WeatherMessage> messages) throws IOException {
        if (messages.isEmpty()) return;
        ArrayList<WeatherMessage> list = stationWeatherMap.get(stationId);
        long maxTimestamp = 0;
        WeatherMessage lastMessage = null;
        for (WeatherMessage message : messages) {
            if (list.size() >= BATCH_SIZE) {
                System.out.println("----------------------------------- Station id" + stationId + "---------------------------------------------");
                writeParquet.write(outputDirectory + "/station_" + stationId, list);
                list.clear();
                System.out.println("\n#########################################################################################################");
            }

            if (maxTimestamp < message.getStatusTimestamp()) {
                maxTimestamp = message.getStatusTimestamp();
                lastMessage = message;
            }
            list.add(message);
            System.out.println(message);
        }
        if (lastMessage != null) {
            Gson gson = new Gson();
            String json = gson.toJson(lastMessage);
            bitCask.write(String.valueOf(stationId), json);
        }
    }


}
