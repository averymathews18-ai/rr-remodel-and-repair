"use client";

/* Cinematic hero film band — kit-built: Seedance photoreal shots + real
   project photos + rendered end card, graded and letterboxed 2.39:1.
   Autoplays muted while in view, pauses off-screen, loops. The film is
   silent by design, so there is no sound control to clutter it.
   Template breaks (deliberate): (1) letterboxed cinema band on a local
   trade site, (2) hero is a before/after confrontation not a centered
   H1-plus-cards, (3) mobile nav CTA lives in a bottom thumb bar. */

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { Reveal } from "./ui/motion";

export function FilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // poster only — no autoplay for reduced-motion users
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().catch(() => {});
          setCanPlay(true);
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="grain relative overflow-hidden bg-ink py-20 text-cream sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[120px]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <span className="eyebrow text-brass">Watch a remodel come together</span>
            <span className="h-px w-8 bg-brass" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[1.4rem] border border-cream/10 shadow-lift">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              poster={asset("/film/hero-poster.jpg")}
              className="block w-full"
              aria-label="Short film: an R&R kitchen remodel from mid-build to finished"
            >
              <source src={asset("/film/hero-film.mp4")} type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 text-center text-sm text-cream/60">
            An R&R cherry kitchen, from mid-build to finished.
            {!canPlay && " Tap to play."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
