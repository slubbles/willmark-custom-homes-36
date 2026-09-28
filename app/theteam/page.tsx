import type { Metadata } from "next";
import { team, teamIntro, CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the team at Willmark Homes—dedicated professionals committed to delivering your dream custom home with excellence.",
};

export default function TeamPage() {
  return (
    <>
      {/* intro band — dark plate, their long about paragraph verbatim with room to breathe */}
      <section className="bg-[#231f1c] px-5 pb-24 pt-20 text-white md:pb-32 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-[44px] font-light leading-[1.12] tracking-[0.02em] md:text-[60px]">
            Meet Our Team
          </h1>
          <p className="mt-10 text-[17px] leading-[2] text-white/85 md:text-[19px]">{teamIntro}</p>
          <a
            href={CONTACT.phoneHref}
            className="mt-10 inline-block border border-white/80 px-8 py-4 font-display text-[13px] uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-[#231f1c]"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* bios grid — 8 members, 2-col like their live list layout */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="grid grid-cols-[minmax(0,1fr)] items-start gap-0 sm:grid-cols-[240px_1fr]">
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} at Willmark Custom Homes`}
                className="aspect-[2/3] w-full object-cover"
                loading="lazy"
              />
              <div className="bg-[#f0efee] p-7 sm:ml-[-40px] sm:mt-10 sm:bg-white/95 sm:p-8 sm:shadow-lg sm:ring-1 sm:ring-black/5">
                <h2 className="font-display text-[24px] font-normal tracking-[0.02em] text-[#231f1c]">{m.name}</h2>
                <p className="mt-3 font-display text-[13px] uppercase tracking-[0.18em] text-[#999492]">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
