/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "labour.gujarat.gov.in",
        pathname: "/**", // Allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
