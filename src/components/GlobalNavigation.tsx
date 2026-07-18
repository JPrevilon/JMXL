"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={`global-nav ${entered ? "is-visible" : ""}`} aria-hidden={!entered} inert={!entered ? true : undefined}>
      <a href="#top" className="global-nav__brand" aria-label="Back to top">
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
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href={siteContent.purchaseUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Buy album</a>
        <button type="button" onClick={() => { setOpen(false); onOpenEpk(); }}>Open EPK</button>
      </div>
    </header>
  );
}
