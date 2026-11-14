---
name: backend-engineering
description: Use when implementing Express routes, services, middleware or integrations.
---

# Backend engineering
Keep route handlers thin: parse/validate → authenticate/authorize → call service → map response. Business rules belong in services; external providers belong in adapters. Use Zod at boundaries, structured Pino logging, consistent error envelopes, request IDs, payload limits and rate limits for sensitive actions. Never trust client-supplied owner IDs. No secrets or sensitive body content in logs. Add unit/integration tests.
