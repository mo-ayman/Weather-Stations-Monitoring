NETWORK=data-acquisition

START_ID=${1:-1}
END_ID=${2:-5} 
# --project-name $PROJECT_NAME
PROJECT_NAME=Weather-Stations-Monitoring

docker network create $NETWORK

docker-compose -p $PROJECT_NAME up -d 


for((i = START_ID; i <= END_ID; i++)); do
    echo "Starting station $i"
    docker run -d --rm --name $PROJECT_NAME-station-$i -e STATION_ID=$i -e KAFKA_BOOTSTRAP_SERVER="kafka:9092" --network $NETWORK station
done



