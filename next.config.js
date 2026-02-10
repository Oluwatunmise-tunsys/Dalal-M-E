/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tse3.mm.bing.net'],
  },
}

module.exports = nextConfig
