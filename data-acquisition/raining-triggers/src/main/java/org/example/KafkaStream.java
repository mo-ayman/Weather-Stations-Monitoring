package org.example;


import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.Consumed;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Produced;

import java.util.ArrayList;
import java.util.Properties;

public class KafkaStream {
    public static void main(String[] args) {

//        long startStationId = Long.parseLong(System.getenv("START_STATION_ID"));
//        long endStationId = Long.parseLong(System.getenv("END_STATION_ID"));
//        String outputTopic = System.getenv("OUTPUT_TOPIC");
//        String kafkaBootstrapServer = System.getenv("KAFKA_BOOTSTRAP_SERVER");
        String kafkaBootstrapServer = "localhost:29092";

//        System.out.println("KAFKA_BOOTSTRAP_SERVER: " + kafkaBootstrapServer);
//        System.out.println("START_STATION_ID: " + startStationId);
//        System.out.println("END_STATION_ID: " + endStationId);
//        System.out.println("OUTPUT_TOPIC: " + outputTopic);
        Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "my-streams-app");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBootstrapServer);
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest"); // Set to earliest to consume from the beginning

        System.out.println();

        long startStationId = 1;
        long endStationId = 5;

        StreamsBuilder builder = new StreamsBuilder();

        KafkaConfig kafkaConfig = new KafkaConfig();


        // Create streams for each station within the specified range
        for (long stationId = startStationId; stationId <= endStationId; stationId++) {
            KStream<String, String> inputStream = builder.stream("stationId" + stationId, Consumed.with(Serdes.String(), Serdes.String()));
            // Process each stream independently
            inputStream.foreach((key, value) -> {
                // Example: If processed value meets a certain condition, write to a specific topic
                if (StreamController.conditionMet(value)) {
                    kafkaConfig.sendWeatherMessage(value);
                }
            });

        }
        // Start Kafka Streams
        KafkaStreams streams = new KafkaStreams(builder.build(), props);
        streams.start();
        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));


        // Keep the application running indefinitely
        while (true) {
            try {
                Thread.sleep(1000); // Adjust sleep time as needed
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }

}

