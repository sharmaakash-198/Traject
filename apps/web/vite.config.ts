import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', manifest: {
    name: 'Personal Job Workspace', short_name: 'Job Workspace', start_url: '/', display: 'standalone',
    background_color: '#0f172a', theme_color: '#0f172a', icons: []
  } })],
  server: { port: 5173 },
});
