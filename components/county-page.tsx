import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/cta-button";
import { countyPages, serviceCards } from "@/data/site";

export function countyMetadata(slug: string): Metadata {
  const c = countyPages.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.county} Custom Home Builder`,
    description: `${c.county} custom home builder creating modern farmhouses, ranch homes, and fully custom designs with quality craftsmanship and service.`,
  };
}

export function CountyPage({ slug }: { slug: string }) {
  const c = countyPages.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      {/* County hero — light treatment with side photo, distinct from home/designbuild dark heroes */}
      <section className="grid border-b border-[#231f1c]/10 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 md:py-28 lg:px-16">
          <p className="font-display text-[13px] uppercase tracking-[0.25em] text-[#999492]">
            {c.county} Custom
          </p>
          <h1 className="mt-4 font-display text-[40px] font-light leading-[1.15] tracking-[0.02em] text-[#231f1c] md:text-[52px]">
            {c.county} {c.kicker}
          </h1>
          <p className="mt-4 font-display text-[16px] uppercase tracking-[0.14em] text-[#999492]">{c.towns}</p>
          <p className="mt-8 max-w-xl text-[17px] leading-[2] text-[#3e3e3e]">{c.intro}</p>
          <ul className="mt-8 space-y-3">
            {c.bullets.map(([bold, rest]) => (
              <li key={bold} className="text-[16px] leading-[1.8] text-[#3e3e3e]">
                <strong className="font-semibold text-[#231f1c]">{bold}</strong> {rest}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/hire-us" variant="dark">
              Build in {c.county}
            </CtaButton>
          </div>
        </div>
        <img src={c.hero} alt={`Custom home by Willmark in ${c.county}, Texas`} className="h-72 w-full object-cover lg:h-full" />
      </section>

      {/* services — same 3 service cards they show on every county page, horizontal band grammar */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <h2 className="text-center font-display text-[28px] font-light tracking-[0.02em] text-[#231f1c] md:text-[36px]">
          Willmark Custom Homes Services
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {serviceCards.map((s) => (
            <article key={s.title} className="flex flex-col border-t-2 border-[#999492] pt-8">
              <h3 className="font-display text-[22px] font-normal tracking-[0.02em] text-[#231f1c]">{s.title}</h3>
              <p className="mt-4 flex-1 text-[16px] leading-[1.9] text-[#3e3e3e]">{s.body}</p>
              <a
                href={s.href}
                className="mt-6 inline-block font-display text-[13px] uppercase tracking-[0.18em] text-[#231f1c] underline underline-offset-8 hover:text-[#999492]"
              >
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f0efee]">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:py-24 lg:px-8">
          <h2 className="font-display text-[26px] font-light tracking-[0.02em] text-[#231f1c] md:text-[32px]">
            Ready to build in {c.county}?
          </h2>
          <CtaButton href="/hire-us" variant="dark" className="mt-8">
            Contact Us
          </CtaButton>
        </div>
      </section>
    </>
  );
}
