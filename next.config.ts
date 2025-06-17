import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://cdn-icons-png.flaticon.com/**"),
      new URL("https://m.media-amazon.com/**"),
      new URL("https://ddcus.org/**"),
      new URL("http://unpkg.com/**"),
      new URL("https://unpkg.com/**"),
    ],
  },
};

export default nextConfig;
