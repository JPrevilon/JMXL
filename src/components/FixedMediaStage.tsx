"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent, type SceneKey } from "@/data/siteContent";
import { gsap } from "@/lib/gsap";

export function FixedMediaStage({ activeScene }: { activeScene: SceneKey }) {
  const scenes: Record<SceneKey, { eyebrow: string; media: string; video?: string }> = siteContent.scenes;
  const [readyVideos, setReadyVideos] = useState<Partial<Record<SceneKey, boolean>>>({});
  const [failedVideos, setFailedVideos] = useState<Partial<Record<SceneKey, boolean>>>({});
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
          className={`fixed-media-stage__layer ${activeScene === scene ? "is-active" : ""} ${readyVideos[scene] && !failedVideos[scene] ? "is-video-ready" : ""}`}
        >
          {scenes[scene].video && !failedVideos[scene] ? (
            <>
              <video
                className="fixed-media-stage__video"
                src={scenes[scene].video}
                poster={scenes[scene].media}
                autoPlay
                muted
                loop
                playsInline
                preload={scene === "hero" ? "auto" : "metadata"}
                onPlaying={() => setReadyVideos((current) => ({ ...current, [scene]: true }))}
                onError={() => setFailedVideos((current) => ({ ...current, [scene]: true }))}
              />
              <Image className="fixed-media-stage__fallback" src={scenes[scene].media} alt="" fill priority={scene === "hero"} sizes="100vw" />
            </>
          ) : (
            <Image src={scenes[scene].media} alt="" fill priority={scene === "hero"} sizes="100vw" />
          )}
        </div>
      ))}
      <div className="fixed-media-stage__grain" />
      <div className="fixed-media-stage__shade" />
    </div>
  );
}
