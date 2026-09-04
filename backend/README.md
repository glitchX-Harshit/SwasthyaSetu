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
