/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "uploads-ssl.webflow.com"],
  },
  corePlugins: {
    aspectRatio: false,
  },
};

module.exports = nextConfig;
