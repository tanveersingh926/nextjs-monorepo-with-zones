/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/subscriptions-static",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/subscriptions-static/_next/:path+",
          destination: "/_next/:path+",
        },
      ],
    };
  },
};

export default nextConfig;
