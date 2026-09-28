import type { Metadata } from "next";
import { CountyPage, countyMetadata } from "@/components/county-page";

export const metadata: Metadata = countyMetadata("fayette-county-builder");

export default function Page() {
  return <CountyPage slug="fayette-county-builder" />;
}
