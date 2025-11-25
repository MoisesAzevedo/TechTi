"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MouseShadowEffectProps } from "./interfaces/MousePosition";
import styles from "./MouseShadowEffect.module.scss";

const MouseShadowEffect: React.FC<MouseShadowEffectProps> = ({
  className = "",
  effectImage = "/effects/blue-light.png",
  size = 400,
  opacity = 1.0,
  blur = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      // Se o container não tiver dimensão, não processa
      if (rect.width === 0 || rect.height === 0) {
        setIsHovering(false);
        return;
      }

      // Calcula posição relativa e garante que esteja dentro dos limites
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      const x = Math.min(Math.max(0, rawX), rect.width);
      const y = Math.min(Math.max(0, rawY), rect.height);

      const isInside =
        rawX >= 0 && rawX <= rect.width && rawY >= 0 && rawY <= rect.height;

      setMousePosition({ x, y });
      setIsHovering(isInside);
    };

    // Usa pointermove no window (melhor compatibilidade com touch/pointer)
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      setIsHovering(false);
      setMousePosition({ x: 0, y: 0 });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.mouseShadowContainer} ${className}`}
    >
      {/* Efeito de luz principal */}
      <motion.div
        className={styles.lightEffect}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          opacity: isHovering ? opacity : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        style={{
          width: size,
          height: size,
          backgroundImage: `url(${effectImage})`,
          filter: `blur(${blur}px)`,
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 25, mass: 0.8 },
          y: { type: "spring", stiffness: 50, damping: 25, mass: 0.8 },
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 },
        }}
        initial={{ opacity: 0, scale: 0.8 }}
      />
    </div>
  );
};

export default MouseShadowEffect;
