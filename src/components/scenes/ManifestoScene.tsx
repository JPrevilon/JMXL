"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function ManifestoScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.from(".manifesto-line", {
        x: (index) => (index % 2 === 0 ? -120 : 120),
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 72%", end: "55% 45%", scrub: 1 },
      });
      gsap.to(".manifesto-watermark", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={root} id="manifesto" data-scene="manifesto" className="scene manifesto-scene">
      <div className="manifesto-watermark" aria-hidden="true">OWNERSHIP • INDEPENDENCE • LEGACY •</div>
      <div className="scene__inner">
        <p className="eyebrow">{siteContent.scenes.manifesto.eyebrow}</p>
        <div className="manifesto-copy">
          {siteContent.manifesto.map((line, index) => (
            <p key={line} className={`manifesto-line ${index === 1 ? "is-accent" : ""}`}>{line}</p>
          ))}
        </div>
        <p className="scene-note">A visual and musical statement about building something that belongs to you.</p>
      </div>
    </section>
  );
}
