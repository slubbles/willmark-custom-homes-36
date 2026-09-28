import Link from "next/link";

/** Uppercase Futura-style button, exact grammar of their live CTAs. */
export function CtaButton({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline-light";
  className?: string;
}) {
  const styles = {
    dark: "bg-[#231f1c] text-white hover:bg-[#3a3430]",
    light: "bg-[#999492] text-white hover:bg-[#7f7a78]",
    "outline-light": "border border-white/80 text-white hover:bg-white hover:text-[#231f1c]",
  }[variant];
  const external = href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `inline-block px-8 py-4 font-display text-[13px] uppercase tracking-[0.18em] transition-colors ${styles} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
