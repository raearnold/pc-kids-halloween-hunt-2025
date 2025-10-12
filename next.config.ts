import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  skipTrailingSlashRedirect: true,
  distDir: 'docs',
};

export default nextConfig;
