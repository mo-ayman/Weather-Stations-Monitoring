#! /bin/bash

# Define the range from arguments
START_ID=$1
END_ID=$2
PROJECT_NAME=Weather-Stations-Monitoring

NETWORK=$3

for((i = START_ID; i <= END_ID; i++)); do
    echo "Starting station $i"
    docker run -d --rm --name $PROJECT_NAME-station-$i -e STATION_ID=$i -e KAFKA_BOOTSTRAP_SERVER="kafka:9092" --network $NETWORK station
done