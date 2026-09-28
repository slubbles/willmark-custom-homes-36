import type { Metadata } from "next";
import { CountyPage, countyMetadata } from "@/components/county-page";

export const metadata: Metadata = countyMetadata("austin-county-builder");

export default function Page() {
  return <CountyPage slug="austin-county-builder" />;
}
