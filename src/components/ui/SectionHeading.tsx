import type { ReactNode } from "react";
import { Reveal } from "./motion";

/* Renders a heading string with *asterisk-wrapped* words in brass italic. */
export function accentize(text: string) {
  return text.split("*").map((p, i) =>
    i % 2 === 1 ? (
      <span key={i} className="italic text-brass-deep">
        {p}
      </span>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}
    >
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-brass" />
        <span className="eyebrow text-brass-deep">{eyebrow}</span>
        {centered && <span className="h-px w-8 bg-brass" />}
      </div>
      <h2
        className={`mt-5 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.06] tracking-tight text-balance ${
          tone === "dark" ? "text-cream" : "text-ink"
        }`}
      >
        {accentize(title)}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            tone === "dark" ? "text-cream/70" : "text-stone"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
