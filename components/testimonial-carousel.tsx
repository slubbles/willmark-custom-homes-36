"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/site";

/** Testimonial carousel — their live homepage uses a 9-quote carousel on the light band. */
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 9000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [items.length]);

  const go = (next: number) => {
    setIndex((next + items.length) % items.length);
    if (timer.current) clearInterval(timer.current);
  };

  const t = items[index];

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <blockquote className="min-h-[12rem] text-[17px] leading-[2em] text-[#3e3e3e] md:text-[19px]">
        “{t.quote.length > 520 ? `${t.quote.slice(0, 520).trimEnd()}…` : t.quote}”
      </blockquote>
      <p className="mt-6 font-display text-[15px] uppercase tracking-[0.18em] text-[#231f1c]">{t.name}</p>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center border border-[#231f1c]/30 text-[#231f1c] transition-colors hover:bg-[#231f1c] hover:text-white"
        >
          ‹
        </button>
        <div className="flex gap-1.5">
          {items.map((it, i) => (
            <button
              key={it.name}
              type="button"
              aria-label={`Testimonial ${i + 1}: ${it.name}`}
              aria-pressed={i === index}
              onClick={() => go(i)}
              className={`h-1.5 w-6 transition-colors ${i === index ? "bg-[#231f1c]" : "bg-[#231f1c]/25 hover:bg-[#231f1c]/50"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center border border-[#231f1c]/30 text-[#231f1c] transition-colors hover:bg-[#231f1c] hover:text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
