"use client";
import { useEffect } from "react";

/**
 * Drives the CSS variable `--grain-y` on :root based on scroll position.
 * This shifts the grain texture slightly as the user scrolls, giving
 * the feeling that the texture is part of the physical space.
 */
export default function GrainScroll() {
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          // Shift X and Y of grain in alternating directions on scroll
          const grainX = Math.sin(y * 0.003) * 8;
          const grainY = (y * 0.04) % 256;
          document.documentElement.style.setProperty("--grain-x", `${grainX}px`);
          document.documentElement.style.setProperty("--grain-y", `${-grainY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
