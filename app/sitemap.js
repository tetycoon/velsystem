import { SECURITY_ITEMS, IT_ITEMS } from "../data/content";

// Swap this once velsystems.in is pointed at this deployment.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://velsystem.vercel.app";

const STATIC_ROUTES = [
  "", "solar", "security-systems", "it-hardware", "amc", "shop",
  "about", "customers", "government", "rental", "blog", "contact"
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(route => ({
    url: `${BASE_URL}/${route ? route + "/" : ""}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));

  const securityEntries = SECURITY_ITEMS.map(item => ({
    url: `${BASE_URL}/security-systems/${item.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  const itEntries = IT_ITEMS.map(item => ({
    url: `${BASE_URL}/it-hardware/${item.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticEntries, ...securityEntries, ...itEntries];
}
