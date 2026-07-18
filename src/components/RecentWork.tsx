import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/motion";

export function RecentWork() {
  return (
    <section
      id="reviews"
      className="grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[36rem] rounded-full bg-brass/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Recent work"
          title="A closer look at the *finished result*."
          subtitle="Real kitchens, counters, tile, and floors from recent R&R projects."
        />

        {/* masonry so portrait & landscape shots both sit naturally */}
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {site.recentWork.map((w, i) => (
            <Reveal key={w.src} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl border border-cream/10">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    {w.tag}
                  </span>
                  <p className="mt-2 font-display text-lg font-semibold text-cream drop-shadow">
                    {w.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brass px-8 py-4 font-semibold text-ink shadow-brass transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-deep"
          >
            Get your free estimate
            <Icon name="arrow" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
