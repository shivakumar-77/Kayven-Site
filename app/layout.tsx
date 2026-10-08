import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const pf = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const ss = Source_Serif_4({ subsets: ["latin"], variable: "--font-source" });
const jb = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });

export const metadataBase = new URL("https://kayven.in");

export const metadata: Metadata = {
  title: {
    template: "%s — Kayven",
    default: "Kayven — AI-Native Personalised Health Platform",
  },
  description: "Kayven brings nutrition, fitness, progress tracking and AI-powered personalisation into one connected health ecosystem.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kayven.in/",
    siteName: "Kayven",
    images: [
      {
        url: "https://kayven.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kayven — AI-Native Personalised Health Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayven — AI-Native Personalised Health Platform",
    description: "Kayven brings nutrition, fitness, progress tracking and AI-powered personalisation into one connected health ecosystem.",
    images: ["https://kayven.in/twitter-image.png"],
  },
};

import ClientClasses from "./components/ClientClasses";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pf.variable} ${ss.variable} ${jb.variable}`}>
      <head>
      </head>
      <body>
        <ClientClasses />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}