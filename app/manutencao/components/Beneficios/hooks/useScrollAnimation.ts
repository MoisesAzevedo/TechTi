import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  initialHidden?: boolean;
  threshold?: number;
}

export const useScrollAnimation = ({ 
  initialHidden = false, 
  threshold = 0.2 
}: UseScrollAnimationOptions = {}) => {
  const [visible, setVisible] = useState(!initialHidden);
  const elRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!initialHidden) return; // already visible

    const node = elRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [initialHidden, threshold]);

  return { visible, elRef };
};