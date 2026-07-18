"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cursor.current;
    if (!node || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event: PointerEvent) => {
      node.classList.add("is-visible");
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const hover = (event: Event) => {
      const target = event.target as HTMLElement;
      node.dataset.state = target.closest("a, button, [data-cursor]") ? "active" : "";
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", hover);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true"><span /></div>;
}
