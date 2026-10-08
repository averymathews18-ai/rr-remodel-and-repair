import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { StructuredData } from "@/components/StructuredData";

/* Display serif — crafted, high-end. Pinned to 600, the only weight the
   site actually uses: Fraunces' variable file carries four axes (opsz,
   wght, SOFT, WONK) and costs ~83KB, the static instance a fraction. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
});

/* Clean, highly legible body/UI face. Left variable on purpose — the site
   uses four Inter weights, and one variable file beats four statics. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // every relative URL below resolves against the canonical home in site.ts
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  alternates: { canonical: "/" },
  /* Mirrors (the GitHub Pages copy, any preview host) must never compete
     with the client's own domain in search. They build with
     NEXT_PUBLIC_NOINDEX=true, which keeps the canonical pointing at the
     real site but tells crawlers not to index the copy. */
  robots:
    process.env.NEXT_PUBLIC_NOINDEX === "true"
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} — finished kitchen remodel` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.jpg"],
  },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body>
        {/* Scroll reveals start hidden, so if JS never arrives they must be
            forced visible — this runs before paint, no flash either way. */}
        <noscript>
          <style>{`[data-reveal],[data-stagger]>[data-stagger-item]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <RevealObserver />
        <StructuredData />
      </body>
    </html>
  );
}
