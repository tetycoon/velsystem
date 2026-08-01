import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turned off: with Payload's REST API mounted in this same app, a global
  // trailingSlash redirect risks breaking non-GET admin-panel API calls
  // (POST/PATCH/DELETE don't always survive a 308 redirect cleanly). The
  // site's own pages still work fine without it.
  eslint: { ignoreDuringBuilds: true },
  output: "standalone",
};

export default withPayload(nextConfig)
