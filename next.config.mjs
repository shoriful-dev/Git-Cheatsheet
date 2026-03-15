/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    // ... other experimental flags if needed
  },
};
export default nextConfig;
