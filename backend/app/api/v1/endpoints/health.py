import logging
from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_db, get_settings
from app.core.config import Settings
from app.schemas.health import HealthResponse

router = APIRouter()
logger = logging.getLogger(__name__)


@router.get("", response_model=HealthResponse)
async def check_health(
    db: AsyncSession = Depends(get_db),
    app_settings: Settings = Depends(get_settings),
) -> HealthResponse:
    db_status = "connected"
    try:
        await db.execute(text("SELECT 1"))
    except Exception as exc:
        logger.error(f"Database health check failed: {exc}", exc_info=True)
        db_status = "disconnected"

    return HealthResponse(
        status="ok" if db_status == "connected" else "degraded",
        environment=app_settings.ENVIRONMENT,
        version=app_settings.VERSION,
        database=db_status,
    )
