import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "./ui/motion";

export function Process() {
  return (
    <section id="process" className="relative bg-bone/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Simple, start to *finish*."
          subtitle="From your free estimate to the final walkthrough, you'll always know what's happening and what's next."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden lg:block"
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--color-brass) 12%, var(--color-brass) 88%, transparent)",
              opacity: 0.4,
            }}
          />

          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" gap={0.12}>
            {site.process.map((step, i) => (
              <StaggerItem key={step.title} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-brass/40 bg-cream text-brass shadow-soft">
                    <Icon name={step.icon} size={26} />
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ink text-[11px] font-bold text-brass">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink lg:mt-6">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 leading-relaxed text-stone">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* real craftsmanship — in-progress shots */}
        <Reveal className="mt-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-line shadow-soft">
              <img
                src="/gallery/progress-2.jpg"
                alt="Kitchen remodel in progress — new cabinets and flooring going in"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-line shadow-soft">
              <img
                src="/gallery/progress-1.jpg"
                alt="New cabinetry installed during an R&R kitchen remodel"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
          <p className="mt-4 text-center text-sm text-stone">
            From tear-out to the final detail, the same crew handles your project start to finish.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
