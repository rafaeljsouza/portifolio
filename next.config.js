const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt',
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig