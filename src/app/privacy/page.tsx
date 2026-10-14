import type { Metadata } from "next";
import { site } from "@/data/site";
import { InformationPage } from "@/components/ui/InformationPage";
export const metadata: Metadata = { title: "Privacy information", alternates: { canonical: "/privacy" } };
export default function Privacy() { return <InformationPage content={site.privacy} />; }
