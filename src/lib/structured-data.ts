import { site } from "@/data/site";
import { SITE_URL } from "@/lib/seo";

/**
 * Données structurées schema.org, générées depuis `site.ts` pour rester
 * cohérentes avec ce qui est affiché à l'écran.
 *
 * Volontairement absent : `aggregateRating`. La note 4,5/28 provient de Google,
 * pas d'avis hébergés sur ce site — la baliser ici serait un avis auto-attribué,
 * ce que les consignes de Google interdisent. Elle est affichée visuellement,
 * avec un lien vers la fiche Google.
 */

const DAY_URI: Record<number, string> = {
  0: "https://schema.org/Sunday",
  1: "https://schema.org/Monday",
  2: "https://schema.org/Tuesday",
  3: "https://schema.org/Wednesday",
  4: "https://schema.org/Thursday",
  5: "https://schema.org/Friday",
  6: "https://schema.org/Saturday",
};

const openingHours = site.hours.flatMap((entry) =>
  entry.slots.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_URI[entry.dayIndex],
    opens: slot.start,
    closes: slot.end,
  })),
);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress:
    "Lot n°1, Lotissement Les Jardins de Massignon 2, Av. Patrice Lumumba, Ville Verte",
  addressLocality: "Bouskoura",
  postalCode: "27182",
  addressCountry: "MA",
};

const sameAs = [site.social.instagram, site.social.facebook, site.social.youtube];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "SportsActivityLocation"],
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      alternateName: "Broadway Studio Bouskoura",
      description:
        "Centre artistique et sportif à Ville Verte, Bouskoura : musique, chant, danse, gymnastique, arts martiaux, arts plastiques, théâtre, échecs et fitness.",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.png`,
      email: site.email,
      telephone: site.phones.map((phone) => phone.replace(/\s/g, "")),
      foundingDate: String(site.since),
      address: postalAddress,
      areaServed: ["Bouskoura", "Ville Verte", "Casablanca"],
      sameAs,
      openingHoursSpecification: openingHours,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: site.name,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/favicon.png`,
      email: site.email,
      telephone: site.phones[0]?.replace(/\s/g, ""),
      address: postalAddress,
      sameAs,
      openingHoursSpecification: openingHours,
      hasMap: site.mapsUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: site.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const organizationJsonLdString = JSON.stringify(organizationJsonLd);
