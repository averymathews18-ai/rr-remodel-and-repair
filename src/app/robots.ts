import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Emitted as a static /robots.txt by the export build.

   NOTE: robots.txt is only honored at a HOST ROOT. On the GitHub Pages
   mirror the site lives under /rr-remodel-and-repair/, so the file that
   actually counts there is averymathews18-ai.github.io/robots.txt, which
   belongs to a different repo. This file does its job on Netlify or on a
   real domain; on Pages, submit the sitemap directly in Search Console. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
