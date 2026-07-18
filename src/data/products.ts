export type Product = {
  name: string;
  price: string;
  label: string;
  value: string;
  sizes: string;
  status: string;
  image: string;
  href: string;
  cta: string;
  featured?: boolean;
};

const merchUrl = process.env.NEXT_PUBLIC_MERCH_URL ?? "https://www.jaimoneyxl.shop";

export const products: Product[] = [
  {
    name: "YBE Statement Tee",
    price: "$40",
    label: "Statement tee",
    value: "A clean everyday layer carrying the Young Black Entrepreneur identity.",
    sizes: "Sizes listed in store",
    status: "Check store availability",
    image: "/media/images/merch-01.svg",
    href: merchUrl,
    cta: "Shop the tee",
  },
  {
    name: "Young Black Entrepreneur Hoodie",
    price: "$75",
    label: "Premium item",
    value: "A heavyweight project piece designed for repeat wear beyond release week.",
    sizes: "Sizes listed in store",
    status: "Check store availability",
    image: "/media/images/merch-02.svg",
    href: merchUrl,
    cta: "Shop the hoodie",
  },
  {
    name: "Album + Merch Bundle",
    price: "$95",
    label: "Album bundle",
    value: "The direct album release paired with a signature piece from the collection.",
    sizes: "Apparel size selected in store",
    status: "Check store availability",
    image: "/media/images/merch-03.svg",
    href: merchUrl,
    cta: "Shop the bundle",
    featured: true,
  },
];
