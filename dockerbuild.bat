docker rmi -f nameofapp:latest
docker container prune -f
docker build -t nameofapp .
docker run -d -p 8080:80 nameofapp