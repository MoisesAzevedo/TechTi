'use client';

import { useState, useEffect, useRef } from 'react';
import { MousePosition } from '../interfaces/MousePosition';

export const useMousePosition = (targetRef?: React.RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const target = targetRef?.current || window;

    if (targetRef?.current) {
      const element = targetRef.current;
      element.addEventListener('mousemove', updateMousePosition);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', updateMousePosition);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    } else {
      window.addEventListener('mousemove', updateMousePosition);
      
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }
  }, [targetRef]);

  return { mousePosition, isHovering };
};
