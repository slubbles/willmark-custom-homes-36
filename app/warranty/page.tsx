import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Warranty",
  description: "Willmark Homes Warranty Form",
};

export default function WarrantyPage() {
  return (
    <>
      {/* photo band */}
      <section className="relative">
        <img
          src="/willmark/warranty/hero.jpg"
          alt="Willmark Custom Homes farmhouse exterior"
          className="h-[42vh] w-full object-cover md:h-[54vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <h1 className="px-6 text-center font-display text-[44px] font-light tracking-[0.02em] text-white md:text-[60px]">
            Warranty
          </h1>
        </div>
      </section>

      {/* warranty form — split layout distinct from /hire-us */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-[28px] font-light leading-[1.3] tracking-[0.02em] text-[#231f1c] md:text-[34px]">
            Willmark Homes Warranty Form
          </h2>
          <p className="mt-8 text-[17px] leading-[2] text-[#3e3e3e]">
            Please complete the form below and we will be in contact as quickly as possible to get your items
            taken care of. If you have any photos you would like to submit of your warranty items, please send
            them to{" "}
            <a href="mailto:willmarkhomes@gmail.com" className="text-[#231f1c] underline underline-offset-4">
              willmarkhomes@gmail.com
            </a>{" "}
            along with your name and phone number. Thank you for trusting your Willmark team!
          </p>
        </div>
        <div className="max-w-2xl">
          <LeadForm form="warranty" successText="Thank you!" />
        </div>
      </section>
    </>
  );
}
