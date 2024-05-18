import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.elasticsearch.client.Request;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;

import javax.net.ssl.SSLContext;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ElasticSearch {
    private long expectedSeqNo;
    private boolean isValidSeqNo;
    private final RestClient restClient;
    private final ObjectMapper objectMapper;

    private static final String ELASTICSEARCH_URL = "https://localhost:9200"; // Use your Elasticsearch URL
    private static final String CA_CERT_PATH = "/media/gamal/volume/semester/data/assig/5/http_ca.crt"; // Path to your CA certificate
    private static final String ELASTICSEARCH_USERNAME = "elastic"; // Replace with your Elasticsearch username
    private static final String ELASTICSEARCH_PASSWORD = "fpzwLcYcdTS_ug8stPju"; // Replace with your Elasticsearch password

    public ElasticSearch() {
        this.isValidSeqNo = false;
        this.objectMapper = new ObjectMapper();
        this.restClient = createRestClient();
    }

    private RestClient createRestClient() {
        try {
            Path caCertPath = Paths.get(CA_CERT_PATH);

            // Load CA certificate
            SSLContextBuilder sslContextBuilder = SSLContextBuilder.create();
            try (InputStream is = Files.newInputStream(caCertPath)) {
                sslContextBuilder.loadTrustMaterial(null, (chain, authType) -> true);
            }

            SSLContext sslContext = sslContextBuilder.build();

            BasicCredentialsProvider credentialsProvider = new BasicCredentialsProvider();
            credentialsProvider.setCredentials(AuthScope.ANY,
                    new UsernamePasswordCredentials(ELASTICSEARCH_USERNAME, ELASTICSEARCH_PASSWORD));

            CloseableHttpClient httpClient = HttpClients.custom()
                    .setSSLContext(sslContext)
                    .setDefaultCredentialsProvider(credentialsProvider)
                    .build();

            return RestClient.builder(HttpHost.create(ELASTICSEARCH_URL))
                    .setHttpClientConfigCallback(httpClientBuilder -> httpClientBuilder
                            .setSSLContext(sslContext)
                            .setDefaultCredentialsProvider(credentialsProvider))
                    .build();
        } catch (Exception e) {
            throw new RuntimeException("Error creating RestClient: " + e.getMessage(), e);
        }
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
