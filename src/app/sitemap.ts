import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { return site.indexing ? ["", "/privacy", "/legal-notice"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : .3 })) : []; }
