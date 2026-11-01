import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Allow all quality values so the warnings disappear
    qualities: [70, 75, 80, 85, 90],
    // Use unoptimized for local images with spaces in filenames
    unoptimized: true,
  },
};

export default nextConfig;
