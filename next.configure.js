module.exports = {
    trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/pt',
          permanent: false,
        },
      ]
    },
  }