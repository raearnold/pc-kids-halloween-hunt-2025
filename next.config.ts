import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: './', // Serve static assets relative to the current path
  basePath: '/pc-kids-halloween-hunt-2025', // Ensure no basePath is set
  distDir: 'docs',
};

export default nextConfig;
