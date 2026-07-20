"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring (lagging effect)
  const springConfig = { stiffness: 250, damping: 22, mass: 0.8 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Detect pointer: fine (desktop with mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsEnabled(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsEnabled(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    // 2. Detect prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    // 3. Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // 4. Hide/Show when leaving/entering document window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // 5. Detect hover over interactive elements (Event delegation on window)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = target.closest(
        'a, button, [role="button"], .card, .nav-link, .contact-social, .cta-primary, .cta-secondary, .hire-badge, [style*="cursor: pointer"]'
      );
      
      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], .card, .nav-link, .contact-social, .cta-primary, .cta-secondary, .hire-badge, [style*="cursor: pointer"]'
      );

      if (isInteractive) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    // 6. Inject global CSS to hide default cursor when active
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      body, a, button, [role="button"], .card, .nav-link, .contact-social, .cta-primary, .cta-secondary, .hire-badge {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      if (styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled || !isVisible) return null;

  // If prefers-reduced-motion is true, we disable spring/trailing physics and use mouse coordinates directly.
  const targetRingX = reducedMotion ? mouseX : ringX;
  const targetRingY = reducedMotion ? mouseY : ringY;
  const targetDotX = mouseX;
  const targetDotY = mouseY;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "2px solid var(--lime)",
          pointerEvents: "none",
          zIndex: 99999,
          x: targetRingX,
          y: targetRingY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: isHovered
            ? "0 0 16px var(--lime), inset 0 0 8px var(--lime)"
            : "0 0 8px rgba(204, 255, 0, 0.4)",
          background: isHovered ? "rgba(204, 255, 0, 0.1)" : "rgba(204, 255, 0, 0.02)",
        }}
        animate={{
          scale: reducedMotion ? 1 : isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--lime)",
          pointerEvents: "none",
          zIndex: 100000,
          x: targetDotX,
          y: targetDotY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid #000",
          boxShadow: "0 0 4px var(--lime)",
        }}
        animate={{
          scale: reducedMotion ? 1 : isHovered ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </>
  );
}
