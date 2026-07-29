// Swap this once velsystems.in is pointed at this deployment.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://velsystem.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/shop/cart/", "/api/"]
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
