"use client";

import Image from "next/image";
import { useState } from "react";
import { siteContent, type SceneKey } from "@/data/siteContent";

export function FixedMediaStage({ activeScene }: { activeScene: SceneKey }) {
  const scenes: Record<SceneKey, { eyebrow: string; media: string; video?: string }> = siteContent.scenes;
  const [readyVideos, setReadyVideos] = useState<Partial<Record<SceneKey, boolean>>>({});
  const [failedVideos, setFailedVideos] = useState<Partial<Record<SceneKey, boolean>>>({});

  return (
    <div className="fixed-media-stage" aria-hidden="true">
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
