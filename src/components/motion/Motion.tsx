"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // No opacity zero: core server-rendered content remains readable throughout.
      gsap.from("[data-hero-line]", { y: 22, opacity: .75, duration: .85, stagger: .08, ease: "power3.out", clearProps: "all" });
      gsap.from(".hero-visual", { y: 18, rotation: 1.3, duration: 1.1, ease: "power3.out", clearProps: "all" });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(element => {
        gsap.from(element, { y: 24, opacity: .7, duration: .8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 91%", once: true }, clearProps: "all" });
      });
      // Careers uses the existing motion system with a short, grouped job stagger.
      gsap.utils.toArray<HTMLElement>("[data-job-list]").forEach(list => {
        gsap.from(list.querySelectorAll("[data-job-card]"), {
          y: 18, opacity: .75, duration: .65, stagger: .08, ease: "power3.out",
          scrollTrigger: { trigger: list, start: "top 91%", once: true }, clearProps: "all",
        });
      });
    });
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-depth]").forEach(element => {
        gsap.fromTo(element, { yPercent: -2 }, { yPercent: 2, ease: "none", scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
    });
    return () => media.revert();
  }, []);
  return null;
}
