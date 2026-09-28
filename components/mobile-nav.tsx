"use client";

import { useState } from "react";
import Link from "next/link";

const groups: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Plans & Galleries",
    links: [
      { href: "/texas-modern-farmhouse-plans", label: "Texas Modern Farmhouse Plans" },
      { href: "/modern-ranch-home-plans", label: "Modern Ranch Plans" },
      { href: "/custom-design-project-gallery", label: "Custom Design-Build Project Gallery" },
      { href: "/texas-modern-farmhouse-gallery", label: "Texas Modern Farmhouse Gallery" },
      { href: "/modern-ranch-gallery", label: "Modern Ranch Gallery" },
    ],
  },
  {
    title: "Where We Build",
    links: [
      { href: "/austin-county-builder", label: "Austin County" },
      { href: "/washington-county-builder", label: "Washington County" },
      { href: "/colorado-county-builder", label: "Colorado County" },
      { href: "/fayette-county-builder", label: "Fayette County" },
      { href: "/waller-county-builder", label: "Waller County" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/theteam", label: "The Team" },
      { href: "/design", label: "Design" },
      { href: "/warranty", label: "Warranty" },
      { href: "/blog", label: "Blog" },
      { href: "/hire-us", label: "Contact Us" },
    ],
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span className={`h-px w-6 bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
        <span className={`h-px w-6 bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#231f1c] px-5 pb-8 pt-2 text-white shadow-xl">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2 font-display text-sm uppercase tracking-[0.14em]">
            Home
          </Link>
          <Link href="/designbuild" onClick={() => setOpen(false)} className="block py-2 font-display text-sm uppercase tracking-[0.14em]">
            Custom Design-Build
          </Link>
          {groups.map((g) => (
            <div key={g.title} className="mt-3 border-t border-white/15 pt-3">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/50">{g.title}</p>
              {g.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[15px] text-white/85"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/hire-us"
            onClick={() => setOpen(false)}
            className="mt-5 block border border-white/80 px-5 py-3 text-center font-display text-[13px] uppercase tracking-[0.15em]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
