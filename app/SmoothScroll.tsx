"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Detect if desktop viewport and has fine pointer
    // Desktop: screen width >= 1024px, and device pointer is fine.
    const isDesktopQuery = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const shouldEnable = isDesktopQuery.matches && !reducedMotionQuery.matches;

    if (!shouldEnable) return;

    // 2. Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      syncTouch: false,
    });

    // 3. RequestAnimationFrame loop for Lenis
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 4. Handle smooth scrolling for standard anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // 5. Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
