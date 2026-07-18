"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const indicator = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = height > 0 ? window.scrollY / height : 0;
        if (indicator.current) indicator.current.style.transform = `scaleY(${progress})`;
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={indicator} />
    </div>
  );
}
