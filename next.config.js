/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogumafarm.kr",
      },
    ],
  },
};

module.exports = nextConfig;
