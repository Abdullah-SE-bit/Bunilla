import { careers } from "@/data/careers";
import { pageMetadata } from "@/lib/metadata";
import { CareersHero, JobOpenings, HiringContact } from "@/components/sections/Careers";
import { Motion } from "@/components/motion/Motion";
import styles from "./careers.module.css";

export const metadata = pageMetadata(careers.title, careers.description, "/careers");

export default function CareersPage() {
  return <main id="main-content" className={styles.page} tabIndex={-1}>
    <CareersHero /><JobOpenings /><HiringContact /><Motion />
  </main>;
}
