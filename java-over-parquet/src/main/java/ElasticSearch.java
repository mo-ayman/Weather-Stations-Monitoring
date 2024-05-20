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
    private final RestClient restClient;

    private static final String ELASTICSEARCH_URL = "http://localhost:9200"; // Use your Elasticsearch URL
    public ElasticSearch() {
        System.out.println("creating elastic search");
        this.restClient = createRestClient();
    }

    private RestClient createRestClient() {
        try {
            System.out.println("creating rest client");
//
//            // Load CA certificate
            SSLContextBuilder sslContextBuilder = SSLContextBuilder.create();
//            try (InputStream is = Files.newInputStream(caCertPath)) {
//                sslContextBuilder.loadTrustMaterial(null, (chain, authType) -> true);
//            }

            SSLContext sslContext = sslContextBuilder.build();

            BasicCredentialsProvider credentialsProvider = new BasicCredentialsProvider();

            return RestClient.builder(HttpHost.create(ELASTICSEARCH_URL))
                    .setHttpClientConfigCallback(httpClientBuilder -> httpClientBuilder
                            .setSSLContext(sslContext)
                            .setDefaultCredentialsProvider(credentialsProvider))
                    .build();
        } catch (Exception e) {
            throw new RuntimeException("Error creating RestClient: " + e.getMessage(), e);
        }
    }

    public void processMessage(String index, String message) {
            send(message, index);
    }

    public void send(String  message, String index) {
        try {
            Request request = new Request("POST", "/" + index + "/_doc");
            request.setJsonEntity(message);
            Response response = restClient.performRequest(request);
//            int statusCode = response.getStatusLine().getStatusCode();
        } catch (IOException e) {
            System.out.println("Error sending message: " + e.getMessage());
        }
    }


}
