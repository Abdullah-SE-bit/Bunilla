import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Offerings } from "@/components/sections/Offerings";
import { Story } from "@/components/sections/Story";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { LaunchCTA } from "@/components/sections/LaunchCTA";
import { Motion } from "@/components/motion/Motion";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() { return <main id="main-content" tabIndex={-1}><Hero /><Experience /><Offerings /><Story /><Atmosphere /><LaunchCTA /><Motion /></main>; }
