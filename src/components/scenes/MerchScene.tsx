"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { products, type Product } from "@/data/products";
import { siteContent } from "@/data/siteContent";
import { trackOutboundClick } from "@/lib/analytics";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const tilt = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -4}deg`);
    card.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 4}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article className={`product-card ${product.featured ? "is-featured" : ""}`} onPointerMove={tilt} onPointerLeave={resetTilt}>
      <span className="product-card__number">0{index + 1}</span>
      <div className="product-card__image">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 800px) 90vw, 34vw" />
      </div>
      <span className="product-card__label">{product.label}</span>
      <h3>{product.name}</h3>
      <p className="product-card__value">{product.value}</p>
      <dl className="product-card__details">
        <div><dt>Size</dt><dd>{product.sizes}</dd></div>
        <div><dt>Status</dt><dd>{product.status}</dd></div>
      </dl>
      <div className="product-card__footer">
        <strong>{product.price}</strong>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutboundClick({ category: "merch", label: product.name, url: product.href })}
        >
          {product.cta} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function MerchScene() {
  return (
    <section id="merch" data-scene="merch" className="scene merch-scene">
      <div className="scene__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{siteContent.scenes.merch.eyebrow}</p>
            <h2>Wear the mindset.</h2>
          </div>
          <p>Three direct offers from the project. Current sizing, availability, and fulfillment are confirmed in the official store.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => <ProductCard product={product} index={index} key={product.name} />)}
        </div>
      </div>
    </section>
  );
}
