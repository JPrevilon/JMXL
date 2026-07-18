"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent, type SceneKey } from "@/data/siteContent";
import { gsap } from "@/lib/gsap";

type SceneMedia = { eyebrow: string; media: string; video?: string };

function DeferredStageMedia({ scene, content }: { scene: SceneKey; content: SceneMedia }) {
  const [nearViewport, setNearViewport] = useState(scene === "hero");
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (nearViewport) return;
    const section = document.querySelector<HTMLElement>(`[data-scene="${scene}"]`);
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setNearViewport(true);
      observer.disconnect();
    }, { rootMargin: "110% 0px", threshold: 0 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [nearViewport, scene]);

  if (!nearViewport) return null;

  if (content.video && !videoFailed) {
    return (
      <>
        <video
          className="fixed-media-stage__video"
          src={content.video}
          poster={content.media}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        />
        <Image className="fixed-media-stage__fallback" src={content.media} alt="" fill priority={scene === "hero"} sizes="100vw" />
        {videoReady && <span className="fixed-media-stage__ready" />}
      </>
    );
  }

  return <Image src={content.media} alt="" fill priority={scene === "hero"} sizes="100vw" />;
}

export function FixedMediaStage({ activeScene }: { activeScene: SceneKey }) {
  const scenes: Record<SceneKey, SceneMedia> = siteContent.scenes;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = root.current;
    if (!stage) return;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      const createCrossfades = (mobile: boolean) => {
        (Object.keys(scenes) as SceneKey[]).forEach((scene) => {
          const section = document.querySelector<HTMLElement>(`[data-scene="${scene}"]`);
          const layer = stage.querySelector<HTMLElement>(`[data-stage-scene="${scene}"]`);
          if (!section || !layer) return;
          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: mobile ? "top 78%" : "top 88%",
              end: mobile ? "bottom 22%" : "bottom 12%",
              scrub: mobile ? 0.25 : 0.7,
            },
          })
            .fromTo(layer, { opacity: 0, scale: mobile ? 1.02 : 1.06 }, { opacity: 0.76, scale: 1, duration: 0.2, ease: "none" })
            .to(layer, { opacity: 0.76, duration: 0.6, ease: "none" })
            .to(layer, { opacity: 0, scale: mobile ? 1 : 0.99, duration: 0.2, ease: "none" });
        });
      };
      media.add("(prefers-reduced-motion: no-preference) and (min-width: 701px)", () => createCrossfades(false));
      media.add("(prefers-reduced-motion: no-preference) and (max-width: 700px)", () => createCrossfades(true));
      return () => media.revert();
    }, stage);
    return () => context.revert();
  }, [scenes]);

  return (
    <div ref={root} className="fixed-media-stage" aria-hidden="true">
      {(Object.keys(siteContent.scenes) as SceneKey[]).map((scene) => (
        <div
          key={scene}
          data-stage-scene={scene}
          className={`fixed-media-stage__layer ${activeScene === scene ? "is-active" : ""}`}
        >
          <DeferredStageMedia scene={scene} content={scenes[scene]} />
        </div>
      ))}
      <div className="fixed-media-stage__grain" />
      <div className="fixed-media-stage__shade" />
    </div>
  );
}
