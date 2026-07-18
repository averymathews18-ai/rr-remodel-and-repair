import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/motion";
import { accentize } from "./ui/SectionHeading";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* visual */}
        <Reveal className="relative order-2 lg:order-1">
          {/* offset brass backdrop */}
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[1.6rem] bg-brass/15" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-line shadow-lift">
            <img
              src="/gallery/gray-after.jpg"
              alt="Finished kitchen remodel by R&R Remodel and Repair"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {/* floating credential card */}
          <div className="absolute -right-4 -top-6 hidden rounded-2xl bg-ink px-6 py-5 text-cream shadow-lift sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brass text-ink">
                <Icon name="check" size={22} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold">One Call</p>
                <p className="text-xs text-cream/60">Repairs to remodels</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <span className="eyebrow text-brass-deep">{about.kicker}</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink text-balance">
            {accentize(about.headline)}
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-deep">
                  <Icon name="check" size={15} />
                </span>
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href="#contact" variant="primary" icon="arrow">
              Get a Free Estimate
            </Button>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-ink transition-colors hover:text-brass-deep"
            >
              <Icon name="phone" size={18} className="text-brass-deep" />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
