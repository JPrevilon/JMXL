"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Visual } from "@/data/videos";

export function VideoModal({ visual, onClose }: { visual: Visual | null; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!visual) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const player = video.current;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>("button, a, video, [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    requestAnimationFrame(() => panel.current?.querySelector<HTMLElement>("button")?.focus());
    return () => {
      if (player) {
        player.pause();
        player.currentTime = 0;
      }
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
      previousFocus?.focus();
    };
  }, [visual, onClose]);

  if (!visual) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="visual-modal-title" aria-describedby={visual.caption ? "visual-modal-caption" : undefined}>
      <button className="modal__backdrop" type="button" onClick={onClose} aria-label="Close video" />
      <div ref={panel} className="modal__panel" tabIndex={-1}>
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close">×</button>
        <div className="modal__media">
          {visual.videoSrc ? (
            <video ref={video} controls playsInline preload="metadata" poster={visual.poster} src={visual.videoSrc} />
          ) : (
            <Image src={visual.poster} alt={`${visual.title} poster artwork`} fill sizes="90vw" />
          )}
        </div>
        <div className="modal__meta"><span>{visual.category}</span><span>{visual.runtime}</span></div>
        <h2 id="visual-modal-title">{visual.title}</h2>
        {visual.caption && <p id="visual-modal-caption" className="modal__caption">{visual.caption}</p>}
        {!visual.videoSrc && <p className="microcopy">Film coming soon. No video file has been published for this selection.</p>}
      </div>
    </div>
  );
}
