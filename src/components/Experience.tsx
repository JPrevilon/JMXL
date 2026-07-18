"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AlbumScene } from "./scenes/AlbumScene";
import { FanCaptureScene } from "./scenes/FanCaptureScene";
import { FooterScene } from "./scenes/FooterScene";
import { HeroScene } from "./scenes/HeroScene";
import { ManifestoScene } from "./scenes/ManifestoScene";
import { MerchScene } from "./scenes/MerchScene";
import { StoryScene } from "./scenes/StoryScene";
import { TracklistScene } from "./scenes/TracklistScene";
import { VisualsScene } from "./scenes/VisualsScene";
import { AudioDock } from "./AudioDock";
import { CustomCursor } from "./CustomCursor";
import { EpkDrawer } from "./EpkDrawer";
import { FixedMediaStage } from "./FixedMediaStage";
import { GlobalNavigation } from "./GlobalNavigation";
import { IntroLoader } from "./IntroLoader";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { VideoModal } from "./VideoModal";
import type { SceneKey } from "@/data/siteContent";
import type { Track } from "@/data/tracks";
import type { Visual } from "@/data/videos";

export function Experience() {
  const [entered, setEntered] = useState(false);
  const [activeScene, setActiveScene] = useState<SceneKey>("hero");
  const [activeTrack, setActiveTrack] = useState<Track | null>(null);
  const [activeVisual, setActiveVisual] = useState<Visual | null>(null);
  const [epkOpen, setEpkOpen] = useState(false);
  const sceneRoot = useRef<HTMLElement | null>(null);

  const sceneKeys = useMemo<SceneKey[]>(
    () => ["hero", "manifesto", "album", "tracks", "visuals", "merch", "story", "join", "footer"],
    [],
  );

  useEffect(() => {
    const root = sceneRoot.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const winner = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const key = winner?.target.getAttribute("data-scene") as SceneKey | null;
        if (key && sceneKeys.includes(key)) setActiveScene(key);
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-15% 0px -15% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sceneKeys]);

  const enter = useCallback(() => setEntered(true), []);

  return (
    <SmoothScrollProvider>
      <IntroLoader entered={entered} onEnter={enter} />
      <FixedMediaStage activeScene={activeScene} />
      <GlobalNavigation entered={entered} onOpenEpk={() => setEpkOpen(true)} />
      <ScrollProgress />
      <CustomCursor />

      <main ref={sceneRoot} className="site-shell" aria-hidden={!entered} inert={!entered ? true : undefined}>
        <HeroScene />
        <ManifestoScene />
        <AlbumScene />
        <TracklistScene activeTrack={activeTrack} onSelectTrack={setActiveTrack} />
        <VisualsScene onOpenVisual={setActiveVisual} />
        <MerchScene />
        <StoryScene onOpenEpk={() => setEpkOpen(true)} />
        <FanCaptureScene />
        <FooterScene />
      </main>

      <AudioDock key={activeTrack?.number ?? "empty"} track={activeTrack} onClose={() => setActiveTrack(null)} />
      <VideoModal visual={activeVisual} onClose={() => setActiveVisual(null)} />
      <EpkDrawer open={epkOpen} onClose={() => setEpkOpen(false)} />
    </SmoothScrollProvider>
  );
}
