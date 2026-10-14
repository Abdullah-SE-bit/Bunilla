import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title }, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: site.name, locale: "en_PK" },
    twitter: { card: "summary_large_image", title, description },
  };
}
