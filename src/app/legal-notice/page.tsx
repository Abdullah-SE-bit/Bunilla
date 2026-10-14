import type { Metadata } from "next";
import { site } from "@/data/site";
import { InformationPage } from "@/components/ui/InformationPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Legal notice | Bunilla", site.legal.description, "/legal-notice");
// Business operator, registration details and asset permissions require owner verification.
export default function LegalNotice() { return <InformationPage content={site.legal} />; }
