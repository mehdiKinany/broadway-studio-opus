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

export const disciplineMedia = {
  musique: [pianoAsset.url, guitarAsset.url, drumsAsset.url],
  danse: [danceAsset.url],
  gymnastique: [gymAsset.url, rhythmicAsset.url],
  "arts-martiaux": [judoAsset.url, martialAsset.url, kickboxingAsset.url],
  theatre: [theatreAsset.url],
} as const;

export type DisciplineMediaSlug = keyof typeof disciplineMedia;