

import com.google.gson.Gson;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.example.WeatherMessage;
import org.example.WeatherMessage.Weather;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Properties;
import java.util.Scanner;

public class WeatherChannelAdapter {

   private static final String KAFKA_BOOTSTRAP_SERVERS = System.getenv("KAFKA_BOOTSTRAP_SERVER");
   private static final String OPEN_METEO_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=%f&longitude=%f&hourly=temperature_2m,humidity_2m,windspeed_10m";
   private static final Gson gson = new Gson();

   private final KafkaProducer<String, String> producer;

   public WeatherChannelAdapter() {
       Properties props = new Properties();
       props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, KAFKA_BOOTSTRAP_SERVERS);
       props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
       props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
       producer = new KafkaProducer<>(props);
   }

   public void fetchAndProduceWeatherData(double latitude, double longitude, long stationId) {
       try {
           URL url = new URL(String.format(OPEN_METEO_API_URL, latitude, longitude));
           HttpURLConnection conn = (HttpURLConnection) url.openConnection();
           conn.setRequestMethod("GET");

           if (conn.getResponseCode() != 200) {
               throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
           }

           Scanner scanner = new Scanner(url.openStream());
           StringBuilder inline = new StringBuilder();
           while (scanner.hasNext()) {
               inline.append(scanner.nextLine());
           }
           scanner.close();

           WeatherData weatherData = gson.fromJson(inline.toString(), WeatherData.class);
           processWeatherData(weatherData, stationId);

       } catch (IOException e) {
           System.out.println("Exception: " + e.getMessage());
       }
   }

   private void processWeatherData(WeatherData weatherData, long stationId) {
       for (int i = 0; i < weatherData.hourly.time.length; i++) {
           WeatherMessage.Weather weather = new WeatherMessage.Weather(
                   weatherData.hourly.humidity_2m[i],
                   weatherData.hourly.temperature_2m[i],
                   weatherData.hourly.windspeed_10m[i]
           );
           WeatherMessage weatherMessage = new WeatherMessage(
                   stationId,
                   i + 1,
                   "high", // assuming battery status is always "high" for simplicity
                   weatherData.hourly.time[i],
                   weather
           );

           String topic = "stationId" + stationId;
           producer.send(new ProducerRecord<>(topic, gson.toJson(weatherMessage)));
       }
   }

   public static void main(String[] args) {
       WeatherChannelAdapter adapter = new WeatherChannelAdapter();
       adapter.fetchAndProduceWeatherData(37.7749, -122.4194, 1); // Example for San Francisco, stationId 1
   }

   private static class WeatherData {
       Hourly hourly;

       static class Hourly {
           long[] time;
           int[] temperature_2m;
           int[] humidity_2m;
           int[] windspeed_10m;
       }
   }
}
