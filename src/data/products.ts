export type Product = {
  name: string;
  price: string;
  label: string;
  image: string;
  href: string;
};

const merchUrl = process.env.NEXT_PUBLIC_MERCH_URL ?? "https://www.jaimoneyxl.shop";

export const products: Product[] = [
  {
    name: "YBE Statement Tee",
    price: "$40",
    label: "Essential",
    image: "/media/images/merch-01.svg",
    href: merchUrl,
  },
  {
    name: "Young Black Entrepreneur Hoodie",
    price: "$75",
    label: "Premium",
    image: "/media/images/merch-02.svg",
    href: merchUrl,
  },
  {
    name: "Album + Merch Bundle",
    price: "$95",
    label: "Best value",
    image: "/media/images/merch-03.svg",
    href: merchUrl,
  },
];
