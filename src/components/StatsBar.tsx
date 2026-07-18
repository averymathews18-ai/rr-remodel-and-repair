import { site } from "@/lib/site";
import { Stagger, StaggerItem } from "./ui/motion";

export function StatsBar() {
  return (
    <section className="border-y border-line bg-bone/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Stagger className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {site.stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="flex flex-col items-center py-8 text-center md:py-10"
            >
              <span className="font-display text-4xl font-semibold text-ink md:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-stone">
                {s.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
