.PHONY: build 
build: ## build nextjs
	@echo "Building frontend..."
	@bun next build

.PHONY: run-dev
run-dev: ## run nextjs in development mode
	@echo "Running frontend in development mode..."
	@bun run dev

.PHONY: serve-ssg
serve-ssg: ## serve SSG files
	@echo "Serving SSG files..."
	@npx serve@latest out

.PHONY: run-prod
run-prod: ## build frontend and serve
	@make build
	@make serve-ssg

.PHONY: help
help: ## display this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
