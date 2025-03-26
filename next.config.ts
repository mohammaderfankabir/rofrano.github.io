import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',

  images: {
    unoptimized: true,  // Disable image optimization for static sites (required for GitHub Pages)
  },
};

export default nextConfig;
