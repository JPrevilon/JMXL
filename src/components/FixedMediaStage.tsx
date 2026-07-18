"use client";

import Image from "next/image";
import { siteContent, type SceneKey } from "@/data/siteContent";

export function FixedMediaStage({ activeScene }: { activeScene: SceneKey }) {
  const scenes: Record<SceneKey, { eyebrow: string; media: string; video?: string }> = siteContent.scenes;

  return (
    <div className="fixed-media-stage" aria-hidden="true">
      {(Object.keys(siteContent.scenes) as SceneKey[]).map((scene) => (
        <div
          key={scene}
          className={`fixed-media-stage__layer ${activeScene === scene ? "is-active" : ""}`}
        >
          {scenes[scene].video ? (
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
