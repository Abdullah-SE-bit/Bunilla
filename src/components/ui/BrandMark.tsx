import Image from "next/image";
import Link from "next/link";
import { assets, site } from "@/data/site";
export function BrandMark({ large = false }: { large?: boolean }) {
  return <Link href="/#home" className={`brand-mark ${large ? "brand-mark-large" : ""}`} aria-label={`${site.name} home`}><Image src={assets.wordmark} width={624} height={166} alt="Bunilla Bakery & Coffee Shop" className="brand-art" />{large && <Image src={assets.logo} width={90} height={90} alt="Original square Bunilla logo artwork" className="original-logo" />}</Link>;
}
