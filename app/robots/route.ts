import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : "https://www.kayven.in";
  const content = `
User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`.trim();
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}