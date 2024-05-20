
docker build -t base-central-station ./base-central-station/base-central-station

docker build -t elastic-search ./elastic

docker build -t station ./station

docker build -t kafka ./kafka-zookeeper/kafka-processor


minikube cache add base-central-station
minikube cache add elastic-search
minikube cache add station
minikube cache add kafka