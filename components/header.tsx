import Link from "next/link";
import { CONTACT } from "@/data/site";

const planLinks = [
  { href: "/texas-modern-farmhouse-plans", label: "Texas Modern Farmhouse Plans" },
  { href: "/modern-ranch-home-plans", label: "Modern Ranch Plans" },
  { href: "/custom-design-project-gallery", label: "Custom Design-Build Project Gallery" },
  { href: "/texas-modern-farmhouse-gallery", label: "Texas Modern Farmhouse Gallery" },
  { href: "/modern-ranch-gallery", label: "Modern Ranch Gallery" },
];

const areaLinks = [
  { href: "/austin-county-builder", label: "Austin County" },
  { href: "/washington-county-builder", label: "Washington County" },
  { href: "/colorado-county-builder", label: "Colorado County" },
  { href: "/fayette-county-builder", label: "Fayette County" },
  { href: "/waller-county-builder", label: "Waller County" },
];

const aboutLinks = [
  { href: "/theteam", label: "The Team" },
  { href: "/design", label: "Design" },
  { href: "/warranty", label: "Warranty" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#231f1c] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Link href="/" aria-label="Willmark Custom Homes — Home" className="flex items-center py-1">
          {/* Their logo sits on the dark header plate exactly as on their live site */}
          <img
            src="/willmark/brand/logo-white.png"
            alt="Willmark Custom Homes"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          <NavLink href="/designbuild">Custom Design-Build</NavLink>
          <div className="group relative">
            <NavLink href="/texas-modern-farmhouse-plans">Plans &amp; Galleries</NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 bg-white p-4 shadow-xl ring-1 ring-black/5">
                {planLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-3 py-2 font-display text-[13px] tracking-[0.08em] text-[#231f1c] hover:bg-[#f0efee]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative">
            <NavLink href="/austin-county-builder">Where We Build</NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-60 bg-white p-4 shadow-xl ring-1 ring-black/5">
                {areaLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-3 py-2 font-display text-[13px] tracking-[0.08em] text-[#231f1c] hover:bg-[#f0efee]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative">
            <NavLink href="/theteam">About</NavLink>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-52 bg-white p-4 shadow-xl ring-1 ring-black/5">
                {aboutLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-3 py-2 font-display text-[13px] tracking-[0.08em] text-[#231f1c] hover:bg-[#f0efee]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/hire-us"
            className="border border-white/80 px-5 py-2.5 font-display text-[13px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#231f1c]"
          >
            Contact Us
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-display text-[13px] uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

import { MobileNav } from "./mobile-nav";
