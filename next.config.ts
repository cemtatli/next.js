import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["", ""], // DOMAINS_HERE
    deviceSizes: [375, 480, 768, 1024, 1280, 1440, 1920], // DEVICE_SIZES_HERE
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  }
};

export default nextConfig;
