export type Visual = {
  title: string;
  category: string;
  runtime: string;
  poster: string;
  videoSrc?: string;
  caption?: string;
};

export const visuals: Visual[] = [
  {
    title: "Scrolling",
    category: "Official visual",
    runtime: "00:12",
    poster: "/media/images/visual-01-poster.webp",
    videoSrc: "/media/video/visual-01.mp4",
    caption: "An official short-form visual from the Young Black Entrepreneur world.",
  },
  {
    title: "Hustle Made Me",
    category: "Performance visual",
    runtime: "00:16",
    poster: "/media/images/visual-02-poster.webp",
    videoSrc: "/media/video/visual-02.mp4",
    caption: "A performance-led visual built around work, focus, and forward motion.",
  },
  {
    title: "Motion",
    category: "Motion study",
    runtime: "00:25",
    poster: "/media/images/visual-03-poster.webp",
    videoSrc: "/media/video/visual-03.mp4",
    caption: "A compact motion study featuring JaiMoney XL.",
  },
  {
    title: "Forgive",
    category: "Short visual",
    runtime: "00:25",
    poster: "/media/images/visual-04-poster.webp",
    videoSrc: "/media/video/visual-04.mp4",
    caption: "A monochrome short visual featuring JaiMoney XL.",
  },
];
