/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'en'  // Mantendo inglês como padrão para visitantes internacionais
  }
}

module.exports = nextConfig