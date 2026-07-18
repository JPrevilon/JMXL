"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "@/data/siteContent";

export function EpkDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>("button, a, [tabindex]:not([tabindex='-1'])"));
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
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  return (
    <aside className={`epk-drawer ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label="Electronic press kit" role="dialog" aria-modal="true">
      <button type="button" className="epk-drawer__backdrop" onClick={onClose} aria-label="Close EPK" />
      <div ref={panel} className="epk-drawer__panel" tabIndex={-1}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">Electronic press kit</p>
        <h2>{siteContent.artist}</h2>
        <p>{siteContent.city} • {siteContent.genre}</p>
        <div className="epk-drawer__grid">
          <div><span>Current project</span><strong>{siteContent.project}</strong></div>
          <div><span>Booking</span><strong>{siteContent.bookingEmail}</strong></div>
          <div><span>Press photos</span><strong>Available on request</strong></div>
          <div><span>One-sheet</span><strong>Available on request</strong></div>
        </div>
        <a className="button button--primary" href={`mailto:${siteContent.bookingEmail}`}>Request booking</a>
      </div>
    </aside>
  );
}
