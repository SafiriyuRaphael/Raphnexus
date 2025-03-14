/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"], // Add this
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/SafiriyuRaphael/supreme-waffle/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
