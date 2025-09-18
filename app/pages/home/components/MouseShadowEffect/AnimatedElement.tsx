'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 }
  };

  // Cleanup para evitar memory leaks
  useEffect(() => {
    return () => {
      // Cleanup se necessário
    };
  }, []);

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
