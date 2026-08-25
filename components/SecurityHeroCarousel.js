"use client";
import { useState, useEffect } from "react";
import { WhatsAppCta } from "./Sections";

// Real sub-item photos already in this codebase - same pattern as the
// solar and shop page hero carousels, so the three main pillar pages and
// the shop all feel consistent instead of this one being a plain text hero.
const SLIDES = [
  {
    image: "/images/subitems/subitem-cctv-camera-0.jpg",
    h1: "Complete Security Systems for Homes, Offices & Industrial Sites",
    sub: "CCTV, access control, biometric systems, fire alarms and more, installed and serviced by the same local team for 25+ years.",
    showCta: true
  },
  { image: "/images/subitems/subitem-door-access-control-0.jpg", caption: "Access Control & Biometric Systems" },
  { image: "/images/subitems/subitem-fire-alarms-0.jpg", caption: "Fire Alarms & Safety Systems" },
  { image: "/images/subitems/subitem-video-door-phone-0.jpg", caption: "Video Door Phones & Intercoms" }
];

export default function SecurityHeroCarousel() {
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
                <WhatsAppCta label="Get a Free Security Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a security system quote for my property." />
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
