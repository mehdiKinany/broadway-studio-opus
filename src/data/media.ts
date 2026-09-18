import pianoAsset from "@/assets/piano-cours.jpeg.asset.json";
import guitarAsset from "@/assets/guitare-cours.jpeg.asset.json";
import drumsAsset from "@/assets/batterie-salle.jpeg.asset.json";
import danceAsset from "@/assets/eveil-danse-studio.jpeg.asset.json";
import gymAsset from "@/assets/gym-sportive-cours.jpeg.asset.json";
import rhythmicAsset from "@/assets/gym-rythmique-cerceaux.jpeg.asset.json";
import judoAsset from "@/assets/judo-tatami.jpeg.asset.json";
import martialAsset from "@/assets/karate-cours.jpeg.asset.json";
import kickboxingAsset from "@/assets/kickboxing-cours.jpg.asset.json";
import theatreAsset from "@/assets/theatre-scene.jpg.asset.json";
import theatreShowAsset from "@/assets/theatre-spectacle.jpg.asset.json";
import artworkAsset from "@/assets/oeuvres-eleves.jpeg.asset.json";
import mangaAsset from "@/assets/affiche-atelier-bd-mangas.jpg.asset.json";
import birthdayBubblesAsset from "@/assets/anniversaire-bulles.jpeg.asset.json";
import birthdayPlatesAsset from "@/assets/anniversaire-atelier-assiettes.jpeg.asset.json";
import birthdayShirtAsset from "@/assets/anniversaire-tshirt-personnalise.jpeg.asset.json";
import birthdayCreativeAsset from "@/assets/anniversaire-atelier-creatif.jpeg.asset.json";
import birthdayDecorAsset from "@/assets/anniversaire-decoration.jpeg.asset.json";
import exteriorAsset from "@/assets/studio-exterieur.jpg.asset.json";
import exteriorRegistrationAsset from "@/assets/studio-exterieur-inscriptions.jpg.asset.json";
import signAsset from "@/assets/enseigne-lumineuse.jpeg.asset.json";
import openDaysAsset from "@/assets/affiche-portes-ouvertes-sept-2026.png.asset.json";

export type MediaCategory = "studio" | "musique" | "danse" | "gymnastique" | "arts-martiaux" | "theatre" | "arts-plastiques" | "anniversaires";

