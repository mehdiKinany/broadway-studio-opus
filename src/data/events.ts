import openDaysPoster from "@/assets/affiche-portes-ouvertes-sept-2026.png.asset.json";

export interface StudioEvent {
  id: string;
  titre: string;
  dateDebut: string;
  dateFin?: string;
  horaire: string;
  lieu: string;
  description: string;
  affiche?: string;
  disciplines?: readonly string[];
}

export const events: StudioEvent[] = [
  {
    id: "portes-ouvertes-septembre-2026",
    titre: "Journées Portes Ouvertes",
    dateDebut: "2026-09-19",
    dateFin: "2026-09-20",
    horaire: "10h00 à 17h00",
    lieu: "Au studio, Ville Verte Bouskoura",
    description: "Découvrez notre univers et rencontrez notre équipe.",
    affiche: openDaysPoster.url,
    disciplines: ["Musique", "Chant", "Danse", "Théâtre", "Échecs", "Arts visuels", "Arts martiaux", "Gymnastique"],
  },
  { id: "tournoi-echecs-2026", titre: "Tournoi d’échecs", dateDebut: "2026-05-16", horaire: "15h à 18h", lieu: "Broadway Studio", description: "Compétition stratégique pour jeunes joueurs." },
  { id: "spring-camp-2026", titre: "Spring Camp", dateDebut: "2026-04-27", dateFin: "2026-05-01", horaire: "", lieu: "Broadway Studio", description: "Stage d’une semaine pour les 4-12 ans : arts & craft, science lab, atelier culinaire, jeux d’équipe, jardinage, théâtre, fun gym, chant et musique." },
  { id: "competition-gymnastique-rythmique-2026", titre: "Compétition de gymnastique rythmique", dateDebut: "2026-04-18", horaire: "16h", lieu: "Broadway Studio", description: "Rencontre amicale avec les gymnastes du studio." },
  { id: "passage-grade-judo-2026", titre: "Passage de grade — Judo", dateDebut: "2026-04-18", horaire: "11h", lieu: "Broadway Studio", description: "" },
];

export const previousHighlights = [
  "Audition musicale et de danse « New Year Edition »",
  "Broadway Time Travel Show",
  "Audition de gymnastique sportive",
  "Championnat d’arts martiaux",
  "Exposition d’arts plastiques",
  "Audition musicale",
  "Spectacle de théâtre",
  "Audition de danse et de gymnastique rythmique",
] as const;

export function splitEventsByDate(items: StudioEvent[], now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return {
    upcoming: items.filter((item) => new Date(`${item.dateFin ?? item.dateDebut}T23:59:59`).getTime() >= today),
    past: items.filter((item) => new Date(`${item.dateFin ?? item.dateDebut}T23:59:59`).getTime() < today),
  };
}
