import type { Metadata } from "next";
import { Caveat, Fraunces, Kaushan_Script, Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Type system from the mockup. Each exposes a CSS variable mapped in globals.css.
// Treasure Map (fontspace.com, freeware for non-commercial use) for the main headings.
const treasureMap = localFont({ src: "./fonts/TreasureMap.ttf", variable: "--font-treasure-map" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const kaushan = Kaushan_Script({ variable: "--font-kaushan", subsets: ["latin"], weight: "400" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTHS Hack 2027 · North Texas High School Hackathon",
  description:
    "A free, one-day, beginner-friendly hackathon for North Texas high schoolers, hosted by ACM UT Dallas on April 3rd, 2027.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${treasureMap.variable} ${fraunces.variable} ${kaushan.variable} ${caveat.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
