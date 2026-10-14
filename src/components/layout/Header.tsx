"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { Arrow } from "@/components/ui/Arrow";
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const drawer = dialog.current;
    if (!drawer || !open) return;
    const oldOverflow = document.body.style.overflow;
    const opener = trigger.current;
    drawer.showModal();
    document.body.style.overflow = "hidden";
    return () => { drawer.close(); document.body.style.overflow = oldOverflow; opener?.focus(); };
  }, [open]);
  return <>
    <header className="site-header"><div className="header-inner"><BrandMark /><nav className="desktop-nav" aria-label="Main navigation">{site.nav.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav><a className="header-follow" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.ui.follow}<Arrow /></a><button className="menu-trigger" ref={trigger} aria-label={site.ui.menu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><span /><span /></button></div></header>
    <dialog id="mobile-menu" ref={dialog} className="mobile-menu" aria-label="Bunilla navigation" onCancel={() => setOpen(false)} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const items = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }} onClick={event => { if (event.target === event.currentTarget || (event.target instanceof Element && event.target.closest("a"))) setOpen(false); }}><div className="menu-top"><BrandMark /><button className="menu-close" aria-label={site.ui.close} onClick={() => setOpen(false)}>×</button></div><nav aria-label="Mobile navigation">{site.nav.map((link, index) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<Arrow /></Link>)}</nav><a className="button button-rose" href={site.instagram} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{site.ui.follow}<Arrow /></a><p className="eyebrow">{site.area} · {site.status}</p></dialog>
    <noscript><style>{".menu-trigger { display: none !important; }"}</style><nav className="nojs-nav" aria-label="Mobile navigation without JavaScript">{site.nav.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav></noscript>
  </>;
}
