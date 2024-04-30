.PHONY: build-front
build-front: ## build frontend
	@cd frontend && make build

.PHONY: run-front-dev
run-front-dev: ## run frontend in development mode
	@cd frontend && make run-dev

.PHONY: run-front-prod
run-front-prod: ## build frontend and serve
	@cd frontend && make run-prod

.PHONY: 
run-prod: ## serve SSG files
	@cd frontend && make serve-static

.PHONY: help
help: ## display this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
