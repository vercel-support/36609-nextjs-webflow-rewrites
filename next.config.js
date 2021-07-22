module.exports = {
  async rewrites() {
    return [
      {
        source: '/tag/:path*',
        destination: 'https://test-site-12414.webflow.io/tag/:path*',
      },
      {
        source: '/news/tag/:path*',
        destination: 'https://test-site-12414.webflow.io/tag/:path*',
      },
    ]
  },
}