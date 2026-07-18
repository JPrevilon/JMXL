"use client";

import Image from "next/image";
import { siteContent, type SceneKey } from "@/data/siteContent";

export function FixedMediaStage({ activeScene }: { activeScene: SceneKey }) {
  return (
    <div className="fixed-media-stage" aria-hidden="true">
      {(Object.keys(siteContent.scenes) as SceneKey[]).map((scene) => (
        <div
          key={scene}
          className={`fixed-media-stage__layer ${activeScene === scene ? "is-active" : ""}`}
        >
          <Image
            src={siteContent.scenes[scene].media}
            alt=""
            fill
            priority={scene === "hero"}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="fixed-media-stage__grain" />
      <div className="fixed-media-stage__shade" />
    </div>
  );
}
