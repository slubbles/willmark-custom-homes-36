import Link from "next/link";
import { CONTACT } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#231f1c] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            {/* White logo on hard dark plate; brand mark as on their live footer */}
            <img src="/willmark/brand/logo-white.png" alt="Willmark Custom Homes" className="h-16 w-auto" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/70">
              Turn-key, custom home builder in central Texas with an excellent reputation for master
              craftsmanship, exceptional service, and timeless designs.
            </p>
            <div className="mt-6 flex gap-4 text-[13px] uppercase tracking-[0.12em]">
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                Facebook
              </a>
              <a href={CONTACT.pinterest} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                Pinterest
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                Instagram
              </a>
            </div>
          </div>

          <FooterCol
            title="Build"
            links={[
              { href: "/designbuild", label: "Custom Design-Build" },
              { href: "/design", label: "Design Center" },
              { href: "/warranty", label: "Warranty" },
              { href: "/blog", label: "Blog" },
            ]}
          />
          <FooterCol
            title="Where We Build"
            links={[
              { href: "/austin-county-builder", label: "Austin County" },
              { href: "/washington-county-builder", label: "Washington County" },
              { href: "/colorado-county-builder", label: "Colorado County" },
              { href: "/fayette-county-builder", label: "Fayette County" },
              { href: "/waller-county-builder", label: "Waller County" },
            ]}
          />
          <div>
            <p className="font-display text-[12px] uppercase tracking-[0.2em] text-white/50">Visit Us</p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              {CONTACT.studio}
              <br />
              {CONTACT.address}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed">
              <a href={CONTACT.phoneHref} className="text-white hover:underline">
                {CONTACT.phone}
              </a>
              <br />
              <a href={`mailto:${CONTACT.email}`} className="break-all text-white hover:underline">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-[12px] tracking-wide text-white/50 lg:px-8">
          WILLMARK HOMES, 101 S BAYLOR ST, BRENHAM, TX — {CONTACT.phone} — {CONTACT.email}
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="font-display text-[12px] uppercase tracking-[0.2em] text-white/50">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[15px] text-white/80 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
