export type SceneKey =
  | "hero"
  | "manifesto"
  | "album"
  | "tracks"
  | "visuals"
  | "merch"
  | "story"
  | "join"
  | "footer";

export const siteContent = {
  artist: "JaiMoney XL",
  project: "Young Black Entrepreneur",
  city: "Los Angeles, CA",
  genre: "Hip Hop",
  tagline: "The album. The mindset. The movement.",
  manifesto: ["Built by vision.", "Backed by work.", "Owned from the ground up."],
  albumSummary:
    "A statement on independence, ambition, and building something you can call your own. Young Black Entrepreneur turns the work behind the vision into a soundtrack.",
  story:
    "JaiMoney XL is an independent hip-hop artist building at the intersection of music, ownership, and direct connection. Young Black Entrepreneur is the next chapter: a focused body of work made to move with purpose.",
  fanCapture: {
    heading: "Don’t just follow the release. Join the movement.",
    description: "Get first access to new music, limited merch, and live announcements.",
    formAction: process.env.NEXT_PUBLIC_FAN_FORM_ACTION ?? "",
  },
  purchaseUrl:
    process.env.NEXT_PUBLIC_ALBUM_BUY_URL ?? "https://jaimoneyxl.bandcamp.com",
  merchUrl:
    process.env.NEXT_PUBLIC_MERCH_URL ?? "https://www.jaimoneyxl.shop",
  bookingEmail:
    process.env.NEXT_PUBLIC_BOOKING_EMAIL ?? "Admin@starsfament.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/JaiMoneyXL" },
    { label: "TikTok", href: "https://tiktok.com/@Jai_m0n3y_XL" },
    { label: "YouTube", href: "https://youtube.com/@JaiMoneyXL" },
    { label: "Bandcamp", href: "https://jaimoneyxl.bandcamp.com" },
  ],
  scenes: {
    hero: {
      eyebrow: "JaiMoney XL presents",
      media: "/media/images/hero-poster.svg",
    },
    manifesto: {
      eyebrow: "The manifesto",
      media: "/media/images/track-bg-01.svg",
    },
    album: {
      eyebrow: "The new project",
      media: "/media/images/album-cover-placeholder.svg",
    },
    tracks: {
      eyebrow: "Inside the album",
      media: "/media/images/track-bg-02.svg",
    },
    visuals: {
      eyebrow: "The visual world",
      media: "/media/images/visual-01.svg",
    },
    merch: {
      eyebrow: "Wear the mindset",
      media: "/media/images/merch-02.svg",
    },
    story: {
      eyebrow: "The artist",
      media: "/media/images/story-portrait.svg",
    },
    join: {
      eyebrow: "Join the movement",
      media: "/media/images/track-bg-03.svg",
    },
    footer: {
      eyebrow: "JaiMoney XL",
      media: "/media/images/hero-poster.svg",
    },
  } satisfies Record<SceneKey, { eyebrow: string; media: string }>,
};
