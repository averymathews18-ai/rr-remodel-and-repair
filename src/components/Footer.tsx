import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./ui/Icon";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/70">
      <div className="hairline-brass opacity-50" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1.2fr]">
        {/* brand */}
        <div>
          <span className="text-cream">
            <Logo />
          </span>
          <p className="mt-5 max-w-xs leading-relaxed">
            {site.name} — kitchen &amp; bath remodels, flooring, tile, painting,
            drywall, carpentry, and home repair. {site.freeEstimate}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-deep"
          >
            Get a Free Estimate <Icon name="arrow" size={16} />
          </a>
        </div>

        {/* explore */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">Explore</h3>
          <ul className="mt-5 space-y-3">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-brass">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="font-display text-lg font-semibold text-cream">Get in touch</h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-brass"
              >
                <Icon name="phone" size={17} className="text-brass" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all transition-colors hover:text-brass"
              >
                <Icon name="mail" size={17} className="text-brass" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" size={17} className="text-brass" />
              {site.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-ink-mute">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="flex items-center gap-1.5 transition-colors hover:text-brass">
            Back to top
            <Icon name="chevron" size={15} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}
