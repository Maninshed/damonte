import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Enable Cloudflare bindings in development
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    runtime: 'nodejs',
  },
};

export default nextConfig;
