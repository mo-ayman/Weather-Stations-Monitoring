#!/bin/bash

# Define the range from arguments

PROJECT_NAME=Weather-Stations-Monitoring-station


echo "Removing stations..."

docker ps -aq --filter "name=${PROJECT_NAME}*" | xargs docker stop
docker ps -aq --filter "name=${PROJECT_NAME}*" | xargs docker rm
