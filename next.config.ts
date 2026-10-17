import type { NextConfig } from "next";
import path from "path";
import { APP_URL } from "@/lib/site";

const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(__dirname) },
  redirects: async () => [
    {
      source: "/get-started",
      destination: APP_URL,
      permanent: false,
    },
  ],
};
export default nextConfig;
