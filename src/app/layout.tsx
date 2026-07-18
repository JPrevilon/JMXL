import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JaiMoney XL — Young Black Entrepreneur",
  description:
    "The official one-page album, merch and visual experience for JaiMoney XL.",
  metadataBase: new URL("https://www.jaimoneyxl.com"),
  openGraph: {
    title: "JaiMoney XL — Young Black Entrepreneur",
    description: "The album. The mindset. The movement.",
    type: "website",
    images: ["/media/images/hero-poster.svg"],
  },
  icons: {
    icon: "/brand/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
