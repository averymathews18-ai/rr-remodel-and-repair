import { site } from "@/lib/site";

/* LocalBusiness (GeneralContractor) JSON-LD.

   HONESTY RULES, do not relax these:
   - No postal address. R&R is a service-area business and we were never
     given a street address; inventing one would also break the GBP match.
   - No openingHours. Never supplied.
   - No aggregateRating / review markup. The exact-match Google listing has
     ZERO reviews. Fabricated ratings are a real penalty and a lie.
   Everything below is traceable to the business card or the owner. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: "R & R Remodel and Repair LLC",
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    description: site.description,
    image: `${site.url}/img/cherry-after--t-900.webp`,
    logo: `${site.url}/img/logo--l-480.webp`,
    // service-area business: no storefront, so areaServed instead of address
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Southwest Florida",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling and repair services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
