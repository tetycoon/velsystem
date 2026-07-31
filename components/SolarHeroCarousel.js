"use client";
import { useState, useEffect } from "react";
import { WhatsAppCta } from "./Sections";

// Drop 4 real solar photos into public/images/solar-hero/ using these exact
// filenames (slide-1.jpg ... slide-4.jpg). Recommended: 1920x1000px or wider,
// landscape, under ~400KB each so the page stays fast.
const SLIDES = [
  {
    image: "/images/solar-hero/slide-1.jpg",
    h1: "Solar Panel Installation Company in Chengalpattu, Tamil Nadu",
    sub: "End-to-end solar energy solutions for homes, businesses, and industrial rooftops, backed by 25+ years of local service.",
    showCta: true
  },
  {
    image: "/images/solar-hero/slide-2.jpg",
    caption: "Residential Rooftop Solar Systems"
  },
  {
    image: "/images/solar-hero/slide-3.jpg",
    caption: "Commercial & Industrial Solar Installations"
  },
  {
    image: "/images/solar-hero/slide-4.jpg",
    caption: "Ground-Mounted Solar Plants & Floating Solar"
  }
];

export default function SolarHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="solar-hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`solar-hero-slide${i === index ? " active" : ""}`}
          style={{ backgroundImage: `url('${s.image}')` }}
        >
          <div className="solar-hero-overlay" />
          <div className="container solar-hero-content">
            {i === 0 ? (
              <>
                <h1>{s.h1}</h1>
                <p>{s.sub}</p>
                <WhatsAppCta label="Get a Free Solar Quote on WhatsApp" message="Hi Vel Systems, I'm interested in a solar quote for my property." />
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
            className="solar-hero-nav prev"
            aria-label="Previous slide"
            onClick={() => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length)}
          >
            &#8249;
          </button>
          <button
            className="solar-hero-nav next"
            aria-label="Next slide"
            onClick={() => setIndex(i => (i + 1) % SLIDES.length)}
          >
            &#8250;
          </button>
          <div className="solar-hero-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`solar-hero-dot${i === index ? " active" : ""}`}
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
