/* Lightweight inline icon set (no dependency). Stroke icons inherit
   currentColor; a few brand glyphs are used for services & process. */
import type { SVGProps } from "react";

export type IconName =
  // service / process glyphs
  | "kitchen"
  | "bath"
  | "addition"
  | "flooring"
  | "exterior"
  | "basement"
  | "tile"
  | "paint"
  | "saw"
  | "consult"
  | "design"
  | "build"
  | "reveal"
  // ui glyphs
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "arrow"
  | "check"
  | "star"
  | "menu"
  | "close"
  | "quote"
  | "chevron"
  | "drag";

const P: Record<IconName, React.ReactNode> = {
  kitchen: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <circle cx="7.5" cy="7" r="1.2" />
      <circle cx="12" cy="7" r="1.2" />
      <path d="M8 14v3M13 14v3" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12V6a2 2 0 0 1 4 0v1" />
      <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M6 18l-1 2M18 18l1 2" />
      <circle cx="6" cy="7" r="1" />
    </>
  ),
  addition: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M12 12v5M9.5 14.5h5" />
    </>
  ),
  flooring: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6M15 14v6" />
    </>
  ),
  exterior: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
      <rect x="10" y="13" width="4" height="6" />
      <path d="M8 4l0-1M16 4l0-1" />
    </>
  ),
  basement: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 20v-3h3v-3h3v-3h3V8" />
    </>
  ),
  tile: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </>
  ),
  paint: (
    <>
      <rect x="3.5" y="4.5" width="12" height="4.5" rx="1" />
      <path d="M15.5 6.75H19a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-6.5v2.5" />
      <rect x="10.5" y="13.5" width="4" height="6" rx="1" />
    </>
  ),
  saw: (
    <>
      <path d="M3 8h12l5.5 5.5" />
      <path d="M4 8l1.4 2 1.4-2 1.4 2 1.4-2 1.4 2 1.4-2 1.4 2" />
      <path d="M18.4 13.4l1.9 1.9-1 2.4-2.4-1" />
    </>
  ),
  consult: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12.5h5" />
    </>
  ),
  design: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-1.5" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  build: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
    </>
  ),
  reveal: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  star: (
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  quote: (
    <path d="M7 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7zM15 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2z" />
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  drag: <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />,
};

const FILLED: Partial<Record<IconName, boolean>> = { star: true, quote: true };

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  const filled = FILLED[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {P[name]}
    </svg>
  );
}
