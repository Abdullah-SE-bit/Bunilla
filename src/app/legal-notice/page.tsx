import type { Metadata } from "next";
import { site } from "@/data/site";
import { InformationPage } from "@/components/ui/InformationPage";
export const metadata: Metadata = { title: "Legal notice", alternates: { canonical: "/legal-notice" } };
// Business operator, registration details and asset permissions require owner verification.
export default function LegalNotice() { return <InformationPage content={site.legal} />; }
