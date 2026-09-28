import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact us at Willmark Homes—let’s bring your dream home to life with expert craftsmanship and personalized service.",
};

const counties = ["Austin", "Washington", "Colorado", "Fayette", "Waller", "Lee", "South Grimes", "North Lavaca", "Burleson"];

export default function HireUsPage() {
  return (
    <>
      <section className="bg-[#231f1c] px-5 pb-20 pt-20 text-center text-white md:pb-24 md:pt-28 lg:px-8">
        <h1 className="mx-auto max-w-4xl font-display text-[44px] font-light leading-[1.12] tracking-[0.02em] md:text-[60px]">
          Let’s get started on your new home!
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div className="max-w-2xl">
          <LeadForm form="contact" successText="Thank you!" />
        </div>

        <aside className="space-y-10">
          <div className="bg-[#f0efee] p-8">
            <h2 className="font-display text-[20px] font-normal uppercase tracking-[0.14em] text-[#231f1c]">
              {CONTACT.studio}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[#3e3e3e]">
              {CONTACT.address}
              <br />
              <a href={CONTACT.phoneHref} className="mt-2 inline-block text-[#231f1c] underline underline-offset-4">
                {CONTACT.phone}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-[20px] font-normal uppercase tracking-[0.14em] text-[#231f1c]">
              Our Territory
            </h2>
            <p className="mt-4 text-[16px] leading-[1.9] text-[#3e3e3e]">
              Our territory reaches the following counties: {counties.join(", ")}. If you are interested in a
              Homebuyer’s Guide or building in one of the surrounding counties outside of our territory, give
              us a call to find out more.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
