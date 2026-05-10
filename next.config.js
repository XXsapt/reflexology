/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
  },
};

module.exports = nextConfig;
