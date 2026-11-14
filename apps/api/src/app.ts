import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { env } from './config/env.js';

export const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: env.WEB_ORIGIN, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(pinoHttp());

app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'api', timestamp: new Date().toISOString() });
});

app.use((_req, res) => res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Route not found' } }));

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const message = env.NODE_ENV === 'production' ? 'Internal server error' : String(error);
  res.status(500).json({ error: { code: 'INTERNAL_SERVER_ERROR', message } });
});
