package org.example;

import com.google.gson.Gson;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.serialization.StringDeserializer;

import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Properties;

class KafkaConsumerConfig {
    static KafkaConsumer<String, String> consumer;
    static Gson jsonAdapter = new Gson();

    public KafkaConsumerConfig(String kafkaBootstrapServer) {


        // Kafka consumer configuration
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBootstrapServer);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "station-consumer-group");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());

        // Create Kafka consumer
         consumer = new KafkaConsumer<>(props);

    }

    public ArrayList<WeatherMessage> consume (long stationId) {
        consumer.subscribe(Collections.singletonList("stationId" + stationId));
        ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
        ArrayList<WeatherMessage> messages = new ArrayList<>();
        for (ConsumerRecord<String, String> record : records) {
            // parse record
            System.out.println(record.value());
            messages.add(jsonAdapter.fromJson(record.value(), WeatherMessage.class));

        }
//        System.out.println(messages);
        return messages;
    }
}
