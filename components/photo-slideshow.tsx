"use client";

import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

/**
 * Full-bleed photo slideshow — the band grammar of their live homepage
 * (UserItemsListBannerSlideshow): slow crossfade, white logo/text plate on top.
 */
export function PhotoSlideshow({
  slides,
  children,
  heightClass = "min-h-[72vh] md:min-h-[86vh]",
  intervalMs = 6000,
}: {
  slides: Slide[];
  children?: React.ReactNode;
  heightClass?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (slides.length < 2) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length, intervalMs]);

  return (
    <section className={`relative flex ${heightClass} items-center justify-center overflow-hidden bg-[#231f1c]`}>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === 0 ? s.alt : ""}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">{children}</div>
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 transition-colors ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
