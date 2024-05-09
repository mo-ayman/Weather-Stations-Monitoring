#! /bin/bash

# Define the range from arguments
START_ID=${1:-1}
END_ID=${2:-5}

PROJECT_NAME=Weather-Stations-Monitoring

NETWORK=data-acquisition


docker-compose -p $PROJECT_NAME down

echo "Removing stations..."

docker ps -aq --filter "name=${PROJECT_NAME}*" | xargs docker stop

docker ps -aq --filter "name=${PROJECT_NAME}*" | xargs docker rm

docker network rm $NETWORK