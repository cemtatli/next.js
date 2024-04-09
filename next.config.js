/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['', ''], // Add your domains here
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
  },
}

module.exports = nextConfig
