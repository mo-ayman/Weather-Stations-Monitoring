import java.io.*;
import java.net.*;
import java.util.ArrayList;

public class Server {
    static ElasticSearch elasticSearch = new ElasticSearch();
    public static void main(String[] args) {
        int portNumber = 12345;

        try {
            ServerSocket serverSocket = new ServerSocket(portNumber);

            System.out.println("Server is running and waiting for connections...");

            while (true) {
                Socket clientSocket = serverSocket.accept();

                // Start a new thread to handle the client request
                new ClientHandler(clientSocket).start();
            }

        } catch (IOException e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}

class ClientHandler extends Thread {
    private Socket clientSocket;

    public ClientHandler(Socket clientSocket) {
        this.clientSocket = clientSocket;
    }

    public void run() {
        try {
            InputStream inputStream = clientSocket.getInputStream();
            OutputStream outputStream = clientSocket.getOutputStream();

            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream));

            String clientMessage;
            if ((clientMessage = reader.readLine()) != null) {
                // Process the API path here
                String response = processApiPath(clientMessage);

                // Send the response back to the client
                writer.println(response);
                writer.flush(); // Flush the output stream
            }

            reader.close();
            writer.close();
            clientSocket.close();

        } catch (IOException e) {
            System.err.println("Error occurred while handling client request: " + e.getMessage());
        }
    }

    // Method to process the API path received from the client
    private String processApiPath(String apiPath) {
        System.out.println(apiPath);

        ArrayList<String> messages;
        try {
            messages = ReadParquet.read(apiPath);

            System.out.println("Path: " + apiPath.split("/")[1]);
            for (String message : messages) {
                Server.elasticSearch.processMessage(apiPath.split("/")[2], message);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "Received API path: " + apiPath;
    }
}
