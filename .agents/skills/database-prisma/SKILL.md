---
name: database-prisma
description: Use when changing Prisma schema, migrations, queries or Supabase database design.
---

# Database and Prisma
Read `docs/DATA_MODEL.md`. Use UUIDs, FK constraints, UTC timestamptz, indexes, unique constraints and explicit status history. Design idempotency for external side effects. Do not store files in DB or Render filesystem; use private Supabase Storage. Make migrations reviewable and reversible where practical. Never run destructive reset/push against production. Test migration and backup/restore paths.
