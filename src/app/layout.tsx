import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { RevealObserver } from "@/components/ui/RevealObserver";

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
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://example.com"),
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
      </body>
    </html>
  );
}
