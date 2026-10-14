import Link from "next/link";
import { site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";

export function HiringAnnouncement() {
  return <section className="hiring-announcement page-width" aria-labelledby="hiring-title" data-reveal>
    <p className="eyebrow">{site.hiring.label}</p>
    <div><h2 id="hiring-title">{site.hiring.title}</h2><p>{site.hiring.body}</p></div>
    <Link className="text-link" href="/careers">{site.hiring.cta}<Arrow /></Link>
  </section>;
}
