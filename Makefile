MAKEFLAGS += --silent

all:
	$(shell docker-compose up -d --build)
up:
	$(shell docker-compose up -d)
down:
	$(shell docker-compose down)
