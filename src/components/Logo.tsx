import { site } from "@/lib/site";
import { Img } from "./ui/Img";

/* Real R&R brand lockup: the bronze tools emblem (transparent PNG) +
   a text wordmark. The emblem is fixed bronze; the wordmark uses
   currentColor so it flips with the nav theme (cream over the hero,
   ink once the nav condenses). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Img
        base="logo-mark"
        variant="l"
        sizes="44px"
        alt={`${site.name} logo`}
        eager
        className="h-11 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-semibold tracking-tight">
          {site.shortName}
        </span>
        <span className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.26em] text-brass-deep">
          Remodel &amp; Repair
        </span>
      </span>
    </span>
  );
}
