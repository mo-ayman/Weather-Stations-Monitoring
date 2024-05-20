NETWORK=data-acquisition

START_ID=${1:-1}
END_ID=${2:-10} 
# --project-name $PROJECT_NAME
PROJECT_NAME=Weather-Stations-Monitoring

docker network create $NETWORK

docker-compose -f kafka-zookeeper.yml -p $PROJECT_NAME up -d 


for((i = START_ID; i <= END_ID; i++)); do
    echo "Starting station $i"
    docker run -d --name $PROJECT_NAME-station-$i -e STATION_ID=$i -e KAFKA_BOOTSTRAP_SERVER="kafka:9092" --network $NETWORK station
done



