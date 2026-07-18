"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function IntroLoader({ entered, onEnter }: { entered: boolean; onEnter: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!entered || !root.current) return;
    gsap.to(root.current, {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => root.current?.setAttribute("hidden", "true"),
    });
  }, [entered]);

  useEffect(() => {
    if (entered) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  return (
    <div ref={root} className="intro-loader" role="dialog" aria-modal="true" aria-label="Enter JaiMoney XL experience">
      <div className="intro-loader__halo" />
      <Image
        src="/brand/logo-white-transparent.png"
        alt="JaiMoney XL JM XL crown monogram"
        width={280}
        height={280}
        priority
        className="intro-loader__logo"
      />
      <p className="eyebrow">JaiMoney XL presents</p>
      <h1>Young Black Entrepreneur</h1>
      <button className="button button--primary" type="button" onClick={onEnter}>
        Enter the experience
      </button>
      <p className="microcopy">A scroll-driven album experience • audio plays only when selected</p>
    </div>
  );
}
