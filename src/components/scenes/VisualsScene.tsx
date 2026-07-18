"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { visuals, type Visual } from "@/data/videos";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function VisualsScene({ onOpenVisual }: { onOpenVisual: (visual: Visual) => void }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [hoveredVisual, setHoveredVisual] = useState<number | null>(null);

  useEffect(() => {
    const section = root.current;
    const rail = track.current;
    if (!section || !rail || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 901px)", () => {
      const distance = Math.max(0, rail.scrollWidth - window.innerWidth + 160);
      const railTween = gsap.to(rail, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.65}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".visual-card", rail).forEach((card) => {
        const poster = card.querySelector(".visual-card__poster");
        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            containerAnimation: railTween,
            start: "left 72%",
            end: "right 28%",
            scrub: true,
          },
        })
          .fromTo(card, { scale: 0.94, opacity: 0.78 }, { scale: 1.035, opacity: 1, duration: 0.5, ease: "none" })
          .to(card, { scale: 0.94, opacity: 0.78, duration: 0.5, ease: "none" })
          .fromTo(poster, { filter: "grayscale(1) contrast(1.08)" }, { filter: "grayscale(.18) contrast(1.04)", duration: 0.5, ease: "none" }, 0)
          .to(poster, { filter: "grayscale(.82) contrast(1.06)", duration: 0.5, ease: "none" }, 0.5);
      });
    });
    return () => media.revert();
  }, []);

  const allowHoverPreview = () => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches
      && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      && !connection?.saveData
      && connection?.effectiveType !== "2g"
      && (navigator.hardwareConcurrency ?? 4) >= 4
      && document.visibilityState === "visible";
  };

  return (
    <section ref={root} id="visuals" data-scene="visuals" className="scene visuals-scene">
      <div className="visuals-heading">
        <p className="eyebrow">{siteContent.scenes.visuals.eyebrow}</p>
        <h2>Motion tells the story.</h2>
      </div>
      <div ref={track} className="visuals-rail">
        {visuals.map((visual, index) => (
          <button
            key={visual.title}
            type="button"
            className="visual-card"
            onClick={() => onOpenVisual(visual)}
            onPointerEnter={() => allowHoverPreview() && setHoveredVisual(index)}
            onPointerLeave={() => setHoveredVisual(null)}
            data-cursor="open"
            aria-label={`Watch ${visual.title}, ${visual.category}, ${visual.runtime}`}
          >
            <Image className="visual-card__poster" src={visual.poster} alt="" fill sizes="(max-width: 900px) 82vw, 45vw" />
            {hoveredVisual === index && visual.videoSrc && (
              <video className="visual-card__preview" src={visual.videoSrc} muted autoPlay loop playsInline preload="metadata" aria-hidden="true" />
            )}
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
