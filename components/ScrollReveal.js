"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Watches for .reveal / .reveal-left / .reveal-right / .reveal-scale elements and
// flips them to visible as they scroll into view. Pure vanilla IntersectionObserver,
// no animation library needed. Re-runs on route change since the App Router keeps
// this mounted across client-side navigations instead of remounting it per page.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const els = document.querySelectorAll(selector);

    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
