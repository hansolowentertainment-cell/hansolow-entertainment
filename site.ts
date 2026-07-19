/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Only local, self-hosted images are used on this site (see README).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
