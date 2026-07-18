"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./ui/Icon";
import { accentize } from "./ui/SectionHeading";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-line bg-cream/40 px-4 py-3 text-slate placeholder:text-stone/60 outline-none transition-colors focus:border-brass focus:bg-white focus:ring-2 focus:ring-brass/20";

export function Contact() {
  const { contact } = site;
  const [status, setStatus] = useState<Status>("idle");
  const demo = !contact.formEndpoint;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        await new Promise((r) => setTimeout(r, 800)); // demo mode
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const details = [
    { icon: "phone" as const, label: site.phoneDisplay, href: site.phoneHref },
    { icon: "mail" as const, label: site.email, href: `mailto:${site.email}` },
    { icon: "pin" as const, label: site.serviceArea },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-line shadow-lift lg:grid-cols-2">
          {/* LEFT — dark info panel */}
          <div className="grain relative overflow-hidden bg-ink p-8 text-cream sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brass/20 blur-[90px]"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brass" />
                <span className="eyebrow text-brass">{contact.kicker}</span>
              </div>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-tight text-cream text-balance">
                {accentize(contact.headline)}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">
                {contact.sub}
              </p>

              <ul className="mt-9 space-y-4">
                {details.map((d) => (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="group flex items-center gap-4 transition-colors hover:text-brass"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream/[0.06] text-brass ring-1 ring-cream/10 transition-colors group-hover:bg-brass group-hover:text-ink">
                          <Icon name={d.icon} size={19} />
                        </span>
                        <span className="font-medium">{d.label}</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream/[0.06] text-brass ring-1 ring-cream/10">
                          <Icon name={d.icon} size={19} />
                        </span>
                        <span className="font-medium text-cream/85">{d.label}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* prominent call button */}
              <a
                href={site.phoneHref}
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-6 py-4 font-semibold text-ink shadow-brass transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-deep sm:w-auto"
              >
                <Icon name="phone" size={18} /> Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bg-white p-8 sm:p-12">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brass/15 text-brass-deep">
                  <Icon name="check" size={34} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Thanks — we’ve got it!
                </h3>
                <p className="mt-3 max-w-sm text-stone">
                  We’ll reach out within one business day to talk through your
                  project. For anything urgent, call{" "}
                  <a href={site.phoneHref} className="font-semibold text-brass-deep">
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-ink underline underline-offset-4 hover:text-brass-deep"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate">
                    Full name
                  </label>
                  <input id="name" name="name" required placeholder="Jane Homeowner" className={inputBase} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" className={inputBase} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputBase} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-sm font-semibold text-slate">
                      Project type
                    </label>
                    <select id="projectType" name="projectType" required defaultValue="" className={inputBase}>
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.projectTypes.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-slate">
                      Budget
                    </label>
                    <select id="budget" name="budget" defaultValue="" className={inputBase}>
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="We'd love a modern kitchen with an island…"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-cream transition-all duration-300 hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      Request my free estimate <Icon name="arrow" size={18} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Something went wrong. Please call {site.phoneDisplay} instead.
                  </p>
                )}
                <p className="text-center text-xs text-stone">
                  No spam, ever. Free, no-obligation estimates.
                </p>
                {demo && (
                  <p className="flex items-center justify-center gap-1.5 rounded-lg bg-brass/10 px-3 py-2 text-center text-xs text-brass-deep">
                    <Icon name="reveal" size={13} /> Demo mode — add your Formspree/Netlify
                    endpoint in <code className="font-mono">src/lib/site.ts</code> to receive
                    submissions.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
