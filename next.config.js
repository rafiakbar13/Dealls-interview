/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/product",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
