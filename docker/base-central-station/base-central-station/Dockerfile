FROM adoptopenjdk:11-jre-hotspot AS base

# Set the working directory
WORKDIR /app

# Copy your application JAR file
COPY base-central-station.jar /app


# Command to run your application
CMD ["java", "-jar", "/app/base-central-station.jar"]
