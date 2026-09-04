# SwasthyaSetu

SwasthyaSetu (*Health Bridge*) is a modular healthcare platform connecting frontline community health workers with primary health centers and district hospitals.

## System Architecture

The project is structured as a production-oriented monorepo:

```
swasthyasetu/
├── apps/
│   ├── frontline-mobile/       # Offline-first Flutter app for frontline health workers
│   └── facility-dashboard/     # Next.js web portal for facility triage & administration
├── backend/                    # FastAPI asynchronous backend service
├── packages/
│   └── contracts/              # Shared schemas, DTOs, and OpenAPI definitions
├── infrastructure/             # Docker, Kubernetes, and Terraform IaC
├── docs/                       # System architecture, API, and setup guides
├── tests/                      # Monorepo test suites (unit, integration, e2e)
├── .env.example                # Unified environment configuration template
├── .gitignore                  # Production monorepo gitignore rules
├── docker-compose.yml          # Local containerized development environment
├── Makefile                    # Developer workflow and task automation
├── LICENSE                     # MIT License
└── README.md                   # Project documentation
```

### Key Components

1. **Frontline Mobile (`apps/frontline-mobile`)**:
   Built with **Flutter** to deliver a responsive, offline-first experience for community healthcare workers logging visits and referrals in remote environments.
2. **Facility Dashboard (`apps/facility-dashboard`)**:
   Built with **Next.js** and **React** for healthcare administrators and doctors to manage incoming triage queues, bed availability, and referral telemetry.
3. **Core Backend (`backend/`)**:
   Built with **FastAPI**, **SQLAlchemy**, and **PostgreSQL/Redis** to handle high-throughput async processing, offline synchronization pipelines, and secure data access.
4. **Shared Contracts (`packages/contracts`)**:
   Shared interface and data specifications ensuring consistency between frontend clients and backend services.
5. **Infrastructure (`infrastructure/`)**:
   Infrastructure as Code (IaC) and containerization configurations for Docker Compose, Kubernetes, and Terraform.

---

## Quick Start

### 1. Prerequisites
- [Docker](https://www.docker.com/) and Docker Compose
- [Make](https://www.gnu.org/software/make/) (optional, for automation tasks)
- Python 3.11+, Node.js 20+, and Flutter SDK (for direct local development)

### 2. Environment Setup
Create your local environment file:
```bash
make setup
# Or copy manually
cp .env.example .env
```

### 3. Running with Docker Compose
To build and spin up the complete local development environment (FastAPI, Next.js dashboard, PostgreSQL, Redis):
```bash
make dev
```
- **FastAPI Backend**: [http://localhost:8000](http://localhost:8000) (Swagger docs at `/docs`)
- **Facility Dashboard**: [http://localhost:3000](http://localhost:3000)

To stop services:
```bash
make down
```

---

## Developer Commands

Run `make help` to inspect available development tasks:
- `make setup`: Initialize local `.env` configuration.
- `make dev`: Build and start containers in foreground.
- `make dev-db`: Spin up only PostgreSQL and Redis services.
- `make down`: Stop running containers.
- `make lint`: Run code linters across backend and frontend.
- `make test`: Run automated test suites.
- `make clean`: Clear caches and transient build artifacts.

---

## Documentation
Additional architectural notes, design decisions, and system specifications are located in [`docs/architecture.md`](file:///D:/hackathon%20projects/Swasthya%20Setu/docs/architecture.md).

## License
This project is licensed under the MIT License - see the [LICENSE](file:///D:/hackathon%20projects/Swasthya%20Setu/LICENSE) file for details.
