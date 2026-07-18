export type Visual = {
  title: string;
  category: string;
  runtime: string;
  poster: string;
  videoSrc?: string;
};

export const visuals: Visual[] = [
  {
    title: "Official Music Video",
    category: "Music video",
    runtime: "03:18",
    poster: "/media/images/visual-01.svg",
  },
  {
    title: "Young Black Entrepreneur",
    category: "Mini visual",
    runtime: "00:42",
    poster: "/media/images/visual-02.svg",
  },
  {
    title: "The Ownership Conversation",
    category: "Interview",
    runtime: "01:12",
    poster: "/media/images/visual-03.svg",
  },
  {
    title: "Behind the Project",
    category: "Behind the scenes",
    runtime: "00:58",
    poster: "/media/images/visual-04.svg",
  },
];
