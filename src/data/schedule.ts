// Planning des cours collectifs 2026-2027 — Broadway Studio
// Source : les 2 PDF officiels du studio (saison 2026-2027).
// Les entrées `aConfirmer: true` doivent encore être validées par le studio.
// Les cours de MUSIQUE se font sur réservation : ils n'ont pas de créneau ici.

export type Jour = "lundi" | "mardi" | "mercredi" | "jeudi" | "vendredi" | "samedi";

export interface Creneau {
  id: string;
  discipline: string;   // slug de la discipline parente
  cours: string;        // nom affiché du cours
  jour: Jour;
  debut: string;        // "HH:MM"
  fin: string;          // "HH:MM"
  public?: string;      // tranche d'âge ou niveau, absent si non communiqué
  aConfirmer?: boolean;
}

export const JOURS: Jour[] = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"];

export const schedule: Creneau[] = [
  { id:"lun-1",  discipline:"danse",          cours:"Danse orientale",  jour:"lundi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"lun-2",  discipline:"gymnastique",    cours:"Gym sportive",     jour:"lundi", debut:"17:30", fin:"18:30", public:"Catégorie 2/3" },
  { id:"lun-3",  discipline:"arts-martiaux",  cours:"Kick-boxing",      jour:"lundi", debut:"17:30", fin:"18:30", public:"Pré-ados" },
  { id:"lun-4",  discipline:"theatre",        cours:"Impro théâtrale",  jour:"lundi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"lun-5",  discipline:"arts-martiaux",  cours:"Aïkido",           jour:"lundi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"lun-6",  discipline:"danse",          cours:"Danse orientale",  jour:"lundi", debut:"18:30", fin:"19:30", public:"11 ans et +" },
  { id:"lun-7",  discipline:"danse",          cours:"Urban Flow",       jour:"lundi", debut:"18:30", fin:"19:30", public:"Ados" },
  { id:"lun-8",  discipline:"gymnastique",    cours:"Gym sportive",     jour:"lundi", debut:"18:30", fin:"19:30", public:"Catégorie 4/5" },
  { id:"lun-9",  discipline:"arts-martiaux",  cours:"Kick-boxing",      jour:"lundi", debut:"18:30", fin:"19:30", public:"Ados" },
  { id:"lun-10", discipline:"theatre",        cours:"Impro théâtrale",  jour:"lundi", debut:"18:30", fin:"19:30", public:"11 ans et +" },
  { id:"lun-11", discipline:"arts-martiaux",  cours:"Aïkido",           jour:"lundi", debut:"18:30", fin:"19:30", public:"Ados" },

  { id:"mar-1",  discipline:"arts-martiaux",  cours:"Judo",             jour:"mardi", debut:"16:30", fin:"17:30", public:"7-9 ans" },
  { id:"mar-2",  discipline:"danse",          cours:"Afro Dance",       jour:"mardi", debut:"17:30", fin:"18:30", public:"8-12 ans" },
  { id:"mar-3",  discipline:"danse",          cours:"Ballet",           jour:"mardi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"mar-4",  discipline:"arts-martiaux",  cours:"Judo",             jour:"mardi", debut:"17:30", fin:"18:30", public:"10 ans et +" },
  { id:"mar-5",  discipline:"gymnastique",    cours:"Gym sportive",     jour:"mardi", debut:"17:30", fin:"18:30", public:"Catégorie 1" },
  { id:"mar-6",  discipline:"danse",          cours:"Afro Dance",       jour:"mardi", debut:"18:30", fin:"19:30", public:"Ados" },
  { id:"mar-7",  discipline:"danse",          cours:"Ballet",           jour:"mardi", debut:"18:30", fin:"19:30", public:"11 ans et +" },

  { id:"mer-1",  discipline:"gymnastique",    cours:"Éveil gym sportive",    jour:"mercredi", debut:"14:00", fin:"15:00", public:"3-6 ans" },
  { id:"mer-2",  discipline:"arts-martiaux",  cours:"Éveil judo",            jour:"mercredi", debut:"14:00", fin:"15:00", public:"5-6 ans" },
  { id:"mer-3",  discipline:"danse",          cours:"Éveil danse classique", jour:"mercredi", debut:"15:00", fin:"16:00", public:"4-6 ans" },
  { id:"mer-4",  discipline:"theatre",        cours:"Éveil théâtre",         jour:"mercredi", debut:"15:00", fin:"16:00", public:"4-6 ans" },
  { id:"mer-5",  discipline:"gymnastique",    cours:"Gym sportive",          jour:"mercredi", debut:"15:00", fin:"16:00", public:"Catégorie 1" },
  { id:"mer-6",  discipline:"danse",          cours:"Danse classique",       jour:"mercredi", debut:"16:00", fin:"17:00", public:"7-10 ans" },
  { id:"mer-7",  discipline:"gymnastique",    cours:"Gym sportive",          jour:"mercredi", debut:"16:00", fin:"17:00", public:"Catégorie 2/3" },
  { id:"mer-8",  discipline:"arts-plastiques",cours:"Urban Art",             jour:"mercredi", debut:"16:00", fin:"17:00", public:"7-10 ans" },
  { id:"mer-9",  discipline:"gymnastique",    cours:"Éveil gym rythmique",   jour:"mercredi", debut:"16:00", fin:"17:00" },
  { id:"mer-10", discipline:"chant",          cours:"Chorale orientale",     jour:"mercredi", debut:"16:00", fin:"18:00", public:"Adultes" },
  { id:"mer-11", discipline:"theatre",        cours:"Théâtre",               jour:"mercredi", debut:"16:15", fin:"17:45", public:"7-10 ans" },
  { id:"mer-12", discipline:"danse",          cours:"Danse classique",       jour:"mercredi", debut:"17:00", fin:"18:00", public:"11 ans et +" },
  { id:"mer-13", discipline:"arts-plastiques",cours:"Arts & Créations",      jour:"mercredi", debut:"17:00", fin:"18:00", public:"4-6 ans" },
  { id:"mer-14", discipline:"gymnastique",    cours:"Gym rythmique",         jour:"mercredi", debut:"17:00", fin:"18:00", public:"7-10 ans" },
  { id:"mer-15", discipline:"danse",          cours:"Elle Street",           jour:"mercredi", debut:"18:00", fin:"19:00", public:"Ados", aConfirmer:true },
  { id:"mer-16", discipline:"gymnastique",    cours:"Gym sportive",          jour:"mercredi", debut:"18:00", fin:"19:00", public:"Catégorie 2/3" },
  { id:"mer-17", discipline:"danse",          cours:"Urban Flow",            jour:"mercredi", debut:"18:00", fin:"19:00", public:"8-12 ans" },
  { id:"mer-18", discipline:"arts-plastiques",cours:"Urban Art",             jour:"mercredi", debut:"18:00", fin:"19:00", public:"Pré-ados / Ados", aConfirmer:true },
  { id:"mer-19", discipline:"gymnastique",    cours:"Gym rythmique",         jour:"mercredi", debut:"18:00", fin:"19:00", public:"Niveau avancé" },
  { id:"mer-20", discipline:"theatre",        cours:"Théâtre",               jour:"mercredi", debut:"18:00", fin:"19:30", public:"Ados" },
  { id:"mer-21", discipline:"chant",          cours:"Chorale orientale",     jour:"mercredi", debut:"18:30", fin:"20:30", public:"Adultes", aConfirmer:true },
  { id:"mer-22", discipline:"gymnastique",    cours:"Gym sportive",          jour:"mercredi", debut:"19:00", fin:"20:00", public:"Catégorie 4/5" },

  { id:"jeu-1",  discipline:"gymnastique",    cours:"Gym sportive",                 jour:"jeudi", debut:"16:30", fin:"17:30", public:"Catégorie 1" },
  { id:"jeu-2",  discipline:"danse",          cours:"Hip-Hop",                      jour:"jeudi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"jeu-3",  discipline:"danse",          cours:"Ballet",                       jour:"jeudi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"jeu-4",  discipline:"arts-martiaux",  cours:"Aïkido",                       jour:"jeudi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"jeu-5",  discipline:"gymnastique",    cours:"Gym sportive",                 jour:"jeudi", debut:"17:30", fin:"18:30", public:"Catégorie 2/3" },
  { id:"jeu-6",  discipline:"arts-plastiques",cours:"Dessin académique & peinture", jour:"jeudi", debut:"17:30", fin:"18:30", public:"7-10 ans" },
  { id:"jeu-7",  discipline:"echecs",         cours:"Échecs",                       jour:"jeudi", debut:"18:00", fin:"19:30" },
  { id:"jeu-8",  discipline:"danse",          cours:"Hip-Hop",                      jour:"jeudi", debut:"18:30", fin:"19:30", public:"Pré-ados / Ados" },
  { id:"jeu-9",  discipline:"danse",          cours:"Ballet",                       jour:"jeudi", debut:"18:30", fin:"19:30", public:"11 ans et +" },
  { id:"jeu-10", discipline:"arts-martiaux",  cours:"Aïkido",                       jour:"jeudi", debut:"18:30", fin:"19:30", public:"Ados" },
  { id:"jeu-11", discipline:"gymnastique",    cours:"Gym sportive",                 jour:"jeudi", debut:"18:30", fin:"19:30", public:"Catégorie 4/5" },
  { id:"jeu-12", discipline:"arts-plastiques",cours:"Dessin académique & peinture", jour:"jeudi", debut:"18:30", fin:"20:00", public:"Pré-ados / Ados", aConfirmer:true },

  { id:"ven-1",  discipline:"arts-martiaux",  cours:"Judo",         jour:"vendredi", debut:"16:30", fin:"17:30", public:"7-9 ans" },
  { id:"ven-2",  discipline:"arts-martiaux",  cours:"Kick-boxing",  jour:"vendredi", debut:"17:30", fin:"18:30", public:"Pré-ados" },
  { id:"ven-3",  discipline:"gymnastique",    cours:"Gym sportive", jour:"vendredi", debut:"17:30", fin:"18:30", public:"Catégorie 1" },
  { id:"ven-4",  discipline:"arts-martiaux",  cours:"Judo",         jour:"vendredi", debut:"17:30", fin:"18:30", public:"10 ans et +" },
  { id:"ven-5",  discipline:"arts-martiaux",  cours:"Kick-boxing",  jour:"vendredi", debut:"18:30", fin:"19:30", public:"Ados" },

  { id:"sam-1",  discipline:"danse",          cours:"Éveil Hip-Hop",         jour:"samedi", debut:"10:00", fin:"11:00", public:"4-6 ans" },
  { id:"sam-2",  discipline:"arts-martiaux",  cours:"Baby Judo",             jour:"samedi", debut:"10:00", fin:"11:00", public:"3-4 ans" },
  { id:"sam-3",  discipline:"danse",          cours:"Éveil danse classique", jour:"samedi", debut:"10:00", fin:"11:00", public:"4-6 ans" },
  { id:"sam-4",  discipline:"gymnastique",    cours:"Éveil gym sportive",    jour:"samedi", debut:"10:00", fin:"11:00", public:"3-6 ans" },
  { id:"sam-5",  discipline:"coran",          cours:"Coran",                 jour:"samedi", debut:"10:00", fin:"11:00", public:"7-10 ans" },
  { id:"sam-6",  discipline:"gymnastique",    cours:"Éveil gym rythmique",   jour:"samedi", debut:"11:00", fin:"12:00" },
  { id:"sam-7",  discipline:"gymnastique",    cours:"Gym sportive",          jour:"samedi", debut:"11:00", fin:"12:00", public:"Catégorie 1" },
  { id:"sam-8",  discipline:"coran",          cours:"Coran",                 jour:"samedi", debut:"11:00", fin:"12:00", public:"Ados" },
  { id:"sam-9",  discipline:"danse",          cours:"Néo-contemporain",      jour:"samedi", debut:"11:00", fin:"12:00", public:"8-12 ans" },
  { id:"sam-10", discipline:"danse",          cours:"Danse classique",       jour:"samedi", debut:"11:00", fin:"12:00", public:"7-10 ans" },
  { id:"sam-11", discipline:"chant",          cours:"Chant moderne",         jour:"samedi", debut:"11:30", fin:"12:30", public:"9-12 ans" },
  { id:"sam-12", discipline:"gymnastique",    cours:"Gym rythmique",         jour:"samedi", debut:"12:00", fin:"13:00", public:"Pré-ados / Ados" },
  { id:"sam-13", discipline:"danse",          cours:"Danse classique",       jour:"samedi", debut:"12:00", fin:"13:00", public:"11 ans et +" },
  { id:"sam-14", discipline:"gymnastique",    cours:"Gym sportive",          jour:"samedi", debut:"12:00", fin:"13:00", public:"Catégorie 2/3" },
  { id:"sam-15", discipline:"chant",          cours:"Chant moderne",         jour:"samedi", debut:"12:30", fin:"13:30", public:"Ados", aConfirmer:true },
  { id:"sam-16", discipline:"gymnastique",    cours:"Gym sportive",          jour:"samedi", debut:"13:00", fin:"14:00", public:"Catégorie 4/5", aConfirmer:true },
];

export const NOTE_MUSIQUE =
  "Les cours de musique (piano, guitare, batterie) se font sur réservation du créneau horaire.";
