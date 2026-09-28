import Link from "next/link";
import { PhotoSlideshow } from "@/components/photo-slideshow";
import { CtaButton } from "@/components/cta-button";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { processSteps, testimonials, blogPosts } from "@/data/site";

const slides = [
  { src: "/willmark/home/slide-1.jpg", alt: "Willmark Custom Homes — modern farmhouse exterior with covered porch" },
  { src: "/willmark/home/slide-2.jpg", alt: "Willmark Custom Homes — dogtrot great room with leather sofas" },
  { src: "/willmark/home/slide-3.jpg", alt: "Willmark Custom Homes — home with dark siding and stone accents" },
  { src: "/willmark/home/slide-4.jpg", alt: "Willmark Custom Homes — white modern farmhouse with horses in the pasture" },
  { src: "/willmark/home/slide-5.jpg", alt: "Willmark Custom Homes — modern kitchen with white island" },
];

export default function HomePage() {
  return (
    <>
      {/* Band 1 — hero: full-bleed photo slideshow + logo plate, exactly their landing grammar */}
      <PhotoSlideshow slides={slides}>
        <img
          src="/willmark/brand/logo-white.png"
          alt="Willmark Custom Homes"
          className="h-40 w-auto drop-shadow md:h-52"
        />
        <h1 className="mt-10 max-w-4xl font-display text-[44px] font-light leading-[1.1] tracking-[0.02em] md:text-[60px]">
          Custom Modern Farmhouse &amp; Ranch Homes
        </h1>
      </PhotoSlideshow>

      {/* Band 2 — intro statement, their H2 copy verbatim with room to breathe */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center md:py-32 lg:px-8">
        <h2 className="font-display text-[28px] font-light leading-[1.35] tracking-[0.01em] text-[#231f1c] md:text-[36px]">
          Willmark Homes is a turn-key, custom home builder in central Texas with an excellent reputation
          for their master craftsmanship, exceptional service, and timeless designs.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton href="/designbuild" variant="dark">
            Custom Design-Build
          </CtaButton>
          <CtaButton href="/hire-us" variant="light">
            Contact Us
          </CtaButton>
        </div>
      </section>

      {/* Band 3 — full-bleed photo band (their gallery slideshow grammar) */}
      <section className="relative overflow-hidden">
        <img
          src="/willmark/home/band-1.jpg"
          alt="White farmhouse by Willmark Custom Homes with black roof and covered porch"
          className="h-[64vh] w-full object-cover md:h-[80vh]"
        />
        <div className="absolute inset-0 flex items-center bg-black/25">
          <p className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="inline-block max-w-xl bg-white/95 p-8 md:p-10">
              <span className="block font-display text-[26px] font-light leading-[1.3] text-[#231f1c] md:text-[32px]">
                Check out our NEW plans on our Modern Farmhouse and Modern Ranch Pages!
              </span>
              <span className="mt-6 flex flex-wrap gap-4">
                <CtaButton href="/texas-modern-farmhouse-plans" variant="dark">
                  Farmhouse Plans
                </CtaButton>
                <CtaButton href="/modern-ranch-home-plans" variant="dark">
                  Ranch Plans
                </CtaButton>
              </span>
            </span>
          </p>
        </div>
      </section>

      {/* Band 4 — Our Simple Process: 4 numbered steps with photos (their list-section grammar) */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
        <h2 className="text-center font-display text-[36px] font-light tracking-[0.02em] text-[#231f1c] md:text-[48px]">
          Our Simple Process
        </h2>
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.title}>
              <img src={step.image} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <h3 className="mt-6 font-display text-[22px] font-normal tracking-[0.02em] text-[#231f1c]">
                {step.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.9] text-[#3e3e3e]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Band 5 — Homebuyer's Guide CTA (their light divider band with centered heading) */}
      <section className="border-y border-[#231f1c]/10 bg-[#f0efee]">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:py-24 lg:px-8">
          <h2 className="font-display text-[26px] font-light tracking-[0.02em] text-[#231f1c] md:text-[32px]">
            Interested in our Homebuyer’s Guide?
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.9] text-[#3e3e3e]">
            Call us or send a note and we will share everything you need to plan your build.
          </p>
          <CtaButton href="/hire-us" variant="dark" className="mt-8">
            Contact Us
          </CtaButton>
        </div>
      </section>

      {/* Band 6 — testimonials carousel on their light band */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-32 lg:px-8">
        <h2 className="text-center font-display text-[20px] uppercase tracking-[0.25em] text-[#999492]">
          Testimonials
        </h2>
        <div className="mt-12">
          <TestimonialCarousel items={testimonials} />
        </div>
        <p className="mx-auto mt-14 max-w-3xl text-center text-[16px] leading-[1.9] text-[#3e3e3e]">
          We are proud to have a long list of happy homeowners that have had an exceptional experience
          building with Willmark Custom Homes. If you would like a list of our references, give us a call
          or email us and we are more than happy to provide one.
        </p>
      </section>

      {/* Band 7 — blog teaser: titles only this job (no per-post pages yet) */}
      <section className="bg-[#f0efee]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[30px] font-light tracking-[0.02em] text-[#231f1c] md:text-[36px]">
              From the Blog
            </h2>
            <Link href="/blog" className="font-display text-[13px] uppercase tracking-[0.18em] text-[#231f1c] underline underline-offset-8 hover:text-[#999492]">
              Visit the Blog
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-[#231f1c]/10 border-y border-[#231f1c]/10">
            {blogPosts.map((p) => (
              <li key={p.href} className="group flex items-baseline justify-between gap-6 py-5">
                <Link href="/blog" className="text-[17px] leading-relaxed text-[#231f1c] group-hover:text-[#999492] md:text-[19px]">
                  {p.title}
                </Link>
                <span aria-hidden="true" className="hidden text-[#999492] md:block">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
