import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: ["files.stripe.com"],
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },

};

export default nextConfig;
