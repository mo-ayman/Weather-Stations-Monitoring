package org.example;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Consumed;

import java.util.Properties;

public class KafkaConfig {
    KafkaProducer<String, String> producer;
//    String kafkaBootstrapServer = System.getenv("KAFKA_BOOTSTRAP_SERVER");
//    String outputTopic = System.getenv("OUTPUT_TOPIC");
    String kafkaBootstrapServer = "localhost:29092";
    String outputTopic = "rainning-triggers";
    private void producerConfig() {
        // Kafka producer configuration
        Properties properties = new Properties();
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,
                kafkaBootstrapServer);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
                StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
                StringSerializer.class.getName());

        producer = new KafkaProducer<>(properties);


    }


     public KafkaConfig() {
        producerConfig();
    }



    public void sendWeatherMessage(String message) {
        ProducerRecord<String, String> record = new ProducerRecord<>(outputTopic, message);
        producer.send(record);
    }


}


