# Operations checklist

- [ ] Export database before schema-changing operations.
- [ ] Verify backup restore at least once before production use.
- [ ] Monitor Render sleep/cold start and memory constraints.
- [ ] Check Supabase project status and storage/database quotas.
- [ ] Rotate credentials if exposed; revoke Gmail OAuth grants when needed.
- [ ] Review failed/unknown email sends before retrying; never blind-retry.
- [ ] Keep an export of resume source/PDF versions and job/application data.
