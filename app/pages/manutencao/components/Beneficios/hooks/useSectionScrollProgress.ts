import { useEffect, useState } from "react";

function clamp(v: number, a = 0, b = 100) {
  return Math.min(b, Math.max(a, v));
}

export default function useSectionScrollProgress(
  dataName = "benefit-card-section"
) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let mounted = true;

    const el = document.querySelector(
      `[data-name="${dataName}"]`
    ) as HTMLElement | null;
    if (!el) return;

    const calc = () => {
      if (!mounted) return;

      const rect = el.getBoundingClientRect();
      const elTopAbs = rect.top + window.scrollY;
      const start = elTopAbs - window.innerHeight;
      const end = elTopAbs + el.offsetHeight;
      const scrollY = window.scrollY;

      const raw = ((scrollY - start) / (end - start)) * 130;
      setProgress(clamp(raw));
    };

    // initial calc
    calc();

    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);

    return () => {
      mounted = false;
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, [dataName]);

  return progress;
}
