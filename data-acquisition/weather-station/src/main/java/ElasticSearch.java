import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpHost;
import org.elasticsearch.client.Request;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;

import java.io.IOException;

public class ElasticSearch {
    private long expectedSeqNo;
    private boolean isValidSeqNo;
    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    public ElasticSearch() {
        this.isValidSeqNo = false;
        this.objectMapper = new ObjectMapper();
        RestClientBuilder builder = RestClient.builder(HttpHost.create("http://localhost:9200"));
        this.restClient = builder.build();
    }

    public void processMessage(WeatherMessage weatherMessage) {
        if (!isValidSeqNo) {
            expectedSeqNo = weatherMessage.getS_no();
            isValidSeqNo = true;
        }

        long seqNo = weatherMessage.getS_no();

        if (seqNo == expectedSeqNo) {
            String index = "station-" + weatherMessage.getStation_id();
            send(weatherMessage, index);

            expectedSeqNo++;
        } else if (seqNo > expectedSeqNo) {
            long droppedMessages = seqNo - expectedSeqNo;

            String index = "dropped-station-" + weatherMessage.getStation_id();
            handleDroppedMessages(droppedMessages, index);

            expectedSeqNo = seqNo + 1;
        }
    }

    public void send(WeatherMessage weatherMessage, String index) {
        try {
            Request request = new Request("POST", "/" + index + "/_doc");
            request.setJsonEntity(convertToJson(weatherMessage));
            Response response = restClient.performRequest(request);
            int statusCode = response.getStatusLine().getStatusCode();
            checkStatusCode(statusCode, false);
        } catch (IOException e) {
            System.out.println("Error sending message: " + e.getMessage());
        }
    }

//    private String convertToJson(WeatherMessage weatherMessage) {
//        try {
//            return objectMapper.writeValueAsString(weatherMessage);
//        } catch (JsonProcessingException e) {
//            System.out.println("Error converting to JSON: " + e.getMessage());
//            return null;
//        }
//    }

    private String convertToJson(WeatherMessage weatherMessage) throws JsonProcessingException {
        return objectMapper.writeValueAsString(weatherMessage);
    }

    private void checkStatusCode(int statusCode, boolean isDroppedMessage) {
        if (statusCode == 200 || statusCode == 201) {
            if (isDroppedMessage) {
                System.out.println("Dropped messages notification sent successfully");
            } else {
                System.out.println("Message sent successfully");
            }
        } else {
            if (isDroppedMessage) {
                System.out.println("Error sending dropped messages: " + statusCode);
            } else {
                System.out.println("Error sending message: " + statusCode);
            }
        }
    }

    private void handleDroppedMessages(long droppedMessages, String index) {
        try {
            Request request = new Request("POST", "/" + index + "/_doc");
            request.setJsonEntity("{\"dropped_messages\": " + droppedMessages + "}");
            Response response = restClient.performRequest(request);
            int statusCode = response.getStatusLine().getStatusCode();
            checkStatusCode(statusCode, true);
        } catch (IOException e) {
            System.out.println("Error sending dropped messages: " + e.getMessage());
        }
    }
}
