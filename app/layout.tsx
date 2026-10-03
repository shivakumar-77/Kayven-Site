import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const pf = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const ss = Source_Serif_4({ subsets: ["latin"], variable: "--font-source" });
const jb = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });
export const metadata: Metadata = {
  title: "Kayven — AI-Native Personalised Health Platform",
  description: "Kayven brings nutrition, fitness, progress tracking and AI-powered personalisation into one connected health ecosystem.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${pf.variable} ${ss.variable} ${jb.variable}`}><body>{children}</body></html>;
}
