---
name: architecture-guardian
description: Use when designing modules, boundaries, integrations, or proposing architecture changes.
---

# Architecture guardian
Preserve the single-user modular monolith: React PWA → Express API → Prisma → Supabase. No microservices, queues or always-on workers without an approved decision. Keep provider adapters behind application services. Keep REST and MCP adapters thin. Review free-tier fit, portability, security and operational burden. Record accepted changes in `docs/DECISIONS.md` and update architecture docs.
