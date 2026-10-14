import Image from "next/image";
import { assets, site } from "@/data/site";
import { careers, whatsappLink } from "@/data/careers";
import { Arrow } from "@/components/ui/Arrow";
import styles from "@/app/careers/careers.module.css";

export function CareersHero() {
  return <section className={`${styles.hero} page-width`} aria-labelledby="careers-title">
    <div className={styles.heroCopy}>
      <p className="eyebrow status" data-hero-line><span className="status-dot" />{careers.hero.label}</p>
      <h1 id="careers-title"><span data-hero-line>{careers.hero.first}</span>{" "}<em data-hero-line>{careers.hero.italic}</em></h1>
      <p className={styles.heroBody} data-hero-line>{careers.hero.body}</p>
      <a className="button button-rose" href="#open-positions" data-hero-line>{careers.hero.cta}<Arrow down /></a>
      <p className={`${styles.location} eyebrow`}>{site.area}</p>
    </div>
    <figure className={`${styles.heroVisual} hero-visual`}>
      <div className={styles.heroPhoto}><Image src={assets.cups} alt={careers.hero.photoAlt} fill priority sizes="(max-width: 767px) 88vw, 40vw" className="object-cover" /></div>
      <figcaption>{careers.hero.caption}</figcaption>
    </figure>
  </section>;
}

export function JobOpenings() {
  return <section id="open-positions" className={styles.openings} aria-labelledby="openings-title">
    <div className={`${styles.openingsHeader} page-width`} data-reveal>
      <div><p className="eyebrow">{careers.openings.label}</p><h2 id="openings-title">{careers.openings.title}<br /><em>{careers.openings.italic}</em></h2></div>
      <p>{careers.openings.body}</p>
    </div>
    {careers.categories.map(category => <section key={category.id} className={`${styles.group} ${category.id === "kitchen" ? styles.kitchen : styles.women}`} aria-labelledby={`${category.id}-title`}>
      <div className={`${styles.groupInner} page-width`}>
        <div className={styles.groupIntro} data-reveal><span className={styles.groupNumber} aria-hidden="true">{category.number}</span><h3 id={`${category.id}-title`}>{category.label}</h3><p>{category.intro}</p><span className={styles.groupRule} /></div>
        <div className={styles.jobs} data-job-list>
          {category.roles.map((role, index) => <article key={role.id} className={styles.job} aria-labelledby={`${role.id}-title`} data-job-card>
            <span className={`${styles.jobIndex} eyebrow`} aria-hidden="true">0{index + 1}</span>
            <div className={styles.jobDetails}>
              <p className="eyebrow">{category.label}</p>
              <h4 id={`${role.id}-title`}>{role.title}</h4>
              {role.detail && <p className={styles.specialization}>{role.detail}</p>}
              <p className={styles.jobLocation}>{site.area}</p>
              <a className={`text-link ${styles.apply}`} href={whatsappLink(role.message)} target="_blank" rel="noopener noreferrer" aria-label={`${careers.apply} for ${role.title}`}>{careers.apply}<Arrow /></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>)}
  </section>;
}

export function HiringContact() {
  return <section className={`${styles.contact} page-width`} aria-labelledby="hiring-contact-title" data-reveal>
    <div><p className="eyebrow">{careers.contact.label}</p><h2 id="hiring-contact-title">{careers.contact.title}</h2><p className={styles.contactBody}>{careers.contact.body}</p></div>
    <div className={styles.contactNumber}>
      <p className="eyebrow">{careers.contact.numberLabel}</p>
      <p className={styles.phone}>{careers.displayNumber}</p>
      <p className={styles.contactHint}>{careers.contact.hint}</p>
      <a className="button button-rose" href={whatsappLink(careers.contact.message)} target="_blank" rel="noopener noreferrer">{careers.contact.cta}<Arrow /></a>
      <p className={styles.contactHint}>{careers.contact.note}</p>
    </div>
  </section>;
}
