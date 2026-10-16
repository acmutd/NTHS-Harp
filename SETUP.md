# NTHS Hackathon — local development

## Project structure

- harp/frontend/: Next.js public website, port 3001.
- harp/backend/: Harp Go API, port 8080.
- harp/backend/client/portal/: Applicant and organizer portal, port 3000.
- PostgreSQL: stores event data in portal and authentication data in supertokens.
- SuperTokens: handles authentication, port 3567.
- Mailpit: captures development emails; inbox on port 8025.

Each developer runs their own database and creates their own environment files.
Git shares the source code, configuration examples, and database migrations.

## Requirements

- Git
- Docker Desktop, running
- Go 1.27 or a compatible newer version
- Node.js 22 and npm
- Task (go-task)
- golang-migrate CLI

## First-time setup

Clone the repository:

```bash
git clone https://github.com/acmutd/NTHS-Harp.git
cd NTHS-Harp
```

Create local configuration files from the examples:

```bash
cp harp/backend/.env.example harp/backend/.env
cp harp/backend/client/portal/.env.example harp/backend/client/portal/.env
cp harp/frontend/.env.example harp/frontend/.env.local
```

The examples contain local development credentials only.

Start PostgreSQL and SuperTokens:

```bash
docker compose -f harp/backend/docker-compose.local-st.yml up -d db supertokens
```

Create the Mailpit container once:

```bash
docker run -d \
  --name nths-mailpit \
  -p 127.0.0.1:1025:1025 \
  -p 127.0.0.1:8025:8025 \
  -e MP_SMTP_AUTH_ACCEPT_ANY=1 \
  -e MP_SMTP_AUTH_ALLOW_INSECURE=1 \
  axllent/mailpit:v1.27.4
```

Apply Harp's database migrations:

```bash
cd harp/backend
task migrate-up
cd ../..
```

Install both web applications' dependencies:

```bash
npm ci --prefix harp/backend/client/portal
npm ci --prefix harp/frontend
```

## Starting development

From the repository root, start the supporting services:

```bash
docker compose -f harp/backend/docker-compose.local-st.yml up -d db supertokens
docker start nths-mailpit
```

Use three separate terminals, each initially at the repository root.

Terminal 1 — API:

```bash
cd harp/backend
go run ./cmd/api
```

Terminal 2 — portal:

```bash
npm --prefix harp/backend/client/portal run dev -- --strictPort
```

Terminal 3 — public website:

```bash
npm --prefix harp/frontend run dev
```

Open:
- Public website: http://localhost:3001
- Portal: http://localhost:3000
- Development email inbox: http://localhost:8025

Request a login link in the portal, then open the email in Mailpit.

## Troubleshooting: missing SuperTokens database

If SuperTokens logs say database "supertokens" does not exist,
run these commands from the repository root:

```bash
docker compose -f harp/backend/docker-compose.local-st.yml exec -T db \
  psql -U admin -d postgres -v ON_ERROR_STOP=1 \
  -c "CREATE DATABASE supertokens OWNER admin;"

docker compose -f harp/backend/docker-compose.local-st.yml up -d supertokens
```

After startup, this should return Hello:

```bash
curl http://localhost:3567/hello
```

## Stopping development

Press Ctrl+C in each application terminal. From the repository root:

```bash
docker compose -f harp/backend/docker-compose.local-st.yml stop db supertokens
docker stop nths-mailpit
```

Database contents persist between sessions.
