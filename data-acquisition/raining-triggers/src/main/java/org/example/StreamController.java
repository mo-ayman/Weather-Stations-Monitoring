package org.example;

import com.google.gson.Gson;

public class StreamController {

    static Gson jsonAdapter = new Gson();


    // Example condition to check if the processed value meets a certain condition
    static boolean conditionMet(String processedValue) {
        WeatherMessage message = jsonAdapter.fromJson(processedValue, WeatherMessage.class);
        return message.getWeather().getHumidity() > 70;
    }


}
