import Image from "next/image";
import { assets, site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
export function Story() {
  return <section id="story" className="story" aria-labelledby="story-title"><div className="story-inner page-width"><figure className="story-figure" data-reveal><div className="story-photo"><div className="depth-image" data-depth><Image src={assets.interior} alt="Warm seating, pendant lights, and a Bunilla feature wall in the brand’s published interior imagery" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" /></div></div><figcaption>{site.story.caption}</figcaption></figure><div className="story-copy" data-reveal><p className="eyebrow">{site.story.label}</p><h2 id="story-title">{site.story.first}<br /><em>{site.story.italic}</em></h2><p>{site.story.body}</p><ul>{site.story.values.map((value, i) => <li key={value}><span>0{i + 1}</span>{value}</li>)}</ul><a className="text-link" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.story.link}<Arrow /></a></div></div></section>;
}
