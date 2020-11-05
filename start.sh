docker rm -f $(docker ps -a)

docker image rm -f t3_node-app

docker-compose up
