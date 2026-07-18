import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/motion";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Everything from *repairs to remodels*."
          subtitle="One local crew for your kitchen, bath, floors, tile, paint, and carpentry — plus the everyday repairs in between."
        />

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.08}
        >
          {site.services.map((s) => (
            <StaggerItem key={s.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-lift">
                {/* corner wash */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brass/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-ink text-brass transition-colors duration-500 group-hover:bg-brass group-hover:text-ink">
                    <Icon name={s.icon} size={26} />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone">{s.description}</p>

                  <ul className="mt-5 space-y-2">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2.5 text-sm font-medium text-slate"
                      >
                        <Icon name="check" size={16} className="text-brass-deep" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
