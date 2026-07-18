"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function ManifestoScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      const rows = gsap.utils.toArray<HTMLElement>(".manifesto-row");

      media.add("(min-width: 701px)", () => {
        rows.forEach((row, index) => {
          const direction = [-1, 1, -1][index] ?? -1;
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: row, start: "top 82%", end: "center 42%", scrub: 0.8 },
          });
          timeline
            .fromTo(row.querySelector(".manifesto-line"), { xPercent: direction * 14, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, ease: "none" }, 0)
            .fromTo(row.querySelector(".manifesto-photo"), {
              clipPath: direction < 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
              scale: 1.12,
            }, { clipPath: "inset(0 0% 0 0)", scale: 1, ease: "none" }, 0.08);
        });

        gsap.to(".manifesto-photo--handoff", {
          scale: 1.18,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: section, start: "72% center", end: "bottom top", scrub: true },
        });
      });

      media.add("(max-width: 700px)", () => {
        rows.forEach((row) => {
          gsap.from(row, {
            y: 34,
            autoAlpha: 0,
            duration: 0.65,
            scrollTrigger: { trigger: row, start: "top 88%", toggleActions: "play none none reverse" },
          });
        });
      });

      gsap.to(".manifesto-watermark", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
      });
      return () => media.revert();
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
            <article key={line} className="manifesto-row">
              <div className={`manifesto-photo ${index === siteContent.manifesto.length - 1 ? "manifesto-photo--handoff" : ""}`} aria-hidden="true">
                <Image src={siteContent.manifestoMedia[index]} alt="" fill sizes="(max-width: 700px) 86vw, 35vw" />
              </div>
              <p className={`manifesto-line ${index === 1 ? "is-accent" : ""}`}>{line}</p>
            </article>
          ))}
        </div>
        <p className="scene-note">A visual and musical statement about building something that belongs to you.</p>
      </div>
    </section>
  );
}
