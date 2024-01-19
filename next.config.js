const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/humans.txt",
        destination: "/api/humans",
      },
    ];
  },
  publicRuntimeConfig: {
    modifiedDate: new Date().toISOString(),
  },
};

module.exports = withNextIntl(nextConfig);
