"use client";

import { useEffect } from "react";

/* The whole page's scroll-reveal engine: one IntersectionObserver, mounted
   once, that flips a class. The animation itself is CSS.

   This replaces framer-motion's whileInView, which shipped ~158KB of JS and
   made every animated section a client component. */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal],[data-stagger]"),
    );
    if (!nodes.length) return;

    // Safari 12.1+ has IO; if it somehow isn't there, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const pending = new Set<HTMLElement>(nodes);
    let settleTimer: number | undefined;
    let queued = false;

    const stopSweep = () => {
      window.removeEventListener("scroll", onEvent);
      window.removeEventListener("resize", onEvent);
      if (settleTimer !== undefined) window.clearInterval(settleTimer);
    };

    const show = (el: Element) => {
      el.classList.add("is-in");
      pending.delete(el as HTMLElement);
      io.unobserve(el); // reveals are one-way; stop watching
      if (!pending.size) stopSweep();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) show(e.target);
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    /* Safety net. A block whose box is still settling (a late image, a font
       swap) can be measured as empty, and an empty rect never reports as
       intersecting — that block would sit invisible until the next scroll.
       This sweep re-checks whatever is still pending and retires itself. */
    function sweep() {
      queued = false;
      const vh = window.innerHeight;
      for (const el of Array.from(pending)) {
        const r = el.getBoundingClientRect();
        if (r.top < vh - 80 && r.bottom > 0) show(el);
      }
    }

    function onEvent() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    }

    nodes.forEach((n) => io.observe(n));
    window.addEventListener("scroll", onEvent, { passive: true });
    window.addEventListener("resize", onEvent);

    // images and fonts settle within the first few seconds; then stop polling
    settleTimer = window.setInterval(onEvent, 400);
    const settleEnd = window.setTimeout(() => {
      if (settleTimer !== undefined) window.clearInterval(settleTimer);
      settleTimer = undefined;
    }, 6000);

    return () => {
      io.disconnect();
      stopSweep();
      window.clearTimeout(settleEnd);
    };
  }, []);

  return null;
}
