"use client";
import { useState, useEffect } from "react";
import { WhatsAppCta } from "./Sections";

// Real sub-item photos already in this codebase - same pattern as the
// solar, shop, and security page hero carousels.
const SLIDES = [
  {
    image: "/images/subitems/subitem-desktop-0.jpg",
    h1: "Sales & Service Across the Full Range of Business and Home IT Hardware",
    sub: "Desktops, laptops, servers, networking, UPS, and IT peripherals, backed by 25+ years of local sales and after-sales support.",
    showCta: true
  },
  { image: "/images/subitems/subitem-laptop-0.jpg", caption: "Laptops for Business & Home" },
  { image: "/images/subitems/subitem-network-hardware-solution-0.jpg", caption: "Networking & Server Solutions" },
  { image: "/images/subitems/subitem-online-offline-ups-0.jpg", caption: "UPS & Power Backup" }
];

export default function ITHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="pillar-hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`pillar-hero-slide${i === index ? " active" : ""}`}
          style={{ backgroundImage: `url('${s.image}')` }}
        >
          <div className="pillar-hero-overlay" />
          <div className="container pillar-hero-content">
            {i === 0 ? (
              <>
                <h1>{s.h1}</h1>
                <p>{s.sub}</p>
                <WhatsAppCta label="Ask About IT Hardware on WhatsApp" message="Hi Vel Systems, I have a question about IT hardware." />
              </>
            ) : (
              s.caption && <h2>{s.caption}</h2>
            )}
          </div>
        </div>
      ))}
      {SLIDES.length > 1 && (
        <>
          <button className="pillar-hero-nav prev" aria-label="Previous slide" onClick={() => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length)}>&#8249;</button>
          <button className="pillar-hero-nav next" aria-label="Next slide" onClick={() => setIndex(i => (i + 1) % SLIDES.length)}>&#8250;</button>
          <div className="pillar-hero-dots">
            {SLIDES.map((_, i) => (
              <button key={i} className={`pillar-hero-dot${i === index ? " active" : ""}`} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
