"use client";

import { motion } from "motion/react";
import { site } from "@/lib/site";
import { BeforeAfterSlider } from "./ui/BeforeAfterSlider";
import { Icon } from "./ui/Icon";
import { asset } from "@/lib/asset";

const EASE = [0.16, 1, 0.3, 1] as const;

function Headline() {
  const parts = site.hero.headline.split("*");
  return (
    <h1 className="font-display text-[clamp(2.3rem,5vw,3.9rem)] font-semibold leading-[1.05] tracking-tight text-cream text-balance">
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          // pr/-mr keeps the italic last glyph from being clipped by
          // -webkit-background-clip:text without shifting the next word.
          <span key={i} className="text-gradient-brass italic pr-[0.14em] -mr-[0.1em]">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </h1>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-screen overflow-hidden bg-ink text-cream"
    >
      {/* immersive darkened real-project backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={asset("/gallery/cherry-after.jpg")}
          alt=""
          className="animate-kenburns h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
        <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-brass/20 blur-[130px]" />
        <div className="absolute bottom-[-14rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-brass-deep/20 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pt-24">
        {/* LEFT — logo + copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center lg:text-left"
        >
          {/* the logo — front and center, glowing */}
          <div className="relative mx-auto mb-8 w-56 sm:w-64 lg:mx-0 lg:w-72">
            <div className="absolute inset-0 -z-0 scale-125 rounded-full bg-brass/25 blur-[60px]" />
            <img
              src={asset("/brand/logo.png")}
              alt={`${site.name} logo`}
              className="animate-float relative w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            />
          </div>

          <Headline />

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75 text-pretty lg:mx-0">
            {site.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-start justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-4 font-semibold text-ink shadow-brass transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-deep"
            >
              {site.hero.primaryCta}
              <Icon
                name="arrow"
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 font-semibold text-cream transition-all duration-300 hover:border-brass/60 hover:bg-cream/5"
            >
              <Icon name="phone" size={18} className="text-brass" />
              {site.phoneDisplay}
            </a>
          </div>

          {/* honest trust row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream/70 lg:justify-start">
            <span className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-brass" /> Free estimates
            </span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-brass" /> Repairs to full remodels
            </span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span className="flex items-center gap-2">
              <Icon name="pin" size={16} className="text-brass" /> {site.serviceArea.replace("Proudly serving ", "")}
            </span>
          </div>
        </motion.div>

        {/* RIGHT — before/after reveal */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[1.6rem] border border-cream/10 bg-cream/[0.04] p-3 shadow-lift backdrop-blur-sm">
            <BeforeAfterSlider
              before={site.gallery[0].before}
              after={site.gallery[0].after}
              beforeAlt="Kitchen before remodel by R&R"
              afterAlt="Kitchen after remodel by R&R"
              className="aspect-[4/3] w-full"
            />
            <div className="flex items-center justify-between px-2 pb-1 pt-3">
              <p className="text-sm font-medium text-cream/80">Real R&R kitchen remodel</p>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brass">
                <Icon name="drag" size={14} /> Drag to reveal
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 lg:flex">
        <span className="grid h-9 w-6 justify-center rounded-full border border-cream/30 pt-2">
          <span className="animate-scrolldot h-1.5 w-1.5 rounded-full bg-brass" />
        </span>
      </div>
    </section>
  );
}
