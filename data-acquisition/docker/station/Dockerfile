FROM adoptopenjdk:11-jre-hotspot AS base

# Set the working directory
WORKDIR /app

# Copy your application JAR file
COPY weather-station.jar /app

# Command to run your application
CMD ["java", "-jar", "weather-station.jar"]
