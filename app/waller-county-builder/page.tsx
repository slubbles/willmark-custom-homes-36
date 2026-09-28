import type { Metadata } from "next";
import { CountyPage, countyMetadata } from "@/components/county-page";

export const metadata: Metadata = countyMetadata("waller-county-builder");

export default function Page() {
  return <CountyPage slug="waller-county-builder" />;
}
