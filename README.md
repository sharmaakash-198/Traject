# Personal Job Workspace

Private, single-user job-search and productivity workspace. This repository is the engineering source of truth; see `docs/` before changing architecture.

## Stack
- React + TypeScript + Vite + Tailwind-ready UI (PWA-ready)
- Node.js 22 + Express API
- Supabase PostgreSQL + Prisma
- npm workspaces monorepo
- Vitest, Supertest, Playwright (introduced as modules mature)

## Quick start

```bash
cp .env.example .env
npm install
npm run dev
```

The web app runs at `http://localhost:5173`; API at `http://localhost:4000`; API health at `/api/v1/health`.

## Local Supabase

```bash
npx supabase start
```

Set `DATABASE_URL` to the local Supabase Postgres connection string shown by the CLI, then:

```bash
npm run db:generate
npm run db:push
```

## AI coding tools
Read `AGENTS.md` first. Claude Code, Cursor and Gemini CLI instructions are included. Skills live in `.agents/skills/` and are portable across supported Agent Skills implementations. Start a new AI session with: “Read AGENTS.md and docs/STATUS.md, then continue the next unchecked Phase 0 task. Do not skip validation.”

## Current status
Phase 0 foundation scaffold. This is intentionally not yet a feature-complete application. See `docs/STATUS.md` and `docs/DEVELOPMENT_PLAN.md`.

## Security
Never commit `.env`, OAuth tokens, service-role keys, resume files, generated PDFs, recruiter personal data or database dumps. Use a personal device/account for personal job-search data; follow employer policies on managed devices.
