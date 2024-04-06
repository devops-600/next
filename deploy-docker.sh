#!/usr/bin/env bash
NAME="mysite3000"

if [ "$(docker inspect $NAME --format '{{.State.Status}}')" = "running" ]; then
  echo "the container is running"
  echo "stopping"
  docker stop $NAME
  echo "$NAME stopped"
fi
if [ "$(docker inspect $NAME --format '{{.State.Status}}')" = "exited" ]; then
  echo "the container is exited"
  echo "deleting"
  docker rm $NAME
  echo "$NAME deleted"
fi

docker run -d -p 3000:3000 --name $NAME ghcr.io/kkzxak47/nextjs-app:latest
echo "$NAME started"
