import type { Metadata } from "next";
import { Jost, Mulish } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { initClientSentry } from "@/lib/sentry.client";
import "./globals.css";

const display = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Custom Home Builder in Bellville, TX | Willmark Custom Homes",
    template: "%s | Willmark Custom Homes",
  },
  description:
    "Willmark Custom Homes builds modern farmhouses, ranch homes, and fully custom homes in Bellville, Brenham, Round Top, and Chappell Hill, TX. Complimentary design services. Get started today.",
};

if (typeof window !== "undefined") {
  initClientSentry();
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          src="https://genesis-web-woad.vercel.app/genesis-feedback.js"
          data-job="36"
          defer
        ></script>
      </body>
    </html>
  );
}
