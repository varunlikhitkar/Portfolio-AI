"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFade(true);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 600); // Wait for the transition to finish before unmounting
      return () => clearTimeout(timer);
    };

    // If page is already loaded, fade out after a minimum display time of 1000ms
    if (document.readyState === "complete") {
      const timer = setTimeout(handleLoad, 1000);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timer to ensure page isn't blocked forever if load event hangs
      const fallback = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 1;
          transform: scale(1);
        }
        .preloader-overlay.fade-out {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }
        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .preloader-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 12px 24px;
          background: #CCFF00; /* same var(--lime) used on the website */
          color: #000000;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0 0 #000000;
          animation: pulse-glow 2s infinite ease-in-out;
        }
        .preloader-spinner {
          width: 32px;
          height: 32px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-top: 4px solid #CCFF00;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 6px 6px 0 0 #CCFF00;
          }
          50% {
            transform: scale(1.05);
            box-shadow: 12px 12px 0 0 #CCFF00;
          }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className={`preloader-overlay ${fade ? "fade-out" : ""}`}>
        <div className="preloader-content">
          <div className="preloader-logo">VL.DEV</div>
          <div className="preloader-spinner"></div>
        </div>
      </div>
    </>
  );
}
