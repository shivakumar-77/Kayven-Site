import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PrivacyNotice from "./components/PrivacyNotice";
import { SITE_URL } from "@/lib/site";

const pf = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadataBase = new URL(SITE_URL);

export const metadata: Metadata = {
  title: "Kayven",
  description: "Kayven brings nutrition, fitness, progress tracking and AI-powered personalisation into one connected health ecosystem.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Kayven",
    images: [
      {
        url: `${SITE_URL}og-image.png`,
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
    images: [`${SITE_URL}twitter-image.png`],
  },
};

import ClientClasses from "./components/ClientClasses";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pf.variable} ${inter.variable}`}>
      <body>
        <ClientClasses />
        <SiteHeader />
        <PrivacyNotice />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}