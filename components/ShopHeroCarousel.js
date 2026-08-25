"use client";
import { useState, useEffect } from "react";
import { WhatsAppCta } from "./Sections";

// Uses real photos already in this codebase (not new AI-generated or
// stock images) - the same rooftop solar shot used on the homepage hero,
// plus real desktop/CCTV/solar-install photos already used elsewhere on
// the site. These are small (under 700px), captured for use as square
// content photos, not wide hero banners, so stretched across a full-width
// hero they'll look softer/less sharp than a proper 1920px+ hero photo
// would. Swap in real wide photos later (1920x1000+, under ~400KB) by
// replacing the 4 paths below - no other code changes needed.
const SLIDES = [
  {
    image: "/images/hero/hero-solar.jpg",
    h1: "Shop IT Hardware, Security & Solar Accessories Online",
    sub: "Real products, real current prices, direct from Vel Systems. 25+ years of local sales and service, no dealer sign-up needed.",
    showCta: true
  },
  {
    image: "/images/subitems/subitem-desktop-1.jpg",
    caption: "IT Hardware & Networking, In Stock"
  },
  {
    image: "/images/subitems/subitem-cctv-camera-0.jpg",
    caption: "Security Systems You Can Trust"
  },
  {
    image: "/images/solar/solar-industrial.jpg",
    caption: "Solar Accessories & More"
  }
];

export default function ShopHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="shop-hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`shop-hero-slide${i === index ? " active" : ""}`}
          style={{ backgroundImage: `url('${s.image}')` }}
        >
          <div className="shop-hero-overlay" />
          <div className="container shop-hero-content">
            {i === 0 ? (
              <>
                <h1>{s.h1}</h1>
                <p>{s.sub}</p>
                <WhatsAppCta label="Ask About a Product on WhatsApp" message="Hi Vel Systems, I have a question about a product in your shop." />
              </>
            ) : (
              s.caption && <h2>{s.caption}</h2>
            )}
          </div>
        </div>
      ))}

      {SLIDES.length > 1 && (
        <>
          <button
            className="shop-hero-nav prev"
            aria-label="Previous slide"
            onClick={() => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length)}
          >
            &#8249;
          </button>
          <button
            className="shop-hero-nav next"
            aria-label="Next slide"
            onClick={() => setIndex(i => (i + 1) % SLIDES.length)}
          >
            &#8250;
          </button>
          <div className="shop-hero-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`shop-hero-dot${i === index ? " active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
