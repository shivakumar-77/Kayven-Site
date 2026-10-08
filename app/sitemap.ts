import { SITE_URL } from "@/lib/site";

export default function Sitemap() {
  const baseUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  const today = new Date().toISOString().split("T")[0];

  const routes = [
    "",
    "about",
    "ai",
    "careers",
    "demo",
    "fitness",
    "nutrition",
    "pricing",
    "product",
    "team",
    "contact",
    "get-started",
    "insights",
    "refund",
    "privacy",
    "terms",
    "subscription",
    "faq",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  // Add legal pages with lower priority and yearly frequency
  const legalPages = ["refund", "privacy", "terms"];
  legalPages.forEach((page) => {
    const index = routes.findIndex((r) => r.url === `${baseUrl}/${page}`);
    if (index !== -1) {
      routes[index].changeFrequency = "yearly";
      routes[index].priority = 0.8;
    }
  });

  // Add FAQ with monthly frequency and medium priority
  const faqIndex = routes.findIndex((r) => r.url === `${baseUrl}/faq`);
  if (faqIndex !== -1) {
    routes[faqIndex].changeFrequency = "monthly";
    routes[faqIndex].priority = 0.85;
  }

  return [
    ...routes,
    // Optional: add alternative language versions if needed
  ];
}