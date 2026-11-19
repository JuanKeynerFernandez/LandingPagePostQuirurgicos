import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

export function findImage(path: string): ImageMetadata | undefined {
  return images[`/src/assets/${path}`]?.default;
}
