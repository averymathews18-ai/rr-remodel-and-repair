/* Scroll-reveal primitives — CSS transitions driven by ONE shared
   IntersectionObserver (see RevealObserver). These are SERVER components:
   they ship no JavaScript and create no client boundary, which is what
   keeps the page's hydration cost near zero on phones.

   Previously these were framer-motion components; motion added ~158KB of
   JS and pulled every animated section into the client bundle.

   - <Reveal>      fade + rise a block into view once.
   - <Stagger>     parent whose children come in one after another (the
                   delay is pure CSS, :nth-child based).
   - <StaggerItem> a single staggered child.
   prefers-reduced-motion is honored in globals.css. */

import type { CSSProperties, ReactNode } from "react";

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
  "--reveal-y"?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** kept for source compatibility; reveals always run once */
  once?: boolean;
}) {
  const style: RevealStyle = {
    "--reveal-delay": `${delay}s`,
    ...(y !== 26 ? { "--reveal-y": `${y}px` } : {}),
  };
  return (
    <div data-reveal className={className} style={style}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** kept for source compatibility; the gap is set in CSS */
  gap?: number;
}) {
  const style: RevealStyle = { "--reveal-delay": `${delay}s` };
  return (
    <div data-stagger className={className} style={style}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const style: RevealStyle = y !== 24 ? { "--reveal-y": `${y}px` } : {};
  return (
    <div data-stagger-item className={className} style={style}>
      {children}
    </div>
  );
}
