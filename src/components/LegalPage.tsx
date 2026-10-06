import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { Logo } from "./Logo";
import { Footer } from "./Footer";
import { Icon } from "./ui/Icon";

/* Shared shell for the three legal pages. Plain, readable, one <h1>,
   and a way back to the site at the top and bottom. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line bg-cream">
        <div className="mx-auto flex h-[76px] max-w-4xl items-center justify-between px-5 sm:px-8">
          <a href={asset("/")} aria-label={`${site.name} home`} className="text-ink">
            <Logo />
          </a>
          <a
            href={asset("/")}
            className="flex items-center gap-1.5 text-sm font-semibold text-stone transition-colors hover:text-brass"
          >
            <Icon name="arrow" size={15} className="rotate-180" />
            Back to site
          </a>
        </div>
      </header>

      <main className="bg-cream pb-24 pt-14 sm:pt-20">
        <article className="legal mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-[clamp(2rem,5vw,2.9rem)] font-semibold leading-tight tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone">{intro}</p>
          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-stone">
            Last updated {site.legal.lastUpdated}
          </p>
          <div className="mt-10 space-y-8">{children}</div>
        </article>
      </main>

      <Footer />
    </>
  );
}

/* A titled section. Keeps heading levels descending (h1 -> h2) so the
   document outline stays valid for screen readers and crawlers. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-slate">{children}</div>
    </section>
  );
}
