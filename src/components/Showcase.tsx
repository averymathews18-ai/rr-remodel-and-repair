import { site } from "@/lib/site";
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/motion";

export function Showcase() {
  return (
    <section
      id="work"
      className="grain relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Before & after"
          title="Drag to see the *transformation*."
          subtitle="Real remodels, revealed. Grab a handle and wipe between what was there and what we built."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {site.gallery.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={item.title}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* slider */}
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="rounded-[1.5rem] border border-cream/10 bg-cream/[0.04] p-3 shadow-lift backdrop-blur-sm">
                      <BeforeAfterSlider
                        before={item.before}
                        after={item.after}
                        beforeAlt={`${item.tag} before`}
                        afterAlt={`${item.tag} after`}
                        className="aspect-[4/3] w-full"
                      />
                    </div>
                  </div>

                  {/* copy */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-5xl font-semibold text-brass/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-brass/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream/70">
                      {item.blurb}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="flex items-center gap-2 text-sm font-semibold text-brass">
                        <Icon name="drag" size={16} /> Drag the handle
                      </span>
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-brass"
                      >
                        Start a project like this
                        <Icon
                          name="arrow"
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
