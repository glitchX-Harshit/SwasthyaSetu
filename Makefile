.PHONY: help setup dev down lint test test-unit test-integration clean

SHELL := /bin/bash

help: ## Show this help message
	@echo "SwasthyaSetu Monorepo Developer Commands"
	@echo "========================================"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## Copy sample environments and initialize workspace prerequisites
	@test -f .env || cp .env.example .env
	@echo "Copied .env.example to .env (customize as needed)."

dev: ## Start backend and local infrastructure via Docker Compose
	docker compose up --build

down: ## Stop all active Docker Compose services and containers
	docker compose down

dev-db: ## Run only Postgres and Redis background infrastructure
	docker compose up -d postgres redis

lint-backend: ## Run static analysis and linter on the FastAPI backend
	cd backend && ruff check .

lint-frontend: ## Run static analysis on Next.js facility dashboard
	cd apps/facility-dashboard && npm run lint

lint: ## Run linters across all monorepo projects
	@echo "Linting backend..."
	@$(MAKE) lint-backend || true
	@echo "Linting facility dashboard..."
	@$(MAKE) lint-frontend || true

test-unit: ## Run backend and package unit tests
	pytest tests/unit

test-integration: ## Run monorepo integration test suite
	pytest tests/integration

test-e2e: ## Run end-to-end integration test suite
	pytest tests/e2e

test: ## Execute all test suites across the monorepo
	pytest tests

clean: ## Clean transient build files, caches, and test artifacts
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type d -name ".pytest_cache" -exec rm -rf {} +
	find . -type d -name ".next" -exec rm -rf {} +
	find . -type d -name "node_modules" -exec rm -rf {} +
