import type { Metadata } from "next";
import { PhotoSlideshow } from "@/components/photo-slideshow";
import { CtaButton } from "@/components/cta-button";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom Design-Build Home Builder in Texas",
  description:
    "Build your dream home with Willmark’s custom design-build process. Personalized plans, budgeting, and expert construction across Central Texas.",
};

const slides = [
  { src: "/willmark/designbuild/hero-main.jpg", alt: "Large white Willmark home with blue front door and covered porch" },
  { src: "/willmark/designbuild/hero-1.jpg", alt: "Modern house with white and brick exterior by Willmark" },
  { src: "/willmark/designbuild/hero-2.jpg", alt: "Willmark home exterior with landscaped garden" },
];

const steps = [
  { title: "Meet Your Custom Home Builder Team", body: "" },
  { title: "Begin Designing and building your budget", body: "" },
  { title: "Review Design and Budget, Sign Contract", body: "" },
  { title: "Selection Process & Site Preparation", body: "" },
  { title: "Construction", body: "" },
];

const projects = [
  { name: "round top modern manor", href: "/custom-design-project-gallery/the-round-top-manor", img: "/willmark/designbuild/project-round-top-manor.jpg" },
  { name: "the carmine abode", href: "/custom-design-project-gallery/the-carmine-abode", img: "/willmark/designbuild/project-carmine-abode.jpg" },
  { name: "the creekwood farmhouse", href: "/custom-design-project-gallery/the-creekwood-farmhouse", img: "/willmark/designbuild/project-creekwood-farmhouse.jpg" },
];

export default function DesignBuildPage() {
  return (
    <>
      <PhotoSlideshow slides={slides} heightClass="min-h-[64vh] md:min-h-[76vh]">
        <h1 className="max-w-4xl font-display text-[40px] font-light leading-[1.12] tracking-[0.02em] md:text-[56px]">
          A Home That Is Uniquely Yours
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.9] text-white/90">
          Can’t find the perfect plan? We can custom design your new home to fit your style, needs and budget.
        </p>
      </PhotoSlideshow>

      {/* custom design pitch + call CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28 lg:px-8">
        <p className="text-[18px] leading-[2em] text-[#3e3e3e] md:text-[20px]">
          Give us a call to find out more about our custom home process at{" "}
          <a href={CONTACT.phoneHref} className="text-[#231f1c] underline underline-offset-4">
            {CONTACT.phone}
          </a>
        </p>
      </section>

      {/* their 5-step process — numbered rows, distinct from the homepage 4-card grid */}
      <section className="bg-[#f0efee]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28 lg:px-8">
          <h2 className="text-center font-display text-[30px] font-light leading-[1.25] tracking-[0.02em] text-[#231f1c] md:text-[40px]">
            Our Simple,
            <br />
            Custom Home Building Process
          </h2>
          <ol className="mt-14 divide-y divide-[#231f1c]/10 border-y border-[#231f1c]/10">
            {steps.map((s, i) => (
              <li key={s.title} className="flex items-baseline gap-8 py-7">
                <span className="font-display text-[15px] tracking-[0.2em] text-[#999492]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[22px] font-light tracking-[0.02em] text-[#231f1c] md:text-[26px]">
                  {s.title}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* have your own plans CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24 lg:px-8">
        <h2 className="font-display text-[28px] font-light tracking-[0.02em] text-[#231f1c] md:text-[34px]">
          Have your own Plans?
        </h2>
        <p className="mt-5 text-[17px] leading-[1.9] text-[#3e3e3e]">
          We can build off your own architectural plans. Give us a call to find out more! {CONTACT.phone}
        </p>
        <CtaButton href={CONTACT.phoneHref} variant="dark" className="mt-8">
          Call {CONTACT.phone}
        </CtaButton>
      </section>

      {/* 3 project cards */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:pb-32 lg:px-8">
        <h2 className="text-center font-display text-[26px] font-light tracking-[0.02em] text-[#231f1c] md:text-[32px]">
          View a few of our custom home builder projects.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.href} href={p.href} className="group block">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} by Willmark Custom Homes`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 font-display text-[14px] uppercase tracking-[0.16em] text-[#231f1c] group-hover:text-[#999492]">
                {p.name}
              </p>
            </a>
          ))}
        </div>
        <p className="mt-14 text-center text-[13px] leading-relaxed text-[#999492]">
          Our plans and specifications are copyrighted and may not be used without the expressed written
          consent of Willmark Custom Homes, LLC.
        </p>
      </section>
    </>
  );
}
