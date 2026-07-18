"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./ui/Icon";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-cream/85 text-ink shadow-[0_10px_30px_-20px_rgba(18,21,27,0.4)] backdrop-blur-md"
          : "border-b border-transparent text-cream"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm font-medium tracking-tight transition-colors hover:text-brass"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors hover:text-brass"
          >
            <Icon name="phone" size={16} />
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink shadow-brass transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-deep"
          >
            Free Estimate
            <Icon name="arrow" size={16} />
          </a>
        </div>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-current/20 transition-colors hover:text-brass lg:hidden"
        >
          <Icon name="menu" size={22} />
        </button>
      </nav>
      </header>

      {/* mobile menu — sibling of <header> so the header's backdrop-blur
          containing block can't trap this fixed, full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink text-cream lg:hidden"
          >
            <div className="flex h-[76px] items-center justify-between px-5 sm:px-8">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-cream/20 transition-colors hover:text-brass"
              >
                <Icon name="close" size={22} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="mt-6 flex flex-col gap-1 px-6"
            >
              {site.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-mute py-4 font-display text-3xl font-semibold tracking-tight transition-colors hover:text-brass"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-cream/25 py-3.5 font-semibold"
              >
                <Icon name="phone" size={18} /> {site.phoneDisplay}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brass py-3.5 font-semibold text-ink"
              >
                Get a Free Estimate <Icon name="arrow" size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
