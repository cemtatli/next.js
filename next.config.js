/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['', ''], // Add your domains here
    deviceSizes: [320, 375, 768, 1024, 1280, 1920],
  },
}

module.exports = nextConfig
