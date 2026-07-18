export type Track = {
  number: string;
  title: string;
  feature?: string;
  producer: string;
  duration: string;
  previewSrc: string;
  background: string;
};

const backgrounds = [
  "/media/images/track-bg-01.webp",
  "/media/images/track-bg-02.webp",
  "/media/images/track-bg-03.webp",
  "/media/images/track-bg-04.webp",
] as const;

export const tracks: Track[] = [
  { number: "01", title: "P2P", feature: "Quinn", producer: "Credits pending", duration: "3:23", previewSrc: "/media/audio/preview-01-p2p.mp3", background: backgrounds[0] },
  { number: "02", title: "Scrolling", producer: "Credits pending", duration: "2:35", previewSrc: "/media/audio/preview-02-scrolling.mp3", background: backgrounds[1] },
  { number: "03", title: "Log Off", producer: "Credits pending", duration: "2:17", previewSrc: "/media/audio/preview-03-log-off.mp3", background: backgrounds[2] },
  { number: "04", title: "Ride To", producer: "Credits pending", duration: "3:12", previewSrc: "/media/audio/preview-04-ride-to.mp3", background: backgrounds[3] },
  { number: "05", title: "Save Me", feature: "Diana", producer: "Credits pending", duration: "3:12", previewSrc: "/media/audio/preview-05-save-me.mp3", background: backgrounds[0] },
  { number: "06", title: "Hustle Made Me", feature: "L God", producer: "Credits pending", duration: "3:30", previewSrc: "/media/audio/preview-06-hustle-made-me.mp3", background: backgrounds[1] },
  { number: "07", title: "Forgive Me", producer: "Credits pending", duration: "2:37", previewSrc: "/media/audio/preview-07-forgive-me.mp3", background: backgrounds[2] },
  { number: "08", title: "Same Shit", feature: "Charlie Rok", producer: "Credits pending", duration: "2:11", previewSrc: "/media/audio/preview-08-same-shit.mp3", background: backgrounds[3] },
  { number: "09", title: "PPLE", producer: "Credits pending", duration: "3:21", previewSrc: "/media/audio/preview-09-pple.mp3", background: backgrounds[0] },
  { number: "10", title: "Moments", feature: "Dubz & Bacheler", producer: "Credits pending", duration: "2:34", previewSrc: "/media/audio/preview-10-moments.mp3", background: backgrounds[1] },
  { number: "11", title: "What They Want", producer: "Credits pending", duration: "2:54", previewSrc: "/media/audio/preview-11-what-they-want.mp3", background: backgrounds[2] },
];
