/* Prefixes a root-absolute asset path (e.g. "/gallery/x.jpg") with the
   deploy base path. Empty for local dev and root hosts (Vercel); set to
   "/rr-remodel-and-repair" by the GitHub Pages build so images resolve
   under the project subpath instead of 404-ing at the domain root.
   Plain <img>/<url()> don't get Next's basePath automatically — this does. */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}`;
}
