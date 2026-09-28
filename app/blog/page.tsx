import type { Metadata } from "next";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom Homes Blog",
  description:
    "Check out the latest tips and news from Willmark Custom Homes for your next custom home build from experts in new home construction.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#231f1c] px-5 pb-16 pt-20 text-center text-white md:pb-20 md:pt-28 lg:px-8">
        <h1 className="font-display text-[44px] font-light tracking-[0.1em] md:text-[56px]">BLOG</h1>
        <p className="mt-4 text-[15px] uppercase tracking-[0.2em] text-white/60">
          News &amp; notes from the Willmark team
        </p>
      </section>

      {/* Index of titles only this job — per-post pages are backlogged, so each entry links to the
          live post on their current site. */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24 lg:px-8">
        <ul className="divide-y divide-[#231f1c]/10 border-y border-[#231f1c]/10">
          {blogPosts.map((p) => (
            <li key={p.href}>
              <a
                href={`https://www.willmarkhomes.com${p.href}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 py-7"
              >
                <span className="text-[19px] leading-[1.7] text-[#231f1c] group-hover:text-[#999492] md:text-[23px] md:font-light">
                  {p.title}
                </span>
                <span aria-hidden="true" className="text-[#999492]">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
