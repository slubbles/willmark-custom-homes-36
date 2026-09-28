import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center lg:px-8">
      <h1 className="font-display text-[40px] font-light tracking-[0.02em] text-[#231f1c] md:text-[52px]">
        Page Not Found
      </h1>
      <p className="mt-6 text-[17px] leading-[1.9] text-[#3e3e3e]">
        The page you are looking for may have moved. Start here, or give us a call.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-block bg-[#231f1c] px-8 py-4 font-display text-[13px] uppercase tracking-[0.18em] text-white hover:bg-[#3a3430]"
        >
          Home
        </Link>
        <Link
          href="/hire-us"
          className="inline-block bg-[#999492] px-8 py-4 font-display text-[13px] uppercase tracking-[0.18em] text-white hover:bg-[#7f7a78]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
