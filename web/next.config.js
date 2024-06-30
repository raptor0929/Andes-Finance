/**
 * @type {import('next').NextConfig}
 */

/**
 * For workbox configurations:
 * https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const { i18n } = require('./next-i18next.config')

const nextConfig = withPWA({
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: false,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
    ],
  },
});

module.exports = nextConfig;
