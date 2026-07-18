"use client";

/* Signature interactive Before/After reveal.
   - Drag the handle OR anywhere on the image (mouse + touch).
   - touch-action:pan-y keeps vertical page scroll working on mobile.
   - Fully keyboard accessible (role="slider", arrows / home / end).
   - Auto-"wipes" once when scrolled into view to signal interactivity.
   - Honors prefers-reduced-motion (static 50/50, no intro wipe). */

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Props = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
};

const START = 82; // mostly "before" showing, so the wipe reveals the "after"
const SETTLE = 50;

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
}: Props) {
  const [pos, setPos] = useState(START);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);
  const rafRef = useRef<number | null>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  const beginDrag = useCallback(
    (clientX: number) => {
      interacted.current = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setDragging(true);
      setFromClientX(clientX);
    },
    [setFromClientX],
  );

  /* Global listeners while dragging so the pointer can leave the box. */
  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const stop = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, [dragging, setFromClientX]);

  /* One-time auto-reveal wipe when the slider scrolls into view. */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce || interacted.current) {
          setPos(SETTLE);
          return;
        }
        const dur = 1150;
        let startT: number | null = null;
        const step = (t: number) => {
          if (interacted.current) return;
          if (startT === null) startT = t;
          const k = Math.min(1, (t - startT) / dur);
          const eased = 1 - Math.pow(1 - k, 3); // easeOutCubic
          setPos(START + (SETTLE - START) * eased);
          if (k < 1) rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    let next: number | null = null;
    if (e.key === "ArrowLeft") next = pos - step;
    else if (e.key === "ArrowRight") next = pos + step;
    else if (e.key === "Home") next = 2;
    else if (e.key === "End") next = 98;
    if (next !== null) {
      e.preventDefault();
      interacted.current = true;
      setPos(Math.max(2, Math.min(98, next)));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative select-none overflow-hidden rounded-2xl bg-ink ${className}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => beginDrag(e.clientX)}
    >
      {/* AFTER (base layer) */}
      <img
        src={after}
        alt={afterAlt}
        draggable={false}
        className="pointer-events-none block h-full w-full object-cover"
      />

      {/* BEFORE (clipped to the left of the divider) */}
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* corner labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
        After
      </span>

      {/* divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-cream/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.stopPropagation();
            beginDrag(e.clientX);
          }}
          className="reveal-range pointer-events-auto absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-ink shadow-lift ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brass active:scale-95"
          style={{ touchAction: "none", cursor: dragging ? "grabbing" : "grab" }}
        >
          <Icon name="drag" size={22} />
        </button>
      </div>
    </div>
  );
}
