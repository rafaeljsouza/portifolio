/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'en',  // Mudamos para 'en'
    localeDetection: true
  }
}

module.exports = nextConfig