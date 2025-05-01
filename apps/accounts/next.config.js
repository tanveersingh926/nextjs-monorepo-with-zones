// const { RECURRING_SUBSCRIPTIONS_URL } =
//   typeof process !== "undefined" ? process.env : {};

const RECURRING_SUBSCRIPTIONS_URL = "http://localhost:4000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/subscriptions",
        destination: `${RECURRING_SUBSCRIPTIONS_URL}/subscriptions`,
      },
      {
        source: "/subscriptions/:path+",
        destination: `${RECURRING_SUBSCRIPTIONS_URL}/subscriptions/:path+`,
      },
      {
        source: "/subscriptions-static/_next/:path+",
        destination: `${RECURRING_SUBSCRIPTIONS_URL}/subscriptions-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
