"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";
import { trackOutboundClick } from "@/lib/analytics";

export function MobileConversionBar({ hidden }: { hidden: boolean }) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-scene='hero']");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    }, { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!pastHero || hidden) return null;

  return (
    <nav className="mobile-conversion-bar" aria-label="Purchase shortcuts">
      <a href={siteContent.purchaseUrl} target="_blank" rel="noreferrer" onClick={() => trackOutboundClick({ category: "album", label: "Sticky buy album", url: siteContent.purchaseUrl })}>Buy album</a>
      <a href={siteContent.merchUrl} target="_blank" rel="noreferrer" onClick={() => trackOutboundClick({ category: "merch", label: "Sticky shop merch", url: siteContent.merchUrl })}>Shop merch</a>
    </nav>
  );
}
