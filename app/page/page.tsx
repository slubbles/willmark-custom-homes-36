import type { Metadata } from "next";
import { PhotoSlideshow } from "@/components/photo-slideshow";
import { CtaButton } from "@/components/cta-button";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom Home Builder in Bellville, TX",
  description:
    "Willmark Custom Homes builds modern farmhouses, ranch homes, and fully custom homes in Bellville, Brenham, Round Top, and Chappell Hill, TX. Complimentary design services. Get started today.",
};

export default function PageRoute() {
  return (
    <>
      {/* /page on their sitemap is the process-focused landing route. Unique treatment here:
          photo hero + accordion steps (differs from home's 4-card grid and designbuild's numbered rows). */}
      <PhotoSlideshow
        slides={[
          { src: "/willmark/home/band-2.jpg", alt: "Willmark home on Meyersville Road at dusk" },
          { src: "/willmark/home/band-4.jpg", alt: "Guest house porch with rocking chairs by Willmark" },
        ]}
        heightClass="min-h-[56vh] md:min-h-[68vh]"
      >
        <h1 className="max-w-4xl font-display text-[40px] font-light leading-[1.12] tracking-[0.02em] md:text-[54px]">
          Building Your Home, Step by Step
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-white/90">
          Willmark Homes is a turn-key, custom home builder in central Texas with an excellent reputation for
          their master craftsmanship, exceptional service, and timeless designs.
        </p>
      </PhotoSlideshow>

      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28 lg:px-8">
        <h2 className="text-center font-display text-[30px] font-light tracking-[0.02em] text-[#231f1c] md:text-[38px]">
          Our Simple Process
        </h2>
        <div className="mt-12 divide-y divide-[#231f1c]/10 border-y border-[#231f1c]/10">
          {processSteps.map((s) => (
            <details key={s.title} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-[22px] font-light tracking-[0.02em] text-[#231f1c] md:text-[26px]">
                  {s.title}
                </span>
                <span aria-hidden="true" className="text-[26px] font-light text-[#999492] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-3xl text-[16px] leading-[1.9] text-[#3e3e3e]">{s.body}</p>
            </details>
          ))}
        </div>
        <div className="mt-14 text-center">
          <CtaButton href="/hire-us" variant="dark">
            Get Started
          </CtaButton>
        </div>
      </section>

      <section className="relative">
        <img
          src="/willmark/home/band-3.jpg"
          alt="Stone House exterior by Willmark Custom Homes"
          className="h-[52vh] w-full object-cover md:h-[64vh]"
          loading="lazy"
        />
      </section>
    </>
  );
}
