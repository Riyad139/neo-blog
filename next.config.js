/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "uploads-ssl.webflow.com",
      "images.unsplash.com",
    ],
  },
  corePlugins: {
    aspectRatio: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
