"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { siteContent } from "@/data/siteContent";

export function MerchScene() {
  return (
    <section id="merch" data-scene="merch" className="scene merch-scene">
      <div className="scene__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{siteContent.scenes.merch.eyebrow}</p>
            <h2>Wear the mindset.</h2>
          </div>
          <p>Limited pieces built around the project. Final inventory and fulfillment details are confirmed at checkout.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <span className="product-card__number">0{index + 1}</span>
              <div className="product-card__image">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 800px) 90vw, 32vw" />
              </div>
              <span className="product-card__label">{product.label}</span>
              <h3>{product.name}</h3>
              <div className="product-card__footer">
                <strong>{product.price}</strong>
                <a href={product.href} target="_blank" rel="noreferrer">Shop now ↗</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
