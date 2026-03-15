import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    // ... other experimental flags if needed
  },
};

export default nextConfig;
