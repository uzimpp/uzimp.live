/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "raw.githubusercontent.com",
      "images2.imgbox.com",
    ],
  },
};

module.exports = nextConfig;
