"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-title__line",
        { yPercent: 105, rotate: 1 },
        { yPercent: 0, rotate: 0, stagger: 0.12, duration: 1.2, ease: "power4.out", delay: 0.35 },
      );
      gsap.to(".hero-title", {
        yPercent: -18,
        scale: 0.93,
        opacity: 0.45,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-orbit", {
        rotate: 110,
        scale: 1.18,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }, section);

    return () => {
      context.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={root} id="top" data-scene="hero" className="scene hero-scene">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="scene__inner hero-scene__inner">
        <p className="eyebrow">{siteContent.scenes.hero.eyebrow}</p>
        <h1 className="hero-title" aria-label={siteContent.project}>
          <span><span className="hero-title__line">Young</span></span>
          <span><span className="hero-title__line hero-title__line--outline">Black</span></span>
          <span><span className="hero-title__line">Entrepreneur</span></span>
        </h1>
        <div className="hero-scene__footer">
          <p>{siteContent.tagline}</p>
          <div className="button-row">
            <a className="button button--primary" href={siteContent.purchaseUrl} target="_blank" rel="noreferrer">Buy the album</a>
            <a className="button button--ghost" href="#visuals">Watch the trailer</a>
          </div>
        </div>
      </div>
      <a href="#manifesto" className="scroll-cue" aria-label="Scroll to the manifesto">Scroll <span /></a>
    </section>
  );
}
