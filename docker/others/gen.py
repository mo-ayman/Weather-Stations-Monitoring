import yaml

def generate_docker_compose(start_station_id, end_station_id):
    docker_compose = {
        "version": "3",
        "services": {
            "zookeeper": {
                "image": "docker.io/bitnami/zookeeper:3.9",
                "ports": ["2181:2181"],
                "volumes": ["zookeeper_data:/bitnami"],
                "environment": ["ALLOW_ANONYMOUS_LOGIN=yes", "ZOOKEEPER_CLIENT_PORT=2181", "ZOOKEEPER_TICK_TIME=2000"],
                "networks": ["data-acquisition"]
            },
            "kafka": {
                "image": "docker.io/bitnami/kafka:3.4",
                "volumes": ["kafka_data:/bitnami", "${PWD}/kafka-processor:/app"],
                "ports": ["29092:29092"],
                "environment": [
                    "KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181",
                    "KAFKA_LISTENERS=EXTERNAL_SAME_HOST://:29092,INTERNAL://:9092",
                    "KAFKA_ADVERTISED_LISTENERS=INTERNAL://kafka:9092,EXTERNAL_SAME_HOST://localhost:29092",
                    "KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=INTERNAL:PLAINTEXT,EXTERNAL_SAME_HOST:PLAINTEXT",
                    "KAFKA_INTER_BROKER_LISTENER_NAME=INTERNAL",
                    "KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1",
                    "KAFKA_BOOTSTRAP_SERVER=kafka:9092",
                    f"START_STATION_ID={start_station_id}",
                    f"END_STATION_ID={end_station_id}",
                    "OUTPUT_TOPIC=rainning-triggers"
                ],
                "depends_on": ["zookeeper"],
                "networks": ["data-acquisition"],
                "command": ["java", "-jar", "/app/raining-triggers.jar"]
            }
        },
        "volumes": {
            "zookeeper_data": {"driver": "local"},
            "kafka_data": {"driver": "local"}
        },
        "networks": {
            "data-acquisition": {"external": True}
        }
    }

    # Add stations
    for i in range(start_station_id, end_station_id + 1):
        docker_compose["services"][f"station{i}"] = {
            "build": {"context": "./station", "dockerfile": "Dockerfile"},
            "environment": {
                "KAFKA_BOOTSTRAP_SERVER": "kafka:9092",
                "STATION_ID": str(i)
            },
            "depends_on": ["kafka"],
            "networks": ["data-acquisition"]
        }

    return docker_compose

def write_docker_compose(docker_compose, output_file):
    with open(output_file, "w") as f:
        yaml.dump(docker_compose, f)

if __name__ == "__main__":
    start_station_id = 1
    end_station_id = 10
    output_file = "docker-compose-generated.yml"

    docker_compose = generate_docker_compose(start_station_id, end_station_id)
    write_docker_compose(docker_compose, output_file)
    print(f"Docker Compose file generated to {output_file}")

