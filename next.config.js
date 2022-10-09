/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  publicRuntimeConfig: {
    TRACKING_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS  || '',
  },

  serverRuntimeConfig: {
    TRACKING_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS  || '',
  },

}

module.exports = nextConfig
