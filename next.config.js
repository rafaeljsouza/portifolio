/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'en'
  },
  // Removendo redirects daqui pois vamos gerenciar no nível da aplicação
}

module.exports = nextConfig