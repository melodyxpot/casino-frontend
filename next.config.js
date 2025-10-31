/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Skip ESLint during production builds to avoid build-time failures
    ignoreDuringBuilds: true,
  },
  images: {
    // Add all external image hosts your app uses to avoid runtime image warnings
    domains: ['api.builder.io', 'api.ok777.io'],
  },
  // If you later need i18n with the App Router, reintroduce carefully.
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // },
};

module.exports = nextConfig;
