"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./fadeIn.module.css";

export type FadeInOnViewProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // IntersectionObserver threshold
  rootMargin?: string;
  useAnimation?: boolean; // se true, usa keyframes; se false, usa transição
};

export const FadeInOnView: React.FC<FadeInOnViewProps> = ({
  children,
  className = "",
  threshold = 0.5,
  rootMargin = "0px",
  useAnimation = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            try {
              observer.unobserve(entry.target);
            } catch (e) {
              // ignore
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // log computed styles at mount to inspect why animation may not be visible
    try {
      const computed = window.getComputedStyle(el);
    } catch (e) {
      // window may not be available in some environments
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (visible && ref.current) {
      try {
        const computed = window.getComputedStyle(ref.current);
        console.log("[FadeInOnView] computed styles (visible)", {
          opacity: computed.opacity,
          transform: computed.transform,
          display: computed.display,
          visibility: computed.visibility,
          animationName: computed.animationName,
          animationDuration: computed.animationDuration,
          animationPlayState: computed.animationPlayState,
          zIndex: computed.zIndex,
        });
      } catch (e) {
        // ignore
      }
    }
  }, [visible]);

  const applied = `${styles.fadeIn} ${
    visible
      ? useAnimation
        ? `${styles.animateFadeIn} ${styles.forceVisible}`
        : `${styles.visible} ${styles.forceVisible}`
      : ""
  } ${className}`.trim();

  // applied classes are available in the DOM for inspection if needed

  return (
    <div ref={ref} className={applied}>
      {children}
    </div>
  );
};

export default FadeInOnView;
