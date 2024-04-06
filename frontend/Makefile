.PHONY: build 
build: ## build nextjs
	@echo "Building frontend..."
	@bun next build

.PHONY: run-dev
run-dev: ## run nextjs in development mode
	@echo "Running frontend in development mode..."
	@bun run dev

.PHONY: help
help: ## display this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
