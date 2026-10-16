# NTHS-Harp

Monorepo for the NTHS Hackathon: our own website plus [Harp](apps/harp/backend/README.md), the hackathon backend and applicant/organizer portal.

## Services

| Service | Path | Stack | Port | Package manager |
| --- | --- | --- | --- | --- |
| NTHS frontend | `apps/nths-frontend` | Next.js | 3002 | pnpm (workspace) |
| Harp portal | `apps/harp/backend/client/portal` | Vite + React | 3000 | npm |
| Harp public site | `apps/harp/frontend` | Next.js | 3001 | npm |
| Harp API | `apps/harp/backend` | Go | 8080 | Go modules |
| PostgreSQL | Docker | Postgres 16 | 5432 | — |
| SuperTokens (auth) | Docker | SuperTokens | 3567 | — |
| Mailpit (dev email) | Docker | Mailpit | 8025 (inbox), 1025 (SMTP) | — |

`apps/nths-frontend` is the only pnpm workspace package. The Harp apps keep their own `package-lock.json` and are installed with npm, so their files stay the same as the original Harp project's.

> **Port 3000 belongs to the Harp portal.** SuperTokens is configured with `FRONTEND_URL=http://localhost:3000`, so the portal can't move. The NTHS frontend's scripts run it on 3002 so both can run at the same time.

## Requirements

- Git
- Docker Desktop (running)
- Node.js 22+ with npm
- pnpm 11 (`npm install -g pnpm`)
- Go 1.27+
- [Task](https://taskfile.dev) (`brew install go-task`)
- [golang-migrate](https://github.com/golang-migrate/migrate) CLI (`brew install golang-migrate`)

You only need Go, Docker, Task and golang-migrate if you're running Harp. For just the NTHS frontend, Node and pnpm are enough.

## First-time setup

All commands run from the repository root unless a step says otherwise.

```bash
git clone https://github.com/acmutd/NTHS-Harp.git
cd NTHS-Harp
```

### 1. Environment files

```bash
cp apps/harp/backend/.env.example               apps/harp/backend/.env
cp apps/harp/backend/client/portal/.env.example apps/harp/backend/client/portal/.env
cp apps/harp/frontend/.env.example              apps/harp/frontend/.env.local
```

The examples contain local development values only. Never commit real `.env` files.

### 2. Install dependencies

```bash
pnpm install                                         # NTHS frontend
npm ci --prefix apps/harp/backend/client/portal      # Harp portal
npm ci --prefix apps/harp/frontend                   # Harp public site
```

### 3. Start the database and auth (Docker)

```bash
docker compose -f apps/harp/backend/docker-compose.local-st.yml up -d db supertokens
```

Create the Mailpit container (only once):

```bash
docker run -d \
  --name nths-mailpit \
  -p 127.0.0.1:1025:1025 \
  -p 127.0.0.1:8025:8025 \
  -e MP_SMTP_AUTH_ACCEPT_ANY=1 \
  -e MP_SMTP_AUTH_ALLOW_INSECURE=1 \
  axllent/mailpit:v1.27.4
```

### 4. Run database migrations

```bash
cd apps/harp/backend
task migrate-up
cd ../../..
```

## Running the services

### Start the Docker services

Do this each time you start working:

```bash
docker compose -f apps/harp/backend/docker-compose.local-st.yml up -d db supertokens
docker start nths-mailpit
```

### Start the apps

Run each app in its own terminal, starting from the repo root:

| Terminal | Service | Command |
| --- | --- | --- |
| 1 | Harp API | `cd apps/harp/backend && go run ./cmd/api` |
| 2 | Harp portal | `npm --prefix apps/harp/backend/client/portal run dev -- --strictPort` |
| 3 | Harp public site | `npm --prefix apps/harp/frontend run dev` |
| 4 | NTHS frontend | `pnpm dev` |

Start the API before the portal and public site, because both call it. If you're only working on the NTHS frontend, you only need terminal 4.

Then open:

- NTHS frontend: http://localhost:3002
- Harp portal: http://localhost:3000
- Harp public site: http://localhost:3001
- Dev email inbox (Mailpit): http://localhost:8025

To sign in to the portal, request a login link, then open the email in Mailpit.

## Stopping

Press `Ctrl+C` in each app terminal, then:

```bash
docker compose -f apps/harp/backend/docker-compose.local-st.yml stop db supertokens
docker stop nths-mailpit
```

Database contents persist between sessions.

## Useful commands

| What | Command |
| --- | --- |
| Build / lint the NTHS frontend | `pnpm build` / `pnpm lint` |
| Lint the Harp portal | `npm --prefix apps/harp/backend/client/portal run lint` |
| Lint the Harp public site | `npm --prefix apps/harp/frontend run lint` |
| Run Go tests | `cd apps/harp/backend && task test` |
| Roll back one migration | `cd apps/harp/backend && task migrate-down` |
| Create a migration | `cd apps/harp/backend && task migrate-create -- <name>` |
| Seed the database | `cd apps/harp/backend && task seed` |

## Troubleshooting

### SuperTokens: database "supertokens" does not exist

This happens if the Postgres volume was created before the init script ran. From the repo root:

```bash
docker compose -f apps/harp/backend/docker-compose.local-st.yml exec -T db \
  psql -U admin -d postgres -v ON_ERROR_STOP=1 \
  -c "CREATE DATABASE supertokens OWNER admin;"

docker compose -f apps/harp/backend/docker-compose.local-st.yml up -d supertokens
```

`curl http://localhost:3567/hello` should then return `Hello`.

### Harp public site shows no schedule, sponsors or FAQ

`HARP_PUBLIC_API_KEY` in `apps/harp/frontend/.env.local` must match `PUBLIC_API_KEY` in `apps/harp/backend/.env`.

## More docs

- Harp backend: [apps/harp/backend/README.md](apps/harp/backend/README.md)
- Harp public site: [apps/harp/frontend/README.md](apps/harp/frontend/README.md)
