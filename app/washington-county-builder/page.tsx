import type { Metadata } from "next";
import { CountyPage, countyMetadata } from "@/components/county-page";

export const metadata: Metadata = countyMetadata("washington-county-builder");

export default function Page() {
  return <CountyPage slug="washington-county-builder" />;
}
