build:
    sudo docker-compose build

up:
    sudo docker-compose up

run: build up

.PHONY: build up run
