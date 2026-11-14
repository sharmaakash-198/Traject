export type ApiError = { error: { code: string; message: string } };
export type HealthResponse = { status: 'ok'; service: string; timestamp: string };
export const APPLICATION_STATUSES = [
  'SAVED', 'APPLIED', 'SCREENING', 'ASSESSMENT', 'INTERVIEW', 'OFFER',
  'ACCEPTED', 'REJECTED', 'WITHDRAWN', 'ON_HOLD', 'EXPIRED',
] as const;
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];
