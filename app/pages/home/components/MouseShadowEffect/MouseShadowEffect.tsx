'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MouseShadowEffectProps } from './interfaces/MousePosition';
import styles from './MouseShadowEffect.module.scss';

const MouseShadowEffect: React.FC<MouseShadowEffectProps> = ({
  className = '',
  effectImage = '/effects/blue-light.png',
  size = 400,
  opacity = 1.0,
  blur = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Verifica se o mouse está dentro da área da seção
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (isInside) {
        setMousePosition({ x, y });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Adiciona event listener global no document
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
          left: mousePosition.x - size / 2,
          top: mousePosition.y - size / 2,
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
          left: { type: "spring", stiffness: 50, damping: 25, mass: 0.8 },
          top: { type: "spring", stiffness: 50, damping: 25, mass: 0.8 },
          opacity: { duration: 0.3 },
          scale: { duration: 0.4 }
        }}
        initial={{ opacity: 0, scale: 0.8 }}
      />
    </div>
  );
};

export default MouseShadowEffect;
