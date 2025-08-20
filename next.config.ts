// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      // add more if you use them:
      // { protocol: "https", hostname: "picsum.photos" },
      // { protocol: "https", hostname: "placehold.co" },
    ],
  },
  // Disable the bottom-left Next.js Dev Tools badge/panel
  // (runtime supports this; types may lag)
  devIndicators: false,
};

export default nextConfig;
