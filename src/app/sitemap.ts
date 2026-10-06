import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* One page, so one entry. The in-page sections are anchors on this URL,
   not separate documents — listing them would be padding, and Google
   treats them as the same page anyway. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/accessibility/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
