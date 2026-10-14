import Link from "next/link";
import { site } from "@/data/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { Arrow } from "@/components/ui/Arrow";
export function Footer() {
  return <footer id="find-us" className="footer"><div className="footer-main page-width"><div className="footer-brand"><BrandMark large /><p className="whitespace-pre-line">{site.footer.statement}</p></div><div><p className="eyebrow">{site.footer.explore}</p><nav aria-label="Footer navigation">{site.nav.slice(1).map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></div><div className="footer-contact"><p className="eyebrow">{site.footer.connect}</p><p>{site.footer.location}</p><p className="small-copy">{site.footer.locationNote}</p><a href={`mailto:${site.email}`}>{site.email}<Arrow /></a><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.handle}<Arrow /></a></div></div><div className="footer-bottom page-width"><span>{site.footer.copyright}</span><div><Link href="/privacy">{site.ui.privacy}</Link><Link href="/legal-notice">{site.ui.legal}</Link></div>{site.preview && <span className="concept-note">{site.ui.preview}</span>}</div></footer>;
}
