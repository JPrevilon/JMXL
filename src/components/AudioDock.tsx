"use client";

import { useEffect, useRef, useState } from "react";
import type { Track } from "@/data/tracks";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
};

export function AudioDock({ track, onClose }: { track: Track | null; onClose: () => void }) {
  const audio = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef(0.8);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(25);
  const [volume, setVolume] = useState(0.8);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const player = audio.current;
    if (!player) return;
    const continuePlaying = !player.paused;
    player.pause();
    if (!track) {
      player.removeAttribute("src");
      player.load();
      return;
    }
    player.src = track.previewSrc;
    player.volume = volumeRef.current;
    player.load();
    player.addEventListener("canplay", () => {
      if (continuePlaying || track) void player.play().catch(() => undefined);
    }, { once: true });
  }, [track]);

  const toggle = async () => {
    const player = audio.current;
    if (!player || !track) return;
    if (player.paused) await player.play();
    else player.pause();
  };

  const close = () => {
    audio.current?.pause();
    onClose();
  };

  const handleKeys = (event: React.KeyboardEvent<HTMLElement>) => {
    const player = audio.current;
    if (!player || !track) return;
    if (event.target instanceof HTMLInputElement && event.target.type === "range") return;
    if (event.key === " " && event.target === event.currentTarget) { event.preventDefault(); void toggle(); }
    if (event.key === "ArrowLeft") { event.preventDefault(); player.currentTime = Math.max(0, player.currentTime - 5); }
    if (event.key === "ArrowRight") { event.preventDefault(); player.currentTime = Math.min(player.duration || 25, player.currentTime + 5); }
    if (event.key === "ArrowUp") { event.preventDefault(); player.volume = Math.min(1, player.volume + 0.1); }
    if (event.key === "ArrowDown") { event.preventDefault(); player.volume = Math.max(0, player.volume - 0.1); }
    if (event.key.toLowerCase() === "m") player.muted = !player.muted;
    if (event.key === "Escape") setMinimized(true);
  };

  return (
    <aside
      className={`audio-dock ${track ? "is-open" : ""} ${minimized ? "is-minimized" : ""}`}
      aria-hidden={!track}
      aria-label="Track preview player"
      onKeyDown={handleKeys}
      tabIndex={track ? 0 : -1}
    >
      <audio
        ref={audio}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEmptied={() => { setCurrentTime(0); setDuration(25); }}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 25)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onVolumeChange={(event) => {
          volumeRef.current = event.currentTarget.volume;
          setVolume(event.currentTarget.muted ? 0 : event.currentTarget.volume);
        }}
        onEnded={() => setPlaying(false)}
      />

      <button type="button" className="audio-dock__play" aria-label={playing ? "Pause preview" : "Play preview"} onClick={() => void toggle()} disabled={!track}>
        {playing ? "Ⅱ" : "▶"}
      </button>

      <div className="audio-dock__identity">
        <span>Now previewing</span>
        <strong>{track?.title ?? "Choose a track"}</strong>
        {track?.feature && <small>Featuring {track.feature}</small>}
      </div>

      <div className="audio-dock__timeline">
        <span>{formatTime(currentTime)}</span>
        <label>
          <span className="sr-only">Seek preview</span>
          <input
            type="range"
            min="0"
            max={duration || 25}
            step="0.1"
            value={Math.min(currentTime, duration || 25)}
            onChange={(event) => {
              if (audio.current) audio.current.currentTime = Number(event.target.value);
            }}
          />
        </label>
        <span>{formatTime(duration)}</span>
      </div>

      <label className="audio-dock__volume">
        <span>Volume</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(event) => {
            if (!audio.current) return;
            audio.current.muted = false;
            audio.current.volume = Number(event.target.value);
          }}
        />
      </label>

      <button type="button" className="audio-dock__minimize" onClick={() => setMinimized((value) => !value)} aria-label={minimized ? "Expand player" : "Minimize player"} aria-expanded={!minimized}>
        {minimized ? "↑" : "↓"}
      </button>
      <button type="button" className="audio-dock__close" onClick={close} aria-label="Close player">×</button>
    </aside>
  );
}
