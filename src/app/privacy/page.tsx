import type { Metadata } from "next";
import { site } from "@/data/site";
import { InformationPage } from "@/components/ui/InformationPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Privacy information | Bunilla", site.privacy.description, "/privacy");
export default function Privacy() { return <InformationPage content={site.privacy} />; }