export type GalleryMedia = {
  id: string;
  src: string;
  category: MediaCategory;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const disciplineMedia = {
  musique: [pianoAsset.url, guitarAsset.url, drumsAsset.url],
  danse: [danceAsset.url],
  gymnastique: [gymAsset.url, rhythmicAsset.url],
  "arts-martiaux": [judoAsset.url, martialAsset.url, kickboxingAsset.url],
  theatre: [theatreAsset.url, theatreShowAsset.url],
  "arts-plastiques": [artworkAsset.url, mangaAsset.url],
  anniversaires: [birthdayBubblesAsset.url, birthdayPlatesAsset.url, birthdayShirtAsset.url, birthdayCreativeAsset.url, birthdayDecorAsset.url],
} as const;

export type DisciplineMediaSlug = keyof typeof disciplineMedia;

export const galleryMedia: GalleryMedia[] = [
  { id: "studio-exterieur", src: exteriorAsset.url, category: "studio", width: 1920, height: 818, alt: "Façade de Broadway Studio à Ville Verte, Bouskoura", caption: "Broadway Studio à Ville Verte" },
  { id: "enseigne-lumineuse", src: signAsset.url, category: "studio", width: 1024, height: 934, alt: "Enseigne lumineuse Broadway Studio dans les locaux de Ville Verte", caption: "L’enseigne Broadway Studio" },
  { id: "studio-inscriptions", src: exteriorRegistrationAsset.url, category: "studio", width: 1920, height: 1084, alt: "Façade de Broadway Studio photographiée pour la campagne d’inscriptions 2025-2026", caption: "La façade du studio" },
  { id: "portes-ouvertes", src: openDaysAsset.url, category: "studio", width: 1771, height: 888, alt: "Affiche officielle des Journées Portes Ouvertes Broadway Studio des 19 et 20 septembre 2026", caption: "Journées Portes Ouvertes 2026" },
  { id: "piano", src: pianoAsset.url, category: "musique", width: 768, height: 1024, alt: "Enfant jouant sur un piano acoustique pendant un cours à Broadway Studio", caption: "Cours de piano acoustique" },
  { id: "guitare", src: guitarAsset.url, category: "musique", width: 1024, height: 768, alt: "Deux élèves et leur professeur pendant un cours collectif de guitare dans la salle de musique", caption: "Cours collectif de guitare" },
  { id: "batterie", src: drumsAsset.url, category: "musique", width: 849, height: 1024, alt: "Professeur installé à la batterie dans la salle de musique ornée du logo Broadway Studio", caption: "Cours de batterie" },
  { id: "danse", src: danceAsset.url, category: "danse", width: 828, height: 872, alt: "Professeure accompagnant deux jeunes enfants pendant un cours d’éveil danse devant le logo Broadway Studio", caption: "Éveil danse" },
  { id: "gym-sportive", src: gymAsset.url, category: "gymnastique", width: 1024, height: 768, alt: "Enfants réalisant un exercice de gymnastique sportive sur le tatami avec leur professeur", caption: "Gymnastique sportive" },
  { id: "gym-rythmique", src: rhythmicAsset.url, category: "gymnastique", width: 1024, height: 768, alt: "Jeunes gymnastes pratiquant avec des cerceaux dans une salle équipée de barres", caption: "Gymnastique rythmique" },
  { id: "judo", src: judoAsset.url, category: "arts-martiaux", width: 1024, height: 605, alt: "Professeur et jeunes élèves de judo saluant sur le tatami Broadway Studio", caption: "Cours de judo" },
  { id: "arts-martiaux", src: martialAsset.url, category: "arts-martiaux", width: 1024, height: 694, alt: "Deux pratiquants en tenue blanche pendant un exercice sur un tapis jaune devant le logo Broadway Studio", caption: "Cours d’arts martiaux" },
  { id: "kickboxing", src: kickboxingAsset.url, category: "arts-martiaux", width: 2000, height: 1337, alt: "Enfant travaillant un coup de pied de kick-boxing avec son coach", caption: "Cours de kick-boxing" },
  { id: "theatre-scene", src: theatreAsset.url, category: "theatre", width: 512, height: 341, alt: "Troupe d’enfants en costume jouant ensemble sur une scène de théâtre", caption: "Jeunes comédiens en représentation" },
  { id: "theatre-spectacle", src: theatreShowAsset.url, category: "theatre", width: 2560, height: 853, alt: "Jeunes comédiens réunis sur scène sous des lumières colorées pendant un spectacle", caption: "Spectacle de théâtre" },
  { id: "oeuvres-eleves", src: artworkAsset.url, category: "arts-plastiques", width: 768, height: 1024, alt: "Peintures de paysages réalisées par des élèves sur une table d’atelier", caption: "Peintures réalisées par les élèves" },
  { id: "atelier-bd", src: mangaAsset.url, category: "arts-plastiques", width: 905, height: 1280, alt: "Affiche officielle de l’atelier Bandes Dessinées et Mangas encadré par JBARA", caption: "Atelier BD & Mangas" },
  { id: "anniversaire-bulles", src: birthdayBubblesAsset.url, category: "anniversaires", width: 768, height: 1024, alt: "Enfants assis devant Broadway Studio au milieu de bulles géantes", caption: "Animation de bulles géantes" },
  { id: "anniversaire-assiettes", src: birthdayPlatesAsset.url, category: "anniversaires", width: 768, height: 796, alt: "Enfants peignant des assiettes autour d’une table pendant un anniversaire", caption: "Atelier peinture sur assiettes" },
  { id: "anniversaire-tshirt", src: birthdayShirtAsset.url, category: "anniversaires", width: 768, height: 1024, alt: "T-shirt blanc personnalisé avec le prénom Maya et décoré de couleurs", caption: "T-shirt personnalisé" },
  { id: "anniversaire-creatif", src: birthdayCreativeAsset.url, category: "anniversaires", width: 768, height: 1024, alt: "Enfant participant à un atelier créatif autour d’une table pendant un anniversaire", caption: "Atelier créatif" },
  { id: "anniversaire-decoration", src: birthdayDecorAsset.url, category: "anniversaires", width: 768, height: 1024, alt: "Décoration Happy Birthday et animation d’assiettes tournantes dans le studio", caption: "Décoration d’anniversaire au studio" },
];

export const mediaById = Object.fromEntries(galleryMedia.map((item) => [item.id, item])) as Record<string, GalleryMedia>;