import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
const display = localFont({ src: [{ path: "../fonts/cormorant-normal.woff2", weight: "300 700", style: "normal" }, { path: "../fonts/cormorant-italic.woff2", weight: "300 700", style: "italic" }], variable: "--font-display", display: "swap" });
const body = localFont({ src: "../fonts/raleway-normal.woff2", weight: "100 900", variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Bunilla" }, description: site.description,
  robots: { index: site.indexing, follow: site.indexing },
  openGraph: { title: site.title, description: site.description, type: "website", siteName: site.preview ? "Bunilla design concept" : site.name, locale: "en_PK" },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main-content">{site.ui.skip}</a><Header />{children}<Footer /></body></html>;
}
