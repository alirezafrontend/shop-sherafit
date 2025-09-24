import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sherafit.com",
      },
    ],
  },
};

export default nextConfig;
