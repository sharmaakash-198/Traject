# Baseline technical architecture — v1.0

## Topology
Browser/PWA → Cloudflare Pages static frontend → Render Free Express API → Supabase PostgreSQL/Auth/Private Storage. Local development uses Vite + Express + local Supabase CLI. LLM and Gmail integrations are provider adapters behind application services. MCP is a separate package/server reusing the same application services and authenticated API; no direct DB bypass.

## Monorepo
- `apps/web`: React PWA.
- `apps/api`: Express REST API, modules, middleware, integrations and infrastructure.
- `apps/mcp-server`: planned MCP adapter (not yet implemented).
- `packages/shared-types`, `validation`, `api-contracts`: shared contracts.
- `prisma/`, `supabase/`: schema and migrations.
- `docs/`, `.agents/skills/`, `.github/`: project governance and automation.

## API baseline (`/api/v1`)
Auth: `GET /auth/me`, `POST /auth/logout`. Jobs: `POST /jobs/ingest`, `POST /jobs`, `GET /jobs`, `GET /jobs/:id`, `PATCH /jobs/:id`. Applications: `POST /applications`, `GET /applications`, `GET /applications/:id`, `PATCH /applications/:id/status`, `GET /applications/:id/timeline`. Resumes: `POST /resumes`, `GET /resumes`, `POST /resumes/:id/tailor`, `GET /resumes/:id/versions`, `GET /resume-versions/:id`, `POST /resume-versions/:id/approve`. Recruiters: `POST /recruiters`, `GET /recruiters`, `POST /recruiters/:id/verify`, `POST /jobs/:id/recruiters`. Email: `POST /email-drafts/generate`, `PATCH /email-drafts/:id`, `POST /email-drafts/:id/approve`, `POST /email-drafts/:id/send`, `GET /email-threads`, `GET /email-threads/:id`. Gmail: connect/callback/sync/status under `/integrations/gmail`. Interviews, reminders and analytics endpoints are specified in the PRD baseline.

## Data model target
companies, jobs, job_description_versions, applications, application_status_history, application_activities, recruiters, job_recruiters, recruiter_email_sources, master_resumes, resume_versions, resume_claims, email_drafts, email_threads, email_messages, email_attachments, interviews, interview_rounds, interview_notes, followup_reminders, notifications, oauth_accounts, sync_cursors, integration_sync_logs, ai_generation_logs, approval_requests, agent_action_logs.

## Security
Supabase Auth single owner account; disable public registration. Enforce auth on every private API route. Private storage buckets. Server-side encrypted OAuth tokens. Strict CORS, Helmet, Zod validation, rate limiting on sensitive endpoints, audit log. No secrets in frontend bundle. No full sensitive data in logs. Backups exported offsite and restore tested.

## Deployment constraints
Cloudflare Pages frontend; Render Free API; Supabase Free database/storage/auth. Render filesystem is ephemeral and service can sleep. No always-on worker; sync/reminders evaluated on app open or manual action. Supabase project may pause; implement graceful reconnect and backup plan.
