import { asset } from "@/lib/asset";
import { IMG_RUNGS } from "@/lib/img-manifest";

/* Responsive image. No JavaScript — just a correct <img>.

   Emits a srcset of pre-generated WebP rungs so a phone downloads a
   phone-sized file instead of a 2048px desktop master. Fixed-aspect
   surfaces (sliders, About, Process) point at rungs whose object-cover
   crop is already baked in, so no downloaded pixel gets thrown away.

   `sizes` MUST describe the real rendered width, or the browser assumes
   100vw and over-downloads — that assumption was the whole iOS problem. */

/** "/gallery/progress-2.jpg" -> "progress-2" */
export function baseOf(path: string): string {
  return path.split("/").pop()!.replace(/\.(jpe?g|png|webp)$/i, "");
}

export type ImgVariant = "bd" | "c43" | "c169" | "t" | "l";

export function Img({
  base,
  variant,
  sizes,
  alt,
  className,
  priority = false,
  eager = false,
  draggable,
  style,
}: {
  base: string;
  variant: ImgVariant;
  sizes: string;
  alt: string;
  className?: string;
  /** the LCP image only — eager + high priority. Never more than one. */
  priority?: boolean;
  /** above the fold but not the LCP: fetch immediately at normal priority */
  eager?: boolean;
  draggable?: boolean;
  style?: React.CSSProperties;
}) {
  const key = `${base}--${variant}`;
  const entry = IMG_RUNGS[key];

  if (!entry?.rungs?.length) {
    throw new Error(
      `Img: no rungs for "${key}". Re-run scripts/gen-responsive.js after adding an image.`,
    );
  }

  const { rungs, w, h } = entry;
  const url = (px: number) => asset(`/img/${key}-${px}.webp`);
  // fallback src = middle rung, so a no-srcset browser never gets the largest
  const fallback = rungs[Math.max(0, Math.floor((rungs.length - 1) / 2))];

  return (
    <img
      src={url(fallback)}
      srcSet={rungs.map((px) => `${url(px)} ${px}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      /* intrinsic size => the box is reserved before the bytes arrive:
         no layout shift, and scroll-reveal never measures a collapsed box */
      width={w}
      height={h}
      className={className}
      draggable={draggable}
      style={style}
      loading={priority || eager ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
    />
  );
}
