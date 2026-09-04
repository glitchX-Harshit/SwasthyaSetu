import logging
import time
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.core.config import settings
from app.core.logging import setup_logging

setup_logging(settings.LOG_LEVEL)
logger = logging.getLogger("swasthya.api")


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    logger.info(f"Starting {settings.PROJECT_NAME} v{settings.VERSION} [{settings.ENVIRONMENT}]")
    yield
    logger.info(f"Shutting down {settings.PROJECT_NAME}")


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    redoc_url=f"{settings.API_V1_STR}/redoc",
    lifespan=lifespan,
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Structured Request Logging Middleware
@app.middleware("http")
async def log_requests(request: Request, call_next) -> Response:
    start_time = time.perf_counter()
    client_host = request.client.host if request.client else "unknown"

    response = await call_next(request)

    # Skip logging frequent health checks to avoid log spam
    if request.url.path == "/health":
        return response

    process_time_ms = round((time.perf_counter() - start_time) * 1000, 2)
    logger.info(
        f"{client_host} - \"{request.method} {request.url.path}\" {response.status_code} ({process_time_ms}ms)"
    )
    return response



# Root health check endpoint (used by container healthcheck orchestrators)
@app.get("/health", tags=["Health"])
async def root_health() -> dict[str, str]:
    return {"status": "ok"}


# Mount versioned API routes
app.include_router(api_router, prefix=settings.API_V1_STR)
