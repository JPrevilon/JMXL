"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/siteContent";

const links = [
  ["Album", "#album"],
  ["Visuals", "#visuals"],
  ["Merch", "#merch"],
  ["Story", "#story"],
  ["Contact", "#join"],
] as const;

export function GlobalNavigation({ entered, onOpenEpk }: { entered: boolean; onOpenEpk: () => void }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", close);
    requestAnimationFrame(() => mobileMenu.current?.querySelector<HTMLElement>("a, button")?.focus());
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={`global-nav ${entered ? "is-visible" : ""}`} aria-hidden={!entered} inert={!entered ? true : undefined}>
      <a href="#top" className="global-nav__brand" aria-label="Back to top" data-nav-brand>
        <Image src="/brand/logo-white-transparent.png" alt="" width={54} height={54} />
      </a>
      <nav className="global-nav__links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <button type="button" className="nav-text-button" onClick={onOpenEpk}>EPK</button>
      </nav>
      <div className="global-nav__actions">
        <a className="nav-buy-link" href={siteContent.purchaseUrl} target="_blank" rel="noreferrer">Buy album</a>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div ref={mobileMenu} id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open ? true : undefined}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href={siteContent.purchaseUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Buy album</a>
        <button type="button" onClick={() => { setOpen(false); onOpenEpk(); }}>Open EPK</button>
      </div>
    </header>
  );
}
