import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";

export async function GET() {
  const siteUrl = SITE_URL;
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