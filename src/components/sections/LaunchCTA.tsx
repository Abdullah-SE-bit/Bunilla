import { site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
export function LaunchCTA() {
  return <section id="launch" className="launch" aria-labelledby="launch-title"><div className="launch-inner page-width" data-reveal><p className="eyebrow">{site.launch.label}</p><h2 id="launch-title">{site.launch.first}<br /><em>{site.launch.italic}</em></h2><p className="launch-body">{site.launch.body}</p><a className="button button-cream" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.ui.follow}<Arrow /></a><p className="launch-foot">{site.launch.foot}</p><span className="launch-decoration" aria-hidden="true">B</span></div></section>;
}
