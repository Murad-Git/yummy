/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['spoonacular.com', 'lh3.googleusercontent.com', 'cdn.sanity.io'],
  },
  // eslint: {
  //   dirs: ['src', 'app'],
  // },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
