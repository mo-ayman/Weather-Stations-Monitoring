FROM docker.elastic.co/elasticsearch/elasticsearch:7.17.21

# Install OpenJDK 11
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app
COPY  java-over-parquet.jar /app/

CMD ["/bin/bash", "-c", "exec tini -- /usr/local/bin/docker-entrypoint.sh eswrapper & java -jar /app/java-over-parquet.jar"]

