import logging
import sys


class EndpointFilter(logging.Filter):
    """Filter out healthcheck logs from uvicorn access logs."""
    def filter(self, record: logging.LogRecord) -> bool:
        return record.args and len(record.args) >= 3 and record.args[2] != "/health"


def setup_logging(log_level: str = "INFO") -> None:
    """Configures root and application loggers with readable text output."""
    root_logger = logging.getLogger()
    numeric_level = getattr(logging, log_level.upper(), logging.INFO)
    root_logger.setLevel(numeric_level)

    # Remove existing handlers to avoid duplicate logs
    for handler in list(root_logger.handlers):
        root_logger.removeHandler(handler)

    handler = logging.StreamHandler(sys.stdout)
    # Clean, human-readable format
    formatter = logging.Formatter(
        "%(asctime)s | %(levelname)-7s | %(name)s | %(message)s", 
        datefmt="%Y-%m-%d %H:%M:%S"
    )
    handler.setFormatter(formatter)
    root_logger.addHandler(handler)

    # Align uvicorn and fastapi loggers
    for logger_name in ("uvicorn", "uvicorn.error", "uvicorn.access", "fastapi"):
        l = logging.getLogger(logger_name)
        l.handlers = [handler]
        l.propagate = False

    # Suppress verbose uvicorn access logs for the /health endpoint
    logging.getLogger("uvicorn.access").addFilter(EndpointFilter())
