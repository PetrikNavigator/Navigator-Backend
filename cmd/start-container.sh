#!/bin/bash

docker compose -f docker/compose.yaml down
docker network remove backend-net
docker network create -d bridge backend-net
docker build -f docker/Dockerfile -t petrik-navigator-backend .
docker compose -f docker/compose.yaml up