# SwasthyaSetu

**SwasthyaSetu** (*Health Bridge*) is a modular healthcare platform connecting frontline community health workers with primary health centers and district hospitals.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile | Flutter (offline-first) |
| Web Dashboard | Next.js 14, TypeScript, Tailwind CSS |
| Backend API | FastAPI, SQLAlchemy 2.0, Pydantic |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Migrations | Alembic (async) |
| Containers | Docker Compose |

## Monorepo Structure

```
swasthyasetu/
├── apps/
│   ├── frontline-mobile/       # Flutter app for ASHA/ANM health workers
│   └── facility-dashboard/     # Next.js web dashboard for facilities
├── backend/                    # FastAPI backend service
│   ├── app/
│   │   ├── api/v1/endpoints/   # Versioned REST endpoints
│   │   ├── core/               # Config, logging
│   │   ├── db/                 # SQLAlchemy engine & session
│   │   ├── models/             # ORM models
│   │   └── schemas/            # Pydantic DTOs
│   └── alembic/                # Database migrations
├── packages/contracts/         # Shared schemas & API specs
├── infrastructure/             # Docker, K8s, Terraform
├── docs/                       # Architecture documentation
├── tests/                      # Unit, integration, e2e tests
├── docker-compose.yml          # Local dev environment
├── Makefile                    # Developer commands
└── .env.example                # Environment template
```

## Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/) (with Compose)
- Node.js 20+ (for dashboard local dev)
- Python 3.11+ (for backend local dev)

### 1. Setup

```bash
cp .env.example .env
```

### 2. Start Infrastructure (Backend + DB + Cache)

```bash
docker compose up --build
```

This brings up:
- **FastAPI Backend** → http://localhost:8000
- **API Docs (Swagger)** → http://localhost:8000/api/v1/docs
- **PostgreSQL** → localhost:5432
- **Redis** → localhost:6379

### 3. Start Dashboard (separate terminal)

```bash
cd apps/facility-dashboard
npm install
npm run dev
```

**Dashboard** → http://localhost:3000

### 4. Run Migrations

```bash
docker compose exec backend alembic upgrade head
```

## Developer Commands

```bash
make help        # Show all available commands
make dev         # Start backend infrastructure
make dev-db      # Start only Postgres + Redis
make down        # Stop all containers
make lint        # Lint backend + frontend
make test        # Run all test suites
make clean       # Remove caches and build artifacts
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Container health check |
| GET | `/api/v1/health` | Full health check (includes DB status) |
| GET | `/api/v1/docs` | Swagger UI |

## License

MIT — see [LICENSE](LICENSE) for details.
