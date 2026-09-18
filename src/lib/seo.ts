/**
 * Métadonnées SEO centralisées.
 * Les chemins reprennent exactement les URL déjà indexées par Google sur bstudio.ma :
 * ne jamais renommer une clé de ce tableau sans mettre en place une redirection 301.
 */

export const SITE_URL = "https://bstudio.ma";
export const OG_IMAGE = `${SITE_URL}/og-broadway-studio.jpg`;

type PageMeta = { title: string; description: string };

export const pageMeta = {
  "/": {
    title: "Broadway Studio — École d’art et de sport à Bouskoura",
    description:
      "Centre artistique et sportif à Ville Verte, Bouskoura. Musique, chant, danse, gymnastique, arts martiaux, théâtre et fitness pour enfants, ados et adultes.",
  },
  "/qui-sommes-nous": {
    title: "Le Studio — Broadway Studio, Ville Verte Bouskoura",
    description:
      "Centre d’éveil artistique et sportif de la Ville Verte depuis 2022. Une équipe pédagogique qualifiée et un lieu conçu autour des activités artistiques.",
  },
  "/musique": {
    title: "Cours de musique à Bouskoura — Piano, guitare, batterie",
    description:
      "Cours de piano sur piano acoustique, guitare et batterie à Ville Verte, Bouskoura. Cours individuels sur réservation de créneau, enfants et adultes.",
  },
  "/chant": {
    title: "Cours de chant à Bouskoura — Chant moderne et chorale",
    description:
      "Technique vocale, interprétation et improvisation. Chant moderne dès 9 ans et chorale orientale adultes, en français et en anglais, à Bouskoura.",
  },
  "/danse": {
    title: "Cours de danse à Bouskoura — Classique, hip-hop, afro",
    description:
      "Éveil dès 3 ans, danse classique, ballet, contemporain, hip-hop, urban flow, afro et danse orientale à Ville Verte, Bouskoura. Enfants, ados et adultes.",
  },
  "/gymnastique": {
    title: "Gymnastique à Bouskoura — Sportive et rythmique",
    description:
      "Gymnastique sportive et gymnastique rythmique dès 3 ans à Ville Verte, Bouskoura. Enseignante diplômée, ancienne membre de l’équipe nationale d’Ukraine.",
  },
  "/arts-martiaux": {
    title: "Arts martiaux à Bouskoura — Judo, aïkido, kick-boxing",
    description:
      "Judo dès 3 ans avec le baby judo, aïkido et kick-boxing à Ville Verte, Bouskoura. Discipline, confiance en soi et progression encadrée.",
  },
  "/arts-plastiques": {
    title: "Arts plastiques à Bouskoura — Dessin, peinture, BD",
    description:
      "Dessin académique, peinture, urban art, arts & créations et atelier BD & mangas en petits groupes, avec coaching individualisé, à Bouskoura.",
  },
  "/theatre": {
    title: "Cours de théâtre à Bouskoura — Enfants et adolescents",
    description:
      "Éveil théâtre dès 4 ans, théâtre enfants et ados, et improvisation théâtrale à Ville Verte, Bouskoura. Expression, confiance et jeu collectif.",
  },
  "/cheerleading": {
    title: "Cheerleading à Bouskoura — Broadway Studio",
    description:
      "Le cheerleading à Broadway Studio, Ville Verte Bouskoura : chorégraphie, acrobatie et esprit d’équipe. Contactez-nous pour connaître sa disponibilité.",
  },
  "/fitness": {
    title: "Fitness 100 % femmes à Bouskoura — Broadway Fitness",
    description:
      "Un espace réservé aux femmes à Ville Verte, Bouskoura. Renforcement et cardio, dance fitness, zumba, pilates, yoga et stretching.",
  },
  "/anniversaires": {
    title: "Anniversaire enfant à Bouskoura — Formule clé en main",
    description:
      "Organisation d’anniversaires pour enfants à Ville Verte, Bouskoura : activités artistiques, jeux, animation et goûter. Une formule tout compris.",
  },
  "/planning": {
    title: "Planning des cours 2026-2027 — Broadway Studio Bouskoura",
    description:
      "Tous les cours collectifs de la saison, filtrables par jour, discipline et âge. Danse, gymnastique, arts martiaux, théâtre, chant et échecs à Bouskoura.",
  },
  "/evenements": {
    title: "Événements et spectacles — Broadway Studio Bouskoura",
    description:
      "Journées portes ouvertes, auditions, compétitions et spectacles de fin d’année à Broadway Studio, Ville Verte Bouskoura.",
  },
  "/gallery": {
    title: "Galerie photos — Broadway Studio Bouskoura",
    description:
      "Photos prises au studio : cours de musique, danse, gymnastique, arts martiaux, théâtre, spectacles et anniversaires à Ville Verte, Bouskoura.",
  },
  "/contact": {
    title: "Contact — Broadway Studio, Ville Verte Bouskoura",
    description:
      "Broadway Studio, Lot n°1 Les Jardins de Massignon 2, Av. Patrice Lumumba, Ville Verte Bouskoura. Téléphone, e-mail, horaires et itinéraire.",
  },
  "/demande-dinformations": {
    title: "Demande d’informations et inscriptions — Broadway Studio",
    description:
      "Renseignez-vous sur nos disciplines et nos créneaux à Ville Verte, Bouskoura. Notre équipe vous recontacte rapidement.",
  },
} satisfies Record<string, PageMeta>;

export type SeoPath = keyof typeof pageMeta;

/** Construit l'objet `head` attendu par TanStack Router pour une route donnée. */
export function seo(path: SeoPath) {
  const { title, description } = pageMeta[path];
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Broadway Studio" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
