"use client";

import { useRef, useState } from "react";
import type { Track } from "@/data/tracks";

export function AudioDock({ track, onClose }: { track: Track | null; onClose: () => void }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = async () => {
    const player = audio.current;
    if (!player || !track?.previewSrc) return;
    if (player.paused) {
      await player.play();
      setPlaying(true);
    } else {
      player.pause();
      setPlaying(false);
    }
  };

  return (
    <aside className={`audio-dock ${track ? "is-open" : ""}`} aria-hidden={!track} aria-label="Track preview player">
      <audio
        ref={audio}
        src={track?.previewSrc}
        preload="none"
        onTimeUpdate={(event) => {
          const player = event.currentTarget;
          setProgress(player.duration ? player.currentTime / player.duration : 0);
        }}
        onEnded={() => setPlaying(false)}
      />
      <button type="button" className="audio-dock__play" aria-label={playing ? "Pause preview" : "Play preview"} onClick={toggle} disabled={!track?.previewSrc}>
        {playing ? "Ⅱ" : "▶"}
      </button>
      <div>
        <span>{track?.previewSrc ? "Preview" : "Preview pending"}</span>
        <strong>{track?.title ?? "Choose a track"}</strong>
      </div>
      <div className={`audio-dock__wave ${playing ? "is-playing" : ""}`} aria-hidden="true" style={{ "--audio-progress": progress } as React.CSSProperties}>
        {Array.from({ length: 36 }, (_, index) => <span key={index} style={{ height: `${18 + ((index * 17) % 32)}%` }} />)}
      </div>
      <span>{track?.duration ?? "0:00"}</span>
      <button type="button" className="audio-dock__close" onClick={onClose} aria-label="Close player">×</button>
    </aside>
  );
}
