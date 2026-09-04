# FastAPI Backend Service

Core backend service powering authentication, offline data synchronization, FHIR-compliant encounter storage, and referral dispatching.

## Architecture
- `app/api/`: Versioned API endpoints (`v1/`)
- `app/core/`: Application settings, security utilities, database engine setup
- `app/models/`: SQLAlchemy ORM database models
- `app/schemas/`: Pydantic request and response transfer schemas
- `app/services/`: Core application services and orchestrators

## Local Development
Run via root docker compose:
```bash
make dev
```
Or directly with uvicorn:
```bash
uvicorn app.main:app --reload --port 8000
```

## Database Migrations (Alembic)
Run migrations through the backend container or locally:
```bash
# Create a new migration revision
docker compose exec backend alembic revision --autogenerate -m "migration_description"

# Apply pending migrations
docker compose exec backend alembic upgrade head

# Check current migration status
docker compose exec backend alembic current
```

