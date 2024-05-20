package org.example;
import org.apache.parquet.example.data.Group;
import org.apache.parquet.example.data.simple.NanoTime;
import org.apache.parquet.io.api.Binary;
import org.apache.parquet.io.api.RecordConsumer;
import org.apache.parquet.schema.GroupType;

import java.io.Serializable;

public class WeatherMessage implements Serializable {
    private long station_id;
    private long s_no;
    private String battery_status;
    private long status_timestamp;
    private Weather weather;

    public WeatherMessage() {}
    public WeatherMessage(long station_id, long s_no, String battery_status, long status_timestamp, Weather weather) {
        this.station_id = station_id;
        this.s_no = s_no;
        this.battery_status = battery_status;
        this.status_timestamp = status_timestamp;
        this.weather = weather;
    }

    public long getStationId() {
        return station_id;
    }

    public long getSNo() {
        return s_no;
    }

    public String getBatteryStatus() {
        return battery_status;
    }

    public long getStatusTimestamp() {
        return status_timestamp;
    }

    public Weather getWeather() {
        return weather;
    }




    static class Weather {
        private int humidity;
        private int temperature;
        private int wind_speed;

        public Weather(int humidity, int temperature, int wind_speed) {
            this.humidity = humidity;
            this.temperature = temperature;
            this.wind_speed = wind_speed;
        }

        public String toString() {
            return "{humidity: " + humidity + ", temperature: " + temperature + ", wind_speed: " + wind_speed + "}";
        }

        public int getHumidity() {
            return humidity;
        }

        public int getTemperature() {
            return temperature;
        }

        public int getWindSpeed() {
            return wind_speed;
        }


    }

    public String toString() {
        return "{station_id: " + station_id + ", s_no: " + s_no + ", battery_status: " + battery_status + ", status_timestamp: " + status_timestamp + ", weather: " + weather + "}";
    }
}