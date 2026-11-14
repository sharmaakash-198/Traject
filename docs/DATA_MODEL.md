# Data model and invariants

Full target entities are documented in `ARCHITECTURE.md`. Initial Prisma schema includes Company, Job, Application and ApplicationStatusHistory only; expand deliberately in migrations.

## Invariants
- UUID primary keys; foreign keys; UTC timestamptz; created/updated timestamps.
- Status changes append immutable history rows.
- Resume versions are immutable after approval; edits create a new version.
- Email approval snapshots exact recipient, subject, body, attachment IDs and checksums; content change invalidates approval.
- Recruiter email has provenance enum: MANUAL_VERIFIED, USER_CONFIRMED, MAILMETEOR_VERIFIED, SUGGESTED, UNKNOWN.
- Preserve source URLs, extraction timestamps and original JD versions.
- Use unique constraints/idempotency keys where duplicate jobs or sends are possible.
