#!/bin/bash

cd /Users/michal/Documents/agh
docker-compose -f bookstore-api-products/BookstoreApiProducts/docker-compose.yml -f bookstore-api-products/BookstoreApiProducts/docker-compose.override.yml up -d --build
docker-compose -f bookstore-api/docker-compose.yml up -d