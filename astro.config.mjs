import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tu-dominio.com',
  build: {
    inlineStylesheets: 'always',
  },
});
