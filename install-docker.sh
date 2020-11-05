docker build --tag node-app:latest .

docker pull mongodb:latest

docker run -p 27017:27017 -v ${PWD}/data/mongo:/data/db:rw mongodb:3.0.4
docker run -p 8000:8000 node-app:latest
