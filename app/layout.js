import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import ScrollProgress from "../components/ScrollProgress";
import { BRAND, LOCATIONS, THIRD_PARTY_RATING } from "../data/content";

// Swap this once velsystems.in is pointed at this deployment (same env var the
// sitemap already uses).
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://velsystem.vercel.app";
const SITE_TITLE = "Vel Systems - Comprehensive Sales & Service for Solar, Security & IT";
const SITE_DESCRIPTION = "Solar energy systems, CCTV & security solutions, IT hardware, and AMC contracts. 25+ years serving Chengalpattu and beyond.";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: SITE_TITLE, template: "%s" },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Vel Systems",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    images: [{ url: "/images/hero/hero-solar.jpg", width: 1200, height: 630, alt: "Vel Systems - Solar, Security & IT" }]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/hero-solar.jpg"]
  }
};

function LocalBusinessSchema() {
  const hq = LOCATIONS[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: BRAND.name,
    image: `${BASE_URL}/images/vel-systems-logo.png`,
    url: BASE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.address,
      addressLocality: "Chengalpattu",
      addressRegion: "Tamil Nadu",
      postalCode: "603001",
      addressCountry: "IN"
    },
    sameAs: [BRAND.facebook, BRAND.instagram, BRAND.youtube].filter(Boolean),
    ...(THIRD_PARTY_RATING && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: THIRD_PARTY_RATING.rating,
        reviewCount: THIRD_PARTY_RATING.reviewCount
      }
    })
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocalBusinessSchema />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
