import type { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Partner with our design team to personalize finishes, layouts, and farmhouse details that make your custom home uniquely yours.",
};

const ourWork = [
  { src: "/willmark/design/work-kitchen-granite.jpg", alt: "Modern kitchen with white cabinetry and black granite island" },
  { src: "/willmark/design/work-living-room.jpg", alt: "Living room with white walls and large windows" },
  { src: "/willmark/design/work-kitchen-dining.jpg", alt: "Kitchen and dining area with rustic wooden table" },
  { src: "/willmark/design/work-living-brick.jpg", alt: "Living room with black-framed glass doors and brick fireplace" },
  { src: "/willmark/design/work-kitchen-navy.jpg", alt: "Open-concept kitchen with navy island and gold barstools" },
  { src: "/willmark/design/work-living-brick.jpg", alt: "Interior with built-in shelves and decor" },
];

export default function DesignPage() {
  return (
    <>
      {/* dark hero band with the 1870 building photo */}
      <section className="relative bg-[#231f1c]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-20 text-white md:py-28 lg:px-16">
            <div className="max-w-xl">
              <h1 className="font-display text-[44px] font-light leading-[1.12] tracking-[0.02em] md:text-[56px]">
                Design Center
              </h1>
              <h2 className="mt-6 font-display text-[18px] uppercase tracking-[0.2em] text-[#c9c5c3]">
                Complimentary Design Services
              </h2>
              <p className="mt-8 text-[17px] leading-[2] text-white/85">
                Building your dream home is an exciting journey, and we’re here to make it seamless and
                enjoyable. At Willmark Custom Homes, we believe your home should be as unique as you are.
                That’s why we include complimentary design services with every home we build. You will work
                with an experienced design professional to personalize every detail of your new home. From
                selecting finishes and fixtures to customizing layouts, we guide you through the process with
                expertise and creativity. Your dream home deserves personal touches, and we’re here to make it
                happen.
              </p>
              <p className="mt-6 text-[17px] leading-[2] text-white/85">
                Our designers work with you during the entire homebuilding process from start to finish saving
                you tens of thousands of dollars. Design and construction go hand-in-hand and our design
                services ensure that the builder and designer collaborate seamlessly reducing miscommunication
                that can lead to costly delays or errors. Our design services focus on designing within your
                budget and we prioritize features and finishes to achieve the look you want without
                overspending. We also welcome the opportunity to work with other design professionals if you
                choose to hire someone for your project.
              </p>
            </div>
          </div>
          <img
            src="/willmark/design/design-center-building.jpg"
            alt="Willmark Custom Homes Design Center — three-story historic building in Downtown Brenham"
            className="h-full max-h-[720px] w-full object-cover"
          />
        </div>
      </section>

      {/* 1870 building story — light band with historic photo */}
      <section className="bg-[#f0efee]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <img
            src="/willmark/design/design-center-historic.jpg"
            alt="Historic photo of the two-story corner building that houses the Willmark Design Center"
            className="w-full max-w-md object-cover shadow-lg"
            loading="lazy"
          />
          <div className="max-w-2xl">
            <p className="text-[17px] leading-[2] text-[#3e3e3e] md:text-[19px]">
              Located in the heart of Downtown Brenham, our historical building serves as our Design Center
              and Headquarters. Built in 1870, this beautiful building creates the perfect atmosphere to
              design a timeless home of your own.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href={CONTACT.phoneHref} variant="dark">
                Call {CONTACT.phone}
              </CtaButton>
              <CtaButton href="/hire-us" variant="light">
                Contact Us
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* design studio samples strip */}
      <section className="mx-auto max-w-7xl px-5 pt-20 md:pt-28 lg:px-8">
        <h2 className="text-center font-display text-[26px] font-light tracking-[0.02em] text-[#231f1c] md:text-[32px]">
          Choose From Our Studio Samples
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            ["/willmark/design/samples-flooring.jpg", "Hardwood flooring samples and kitchen fixtures in the showroom"],
            ["/willmark/design/samples-tile.jpg", "Tile sample display with rustic brick wall"],
            ["/willmark/design/samples-decorative-tile.jpg", "Decorative tiles in blue and gray patterns"],
            ["/willmark/design/samples-shelves.jpg", "Shelves of hexagon, square, and patterned tiles"],
            ["/willmark/design/samples-paint.jpg", "Cabinetry paint colors, hardware samples, and paint swatches"],
          ].map(([src, alt]) => (
            <img key={src} src={src} alt={alt} className="aspect-square w-full object-cover" loading="lazy" />
          ))}
        </div>
      </section>

      {/* our work grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <h2 className="text-center font-display text-[26px] font-light tracking-[0.02em] text-[#231f1c] md:text-[32px]">
          Our Work
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {ourWork.map((w, i) => (
            <img
              key={`${w.src}-${i}`}
              src={w.src}
              alt={w.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </>
  );
}
