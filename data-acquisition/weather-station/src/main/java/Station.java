import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import com.google.gson.Gson;

import java.util.Properties;

public class Station {

     public static void main(String[] args) throws InterruptedException {
         // parse arguments for station id

         long stationId = Long.parseLong(System.getenv("STATION_ID"));
         String kafkaBootstrapServer = System.getenv("KAFKA_BOOTSTRAP_SERVER");
         System.out.println("STATION_ID: " + stationId);
         System.out.println("KAFKA_BOOTSTRAP_SERVER: " + kafkaBootstrapServer);
         System.out.println();
        // Kafka producer configuration
        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,
                kafkaBootstrapServer);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
                StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
                StringSerializer.class.getName());
   
                // Create Kafka producer
            try (KafkaProducer<String, String> producer = new KafkaProducer<>(properties)) {
                while(true) {
                    // Create message object
                    WeatherMessage message = Message.generateMessage(stationId);

                    // Serialize message object to JSON
                    Gson gson = new Gson();
                    String jsonMessage = gson.toJson(message);
                    System.out.println(jsonMessage);

                    // Send message to Kafka topic
                    ProducerRecord<String, String> record = new ProducerRecord<>("stationId" + stationId, jsonMessage);
                    producer.send(record);
            }
        }

    }

}
