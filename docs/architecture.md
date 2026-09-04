# Architecture Overview

## Monorepo Layout
SwasthyaSetu is organized as a unified monorepo to maintain strong cohesion between client interfaces, APIs, and shared domain models:

- **Apps (`apps/`)**:
  - `frontline-mobile`: Flutter application optimized for low-connectivity frontline health workers with local SQLite caching.
  - `facility-dashboard`: Next.js web application for PHCs and district hospitals to manage triage queues and track incoming cases.
- **Backend (`backend/`)**:
  - FastAPI asynchronous service layer handling authentication, synchronization queues, and transactional storage.
- **Shared Packages (`packages/`)**:
  - `contracts`: Common schemas and API definitions shared across teams.
- **Infrastructure (`infrastructure/`)**:
  - Container manifests, Kubernetes deployment descriptors, and Terraform modules.
- **Tests (`tests/`)**:
  - Automated unit, integration, and end-to-end verification suites across services.
