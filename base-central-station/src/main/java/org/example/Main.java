package org.example;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;


public class Main {

    public static void main(String[] args) throws IOException {
        // parse arguments for station id and Kafka bootstrap server
//        long stationIdStart = Long.parseLong(System.getenv("STATION_ID_START"));
//        long stationIdEnd = Long.parseLong(System.getenv("STATION_ID_END"));
//        int batchSize = int.parseInt(System.getenv("BATCH_SIZE"));
//        String kafkaBootstrapServer = System.getenv("KAFKA_BOOTSTRAP_SERVER");


        long stationIdStart = 1;
        long stationIdEnd = 5;
        int batchSize = 50;
        String kafkaBootstrapServer = "localhost:29092";

        System.out.println("STATION_ID_START: " + stationIdStart);
        System.out.println("STATION_ID_END: " + stationIdEnd);

        System.out.println("KAFKA_BOOTSTRAP_SERVER: " + kafkaBootstrapServer);
        System.out.println();

        // create Kafka consumer
        KafkaConsumerConfig kafkaConsumer = new KafkaConsumerConfig(kafkaBootstrapServer);
        BaseCentralStationController controller = new BaseCentralStationController(stationIdStart, stationIdEnd, batchSize);

        while (true) {

            // loop over station existed and poll from it
            for (long stationId = stationIdStart; stationId <= stationIdEnd; stationId++) {
                ArrayList<WeatherMessage> messages = kafkaConsumer.consume(stationId);
//                System.out.println(messages);
                controller.insert(stationId, messages);
            }

        }
    }


}