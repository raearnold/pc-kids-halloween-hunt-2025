import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  distDir: 'docs',
  basePath: '', // Ensure no basePath is set
  assetPrefix: './', // Serve static assets relative to the current path
};

export default nextConfig;
