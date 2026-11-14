import { describe, expect, it } from 'vitest';
import { app } from './app.js';

// Lightweight contract check without binding a network port.
describe('API application', () => {
  it('exports an Express application', () => {
    expect(typeof app).toBe('function');
  });
});
