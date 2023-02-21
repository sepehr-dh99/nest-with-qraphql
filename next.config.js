/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  // minimumCacheTTL: 60, // Set the minimum cache TTL to 60 seconds
};

module.exports = nextConfig;
