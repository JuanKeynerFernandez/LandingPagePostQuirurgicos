import type { APIRoute } from 'astro';

const paths = Object.keys(import.meta.glob('./**/*.astro'))
  .filter((file) => !file.endsWith('404.astro'))
  .map((file) => file.replace(/^\./, '').replace(/index\.astro$/, '').replace(/\.astro$/, '/'));

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
