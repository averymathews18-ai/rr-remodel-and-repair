import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2";

const sizes = "px-7 py-3.5 text-[15px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brass text-ink shadow-brass hover:bg-brass-deep hover:-translate-y-0.5 focus-visible:ring-offset-ink",
  outline:
    "border border-current text-cream/90 hover:bg-cream hover:text-ink focus-visible:ring-offset-ink",
  ghost: "text-ink hover:text-brass-deep",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${sizes} ${variants[variant]} ${className}`}>
      {children}
      {icon && (
        <Icon
          name={icon}
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
