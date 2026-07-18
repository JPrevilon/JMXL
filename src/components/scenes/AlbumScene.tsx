"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { siteContent } from "@/data/siteContent";

export function AlbumScene() {
  const root = useRef<HTMLElement>(null);
  const release = siteContent.release.labels[siteContent.release.state];

  useEffect(() => {
    const section = root.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () => {
        const artWrap = section.querySelector<HTMLElement>(".album-art-wrap");
        if (!artWrap) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: artWrap,
          pinSpacing: false,
        });
        gsap.fromTo(".album-art", { rotateY: -13, rotateX: 5, rotateZ: -2, scale: 0.84 }, {
          rotateY: 4,
          rotateX: -2,
          rotateZ: 0.8,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top 80%", end: "75% 35%", scrub: 1 },
        });
      });

      media.add("(max-width: 900px)", () => {
        gsap.from(".album-art", {
          y: 36,
          rotateZ: -1.5,
          autoAlpha: 0,
          duration: 0.75,
          scrollTrigger: { trigger: ".album-art", start: "top 88%", toggleActions: "play none none reverse" },
        });
      });

      gsap.from(".album-copy > :not(.album-meta)", {
        y: 34,
        autoAlpha: 0,
        stagger: 0.09,
        duration: 0.7,
        scrollTrigger: { trigger: ".album-copy", start: "top 68%", toggleActions: "play none none reverse" },
      });
      gsap.from(".album-meta > div", {
        y: 22,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.55,
        scrollTrigger: { trigger: ".album-meta", start: "top 78%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".album-scroll-accent", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 75%", end: "bottom 25%", scrub: true },
      });
      return () => media.revert();
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={root} id="album" data-scene="album" className="scene album-scene">
      <span className="album-scroll-accent" aria-hidden="true" />
      <div className="scene__inner split-layout">
        <div className="album-art-wrap">
          <div className="album-art">
            <Image src={siteContent.scenes.album.media} alt="Young Black Entrepreneur album artwork" fill sizes="(max-width: 800px) 88vw, 42vw" />
          </div>
          <span className="album-art__edition">{release.status}</span>
        </div>
        <div className="album-copy">
          <p className="eyebrow">{siteContent.scenes.album.eyebrow}</p>
          <h2>Own the project.<br /><em>Support the movement.</em></h2>
          <p>{siteContent.albumSummary}</p>
          <dl className="album-meta">
            <div><dt>Artist</dt><dd>{siteContent.artist}</dd></div>
            <div><dt>Genre</dt><dd>{siteContent.genre}</dd></div>
            <div><dt>City</dt><dd>{siteContent.city}</dd></div>
            <div><dt>Status</dt><dd>{release.status}</dd></div>
          </dl>
          <div className="album-purchase-callout">
            <span>Digital album</span>
            <strong>{siteContent.release.price}</strong>
          </div>
          <div className="button-row">
            <a className="button button--primary" href={siteContent.purchaseUrl} target="_blank" rel="noreferrer">{release.cta}</a>
            <a className="button button--ghost" href="#tracks">Preview the project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
