/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['spoonacular.com', 'lh3.googleusercontent.com'],
  },
  // eslint: {
  //   dirs: ['src', 'app'],
  // },
  experimental: {
    appDir: true,
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
