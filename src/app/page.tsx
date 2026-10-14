import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Offerings } from "@/components/sections/Offerings";
import { Story } from "@/components/sections/Story";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { LaunchCTA } from "@/components/sections/LaunchCTA";
import { Motion } from "@/components/motion/Motion";
import { HiringAnnouncement } from "@/components/sections/HiringAnnouncement";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata(site.title, site.description, "/");
export default function Home() { return <main id="main-content" tabIndex={-1}><Hero /><Experience /><Offerings /><Story /><Atmosphere /><HiringAnnouncement /><LaunchCTA /><Motion /></main>; }
