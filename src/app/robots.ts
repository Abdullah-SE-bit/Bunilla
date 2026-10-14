import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", ...(site.indexing ? { allow: "/" } : { disallow: "/" }) }, ...(site.indexing ? { sitemap: `${site.url}/sitemap.xml` } : {}) }; }
