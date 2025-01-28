include ./strapi/.env

DOCKER_COMP = docker compose
DOCKER_COMPOSE_DEV = -f compose.yml

NODE_CONT = $(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) exec node

NODE = $(NODE_CONT) node

build:
	@$(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) build --pull --build-arg NO_CACHE=0

build-no-cache:
	@$(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) build --pull --no-cache

up:
	@$(eval env ?=)
	@$(eval o ?=)
	@$(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) --env-file $(if $(env),$(env),'strapi/.env') up --detach $(o)

start: build up

down:
	@$(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) down --remove-orphans

logs:
	@$(DOCKER_COMP) $(DOCKER_COMPOSE_DEV) logs --tail=0 --follow

node:
	@$(NODE_CONT) bash