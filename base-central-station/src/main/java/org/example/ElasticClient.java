package org.example;

import java.io.*;
import java.net.Socket;
import java.net.UnknownHostException;

public class ElasticClient {
    String serverAddress = System.getenv("ELASTIC_SERVER"); // Server's IP address
    int portNumber = 12345; // Server's port number

    public ElasticClient() {
        System.out.println("ElasticClient created with server address: " + serverAddress + " and port number: " + portNumber);
    }

    public void notifyElasticSearch(String dirPath) {
        System.out.println("Notifying Elastic Search with data from " + dirPath);

        try {
            // Connect to the server
            Socket socket = new Socket(serverAddress, portNumber);

            // Create input and output streams
            InputStream inputStream = socket.getInputStream();
            OutputStream outputStream = socket.getOutputStream();

            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream));

            // Send a request to the server
            writer.println(dirPath);
            writer.flush(); // Flush the output stream to ensure data is sent

            // Read the response from the server
            String response = reader.readLine();
            System.out.println("Server response: " + response);

            // Close the streams and socket
            reader.close();
            writer.close();
            socket.close();

        } catch (IOException e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
