"use client";
import { useState, useEffect } from "react";
import { WhatsAppCta } from "./Sections";

// Drop 4 real, wide photos into public/images/shop-hero/ using these exact
// filenames (slide-1.jpg ... slide-4.jpg), same approach as the solar page's
// hero. Recommended: 1920x1000px or wider, landscape, under ~400KB each.
// Good subjects: your shop counter/showroom, a stack of real stock (routers,
// motherboards, CCTV units), or a customer handover photo - anything real,
// not stock photography.
const SLIDES = [
  {
    image: "/images/shop-hero/slide-1.jpg",
    h1: "Shop IT Hardware, Security & Solar Accessories Online",
    sub: "Real products, real current prices, direct from Vel Systems. 25+ years of local sales and service, no dealer sign-up needed.",
    showCta: true
  },
  {
    image: "/images/shop-hero/slide-2.jpg",
    caption: "IT Hardware & Networking, In Stock"
  },
  {
    image: "/images/shop-hero/slide-3.jpg",
    caption: "Security Systems You Can Trust"
  },
  {
    image: "/images/shop-hero/slide-4.jpg",
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
