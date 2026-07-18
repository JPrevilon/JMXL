"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function IntroLoader({ entered, onEnter }: { entered: boolean; onEnter: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(".intro-loader__mark-part", { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.13,
        ease: "power3.out",
      });
      gsap.fromTo(".intro-loader__content > *", { autoAlpha: 0, y: 12 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.45,
        ease: "power2.out",
      });
    }, container);
    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!entered || !root.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.querySelector<HTMLElement>("[data-nav-brand]");
    const mark = logo.current;
    const timeline = gsap.timeline({
      onComplete: () => root.current?.setAttribute("hidden", "true"),
    });

    if (!reduceMotion && target && mark) {
      const from = mark.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const scale = to.width / from.width;
      timeline
        .to(".intro-loader__content", { autoAlpha: 0, y: 10, duration: 0.25, ease: "power2.in" })
        .to(mark, {
          x: to.left + to.width / 2 - (from.left + from.width / 2),
          y: to.top + to.height / 2 - (from.top + from.height / 2),
          scale,
          duration: 0.75,
          ease: "power3.inOut",
        }, "<")
        .to(root.current, { autoAlpha: 0, duration: 0.3, ease: "power2.out" });
    } else {
      timeline.to(root.current, { autoAlpha: 0, duration: 0.25 });
    }
    return () => {
      timeline.kill();
    };
  }, [entered]);

  useEffect(() => {
    if (entered) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  return (
    <div ref={root} className="intro-loader" role="dialog" aria-modal="true" aria-label="Enter JaiMoney XL experience">
      <div className="intro-loader__halo" />
      <div ref={logo} className="intro-loader__mark" aria-label="JaiMoney XL JM XL crown monogram">
        {(["crown", "jm", "xl"] as const).map((part) => (
          <Image key={part} src="/brand/logo-white-transparent.png" alt="" width={280} height={280} priority className={`intro-loader__mark-part intro-loader__mark-part--${part}`} />
        ))}
      </div>
      <div className="intro-loader__content">
        <p className="eyebrow">JaiMoney XL presents</p>
        <h1>Young Black Entrepreneur</h1>
        <button className="button button--primary" type="button" onClick={onEnter}>
          Enter the experience
        </button>
        <p className="microcopy">A scroll-driven album experience • audio plays only when selected</p>
      </div>
    </div>
  );
}
