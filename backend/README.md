# FastAPI Backend Service

Async backend service for SwasthyaSetu built with **FastAPI**, **SQLAlchemy 2.0**, and **PostgreSQL**.

## Structure

```
app/
├── api/
│   ├── deps.py                 # Dependency injection (DB session, settings)
│   └── v1/
│       ├── router.py           # V1 API router
│       └── endpoints/
│           └── health.py       # Health check with DB connectivity
├── core/
│   ├── config.py               # Pydantic settings from environment
│   └── logging.py              # Structured text logging setup
├── db/
│   ├── base.py                 # SQLAlchemy DeclarativeBase
│   └── session.py              # Async engine & session factory
├── models/                     # ORM models (empty, ready for features)
├── schemas/
│   └── health.py               # Health response DTO
└── main.py                     # Application entrypoint
```

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Lightweight container health check |
| GET | `/api/v1/health` | Full health check (DB connectivity, version, environment) |
| GET | `/api/v1/docs` | Swagger interactive documentation |
| GET | `/api/v1/redoc` | ReDoc documentation |

## Local Development

Via Docker (recommended):
```bash
# From repo root
docker compose up --build
```

Directly with uvicorn:
```bash
cd backend
pip install -e ".[dev]"
uvicorn app.main:app --reload --port 8000
```

## Database Migrations

```bash
# Generate a new migration after changing models
docker compose exec backend alembic revision --autogenerate -m "description"

# Apply migrations
docker compose exec backend alembic upgrade head

# Check current revision
docker compose exec backend alembic current
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `ENVIRONMENT` | `development` | Runtime environment |
| `LOG_LEVEL` | `INFO` | Logging verbosity |
| `DATABASE_URL` | *(built from parts)* | Full async Postgres URL |
| `POSTGRES_USER` | `swasthya_user` | Database username |
| `POSTGRES_PASSWORD` | `swasthya_password` | Database password |
| `POSTGRES_HOST` | `postgres` | Database host |
| `POSTGRES_PORT` | `5432` | Database port |
| `POSTGRES_DB` | `swasthya_db` | Database name |
| `REDIS_URL` | `redis://redis:6379/0` | Redis connection URL |
| `ALLOWED_ORIGINS` | `http://localhost:3000` | CORS allowed origins |
