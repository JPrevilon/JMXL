"use client";

import { tracks, type Track } from "@/data/tracks";
import { siteContent } from "@/data/siteContent";

export function TracklistScene({
  activeTrack,
  onSelectTrack,
}: {
  activeTrack: Track | null;
  onSelectTrack: (track: Track) => void;
}) {
  return (
    <section id="tracks" data-scene="tracks" className="scene tracklist-scene">
      <div className="scene__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{siteContent.scenes.tracks.eyebrow}</p>
            <h2>Tracklist</h2>
          </div>
          <p>The sequence is under wraps. Approved titles and short previews will appear here at release.</p>
        </div>
        <div className="tracklist" role="list">
          {tracks.map((track) => {
            const active = activeTrack?.number === track.number;
            return (
              <button
                key={track.number}
                type="button"
                className={`track-row ${active ? "is-active" : ""}`}
                onClick={() => onSelectTrack(track)}
                aria-pressed={active}
              >
                <span>{track.number}</span>
                <strong>{track.title}</strong>
                <span>{track.feature ?? "JaiMoney XL"}</span>
                <span>{track.duration}</span>
                <span className="track-row__play">{active ? "SELECTED" : track.previewSrc ? "PLAY" : "SOON"}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
