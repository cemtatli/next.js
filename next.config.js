/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['', ''], // Domains
    deviceSizes: [375, 480, 768, 1024, 1280, 1440, 1920], // Device sizes
  },
}

module.exports = nextConfig
