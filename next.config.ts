import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // assetPrefix: './', // Serve static assets relative to the current path
  basePath: '/pc-kids-halloween-hunt-2025', // Ensure no basePath is set
  distDir: 'docs',
  skipTrailingSlashRedirect: true,
  trailingSlash: true, // Ensure no trailing slashes in URLs
};

export default nextConfig;
