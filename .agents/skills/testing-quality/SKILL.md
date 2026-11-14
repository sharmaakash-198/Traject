---
name: testing-quality
description: Use when adding tests, debugging regressions or preparing a release.
---

# Testing and quality
Test behavior, not implementation details. Add unit tests for domain rules, API integration tests for authorization/validation, and Playwright flows for critical journeys. Include negative cases: unauthorized access, duplicate job, invalid transition, edited-after-approval email, wrong attachment, ambiguous send outcome. Run typecheck, tests and build. State exactly what ran; do not fabricate green checks.
