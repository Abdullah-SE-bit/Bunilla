import Link from "next/link";
import { site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
export default function NotFound() { return <main id="main-content" className="not-found page-width" tabIndex={-1}><p className="eyebrow">{site.notFound.label}</p><h1>{site.notFound.first}<br /><em>{site.notFound.italic}</em></h1><p>{site.notFound.body}</p><Link href="/" className="button button-rose">{site.notFound.cta}<Arrow /></Link></main>; }
