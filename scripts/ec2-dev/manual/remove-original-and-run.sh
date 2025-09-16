docker stop peekle-dev || true && \
docker rm peekle-dev || true && \
docker run \
  -d \
  -p 80:7777 \
  --name peekle-dev \
  --env-file /home/ubuntu/.env \
  peekle/peekle-develop:latest

docker logs -f peekle-dev

docker exec -it peekle-dev /bin/sh