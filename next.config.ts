import type { NextConfig } from "next";

/* GitHub Pages serves this project under /rr-remodel-and-repair/, so the
   Pages build (GITHUB_PAGES=true) emits a static export with that base path.
   Local dev and root hosts (e.g. Vercel) build normally at the domain root. */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "rr-remodel-and-repair";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
