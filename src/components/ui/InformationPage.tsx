import Link from "next/link";
import { site } from "@/data/site";
import { Arrow } from "./Arrow";
type Information = { title: string; label: string; intro: string; review: string; sections: readonly { title: string; body: string }[] };
export function InformationPage({ content }: { content: Information }) {
  return <main id="main-content" className="information page-width" tabIndex={-1}><Link href="/" className="text-link">{site.ui.back}<Arrow /></Link><p className="eyebrow">{content.label}</p><h1>{content.title}</h1><p className="information-intro">{content.intro}</p><p className="review-note">{content.review}</p><div className="information-sections">{content.sections.map((section, i) => <section key={section.title}><span className="eyebrow">0{i + 1}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></section>)}</div><a className="text-link" href={`mailto:${site.email}`}>{site.ui.email}<Arrow /></a></main>;
}
