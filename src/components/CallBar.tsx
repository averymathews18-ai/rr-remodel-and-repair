"use client";

/* Sticky mobile call bar — thumb-reach tap-to-call + estimate, mobile only.
   Appears after the visitor scrolls past the hero so it never covers the
   hero CTAs; respects the home-indicator safe area. */

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";

export function CallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brass/30 bg-ink/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 p-3">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brass py-3 font-semibold text-ink"
        >
          <Icon name="phone" size={18} /> Call now
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream/25 py-3 font-semibold text-cream"
        >
          Free estimate <Icon name="arrow" size={16} />
        </a>
      </div>
    </div>
  );
}
