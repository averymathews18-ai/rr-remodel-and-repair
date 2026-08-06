import type { NextConfig } from "next";

/* Three build modes:
   - default            → normal build at the domain root (local dev, Vercel)
   - GITHUB_PAGES=true  → static export under /rr-remodel-and-repair/ (Pages
                          serves project sites from a subpath)
   - STATIC_EXPORT=true → static export at the ROOT (Netlify drag-and-drop
                          zip, or any static host serving from /)            */
const isPages = process.env.GITHUB_PAGES === "true";
const isExport = process.env.STATIC_EXPORT === "true";
const repo = "rr-remodel-and-repair";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : isExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {};

export default nextConfig;
