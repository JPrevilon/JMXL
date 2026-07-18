"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { visuals, type Visual } from "@/data/videos";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function VisualsScene({ onOpenVisual }: { onOpenVisual: (visual: Visual) => void }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = root.current;
    const rail = track.current;
    if (!section || !rail || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 901px)", () => {
      const distance = Math.max(0, rail.scrollWidth - window.innerWidth + 160);
      gsap.to(rail, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.8}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, []);

  return (
    <section ref={root} id="visuals" data-scene="visuals" className="scene visuals-scene">
      <div className="visuals-heading">
        <p className="eyebrow">{siteContent.scenes.visuals.eyebrow}</p>
        <h2>Motion tells the story.</h2>
      </div>
      <div ref={track} className="visuals-rail">
        {visuals.map((visual, index) => (
          <button key={visual.title} type="button" className="visual-card" onClick={() => onOpenVisual(visual)} data-cursor="open">
            <Image src={visual.poster} alt="" fill sizes="(max-width: 900px) 82vw, 45vw" />
            <span className="visual-card__index">0{index + 1}</span>
            <span className="visual-card__meta">{visual.category} • {visual.runtime}</span>
            <strong>{visual.title}</strong>
            <span className="visual-card__action">Watch</span>
          </button>
        ))}
      </div>
    </section>
  );
}
