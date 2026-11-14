# Product requirements document — baseline v1.0

## Vision
A private, single-user responsive web/PWA workspace to manage the complete job-search lifecycle. One source-of-truth database; AI assists but the user makes final decisions.

## Constraints
- Single user; private login; no public registration or multi-tenancy.
- Strict ₹0 infrastructure target excluding optional LLM API use.
- Local-first development, cloud only after validation.
- Free-tier limitations accepted: cold starts, on-demand sync/reminders, possible Supabase inactivity pause.
- No always-on worker requirement; no paid infrastructure dependency.
- Portable architecture and export/restore procedures.

## Stack
React, TypeScript, Vite, Tailwind, shadcn/ui/Radix, TanStack Query, React Router, React Hook Form, Zod, vite-plugin-pwa; Node 22, Express, Prisma, Supabase PostgreSQL/Auth/private Storage; Cloudflare Pages, Render Free; Gemini via provider adapter; Gmail API; official MCP SDK.

## Modules
1. Dashboard and analytics.
2. Job management and JD extraction/versioning.
3. Resume intelligence with existing Overleaf LaTeX template.
4. Recruiter management and email provenance.
5. Email drafting, approval and sending.
6. Gmail synchronization and reply history.
7. Application lifecycle and timeline.
8. Follow-up manager and on-demand reminders.
9. Evidence-grounded AI assistant.
10. Authenticated MCP integration.

## Core workflows and safety
- Job URL ingestion with manual JD paste fallback; preserve original JD and versions; detect duplicates by company/job ID/canonical URL.
- Resume tailoring must be evidence-backed; never invent facts; preserve template; compile and verify one-page PDF; user approves immutable version.
- Recruiter details must record source and verification state. Never invent email addresses; uncertain greeting defaults to “Hello,”.
- Email send requires explicit approval bound to exact recipient, subject, body and attachment IDs/checksums. Any edit invalidates approval. Never auto-send or auto-follow-up.
- Gmail sync targets app-sent messages and relevant replies, not entire mailbox by default. Manual sync and sync-on-open; preserve original messages and store AI summaries separately.
- Formal application status changes are explicit; recruiter contact/reply does not automatically mark an application as applied or interviewed.
- AI suggestions cite underlying records and require confirmation for ambiguous status updates. Treat external content as untrusted.
- MCP tools use application services, not direct arbitrary DB access; sensitive actions require explicit human approval.

## Application statuses
SAVED, APPLIED, SCREENING, ASSESSMENT, INTERVIEW, OFFER, ACCEPTED, REJECTED, WITHDRAWN, ON_HOLD, EXPIRED.

## Free-tier risks to validate
- Render Free sleeps after idle, has ephemeral disk and limited resources; no persistent data on instance.
- Supabase Free storage/DB limits and inactivity pause; no automatic daily backups. Export and restore must be tested.
- Gmail external OAuth Testing status can cause Gmail-scope refresh tokens to expire after 7 days; validate long-term OAuth and verification requirements early.
- Cloud LaTeX compilation under Render Free memory limits must be prototyped using the actual resume template.
- Never assume provider free tiers remain permanent.

## Acceptance criteria
Private access; jobs and applications track without AI; duplicate detection; resume claims traceable and PDF one page; recruiter email provenance; approved exact email and correct attachment; Gmail thread IDs/replies; idempotent sends; complete status history; follow-up lifecycle; mobile usability; backup restore; MCP permission enforcement.
