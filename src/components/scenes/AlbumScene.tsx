"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function AlbumScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".album-art",
        { rotateY: -16, rotateZ: -4, scale: 0.78 },
        {
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "center center", scrub: 1 },
        },
      );
      gsap.from(".album-copy > *", {
        y: 48,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 58%", toggleActions: "play none none reverse" },
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={root} id="album" data-scene="album" className="scene album-scene">
      <div className="scene__inner split-layout">
        <div className="album-art-wrap">
          <div className="album-art">
            <Image src={siteContent.scenes.album.media} alt="Young Black Entrepreneur album artwork" fill sizes="(max-width: 800px) 88vw, 42vw" />
          </div>
          <span className="album-art__edition">Direct edition</span>
        </div>
        <div className="album-copy">
          <p className="eyebrow">{siteContent.scenes.album.eyebrow}</p>
          <h2>Own the project.<br /><em>Support the movement.</em></h2>
          <p>{siteContent.albumSummary}</p>
          <dl className="album-meta">
            <div><dt>Artist</dt><dd>{siteContent.artist}</dd></div>
            <div><dt>Genre</dt><dd>{siteContent.genre}</dd></div>
            <div><dt>City</dt><dd>{siteContent.city}</dd></div>
            <div><dt>Status</dt><dd>Direct release</dd></div>
          </dl>
          <div className="button-row">
            <a className="button button--primary" href={siteContent.purchaseUrl} target="_blank" rel="noreferrer">Own the digital album</a>
            <a className="button button--ghost" href="#tracks">Preview the project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
