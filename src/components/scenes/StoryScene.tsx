"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export function StoryScene({ onOpenEpk }: { onOpenEpk: () => void }) {
  return (
    <section id="story" data-scene="story" className="scene story-scene">
      <div className="scene__inner story-layout">
        <div className="story-portrait">
          <Image src={siteContent.scenes.story.media} alt="JaiMoney XL editorial portrait artwork" fill sizes="(max-width: 800px) 90vw, 44vw" />
          <span>Los Angeles, CA</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">{siteContent.scenes.story.eyebrow}</p>
          <h2>Building a catalog.<br />Building a brand.<br /><em>Building ownership.</em></h2>
          <p>{siteContent.story}</p>
          <div className="story-stats">
            <div><strong>01</strong><span>Independent vision</span></div>
            <div><strong>02</strong><span>Album + merch system</span></div>
            <div><strong>03</strong><span>Direct fan relationship</span></div>
          </div>
          <div className="button-row">
            <button className="button button--primary" type="button" onClick={onOpenEpk}>Open EPK</button>
            <a className="button button--ghost" href={`mailto:${siteContent.bookingEmail}`}>Book JaiMoney XL</a>
          </div>
        </div>
      </div>
    </section>
  );
}
