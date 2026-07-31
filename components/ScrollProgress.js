"use client";
import { useEffect, useState } from "react";

// A thin gradient bar across the very top of the viewport that fills as the
// visitor scrolls down the page — a common modern-site touch, pure CSS/JS,
// no external libraries.
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setPct(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}
