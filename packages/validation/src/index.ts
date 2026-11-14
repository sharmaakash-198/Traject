import { z } from 'zod';
export const uuidSchema = z.string().uuid();
export const applicationStatusSchema = z.enum(['SAVED','APPLIED','SCREENING','ASSESSMENT','INTERVIEW','OFFER','ACCEPTED','REJECTED','WITHDRAWN','ON_HOLD','EXPIRED']);
