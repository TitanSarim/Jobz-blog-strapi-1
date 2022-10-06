/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://powerful-meadow-03273.herokuapp.com/']
  }
}

module.exports = nextConfig
