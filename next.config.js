/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['storage.googleapis.com', 'firebasestorage.googleapis.com'],
    minimumCacheTTL: 1500000,
  },


}

module.exports = nextConfig