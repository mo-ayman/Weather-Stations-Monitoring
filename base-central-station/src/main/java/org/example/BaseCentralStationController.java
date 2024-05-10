package org.example;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class BaseCentralStationController {
    int BATCH_SIZE = 10000;
    final WriteParquet writeParquet = new WriteParquet();
    String outputDirectory = "output";
    // hash map key station id and value ArrayList of WeatherMessage
    HashMap<Long, ArrayList<WeatherMessage>> stationWeatherMap = new HashMap<>();

    public BaseCentralStationController(long stationIdStart, long stationIdEnd, int batchSize) {
        for (long stationId = stationIdStart; stationId <= stationIdEnd; stationId++) {
            stationWeatherMap.put(stationId, new ArrayList<>());
        }

        BATCH_SIZE = batchSize;
    }

    // insert WeatherMessage into stationWeatherMap
    public void insert(long stationId,ArrayList<WeatherMessage> messages) throws IOException {
        if(messages.isEmpty()) return;
        ArrayList<WeatherMessage> list = stationWeatherMap.get(stationId);
        for (WeatherMessage message: messages) {
            if(list.size() < BATCH_SIZE) {
                list.add(message);
            } else {
                writeParquet.write(outputDirectory + "/station_" + stationId, list);
                list = new ArrayList<>();
            }
        }
    }


}
