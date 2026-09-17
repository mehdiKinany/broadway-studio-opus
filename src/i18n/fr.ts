export const fr = {
  brand: { name: "BROADWAY STUDIO", signature: "express yourself" },
  nav: {
    home: "Accueil", disciplines: "Disciplines", planning: "Planning", events: "Événements",
    gallery: "Galerie", studio: "Le Studio", contact: "Contact", info: "Demander des informations",
    openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
  },
  hero: {
    title: "L’ART DE GRANDIR. LE PLAISIR DE S’EXPRIMER.",
    subtitle: "Un centre artistique et sportif à Bouskoura où enfants, adolescents et adultes développent leur créativité, leur confiance et leur talent.",
    disciplines: "Découvrir les disciplines", planning: "Voir le planning", info: "Demander des informations",
    imageAlt: "Bâtiment de Broadway Studio à Ville Verte, Bouskoura",
  },
  trust: ["Ville Verte — Bouskoura", "Enfants", "Ados", "Adultes", "9 univers artistiques & sportifs", "Depuis 2022"],
  event: {
    eyebrow: "À vos agendas", title: "JOURNÉES PORTES OUVERTES",
    date: "Samedi 19 et dimanche 20 septembre 2026", time: "De 10h00 à 17h00", place: "Au studio",
    intro: "Découvrez notre univers et rencontrez notre équipe.",
    disciplines: "Musique, chant, danse, théâtre, échecs, arts visuels, arts martiaux et gymnastique.",
    imageAlt: "Affiche des Journées Portes Ouvertes Broadway Studio des 19 et 20 septembre 2026",
  },
  disciplines: { eyebrow: "Les univers", title: "EXPLOREZ VOTRE PASSION", discover: "Découvrir", placeholder: "Visuel à venir" },
  audiences: {
    eyebrow: "À chacun son parcours", title: "UNE PRATIQUE POUR CHAQUE ÉLAN.",
    items: ["Enfants", "Adolescents", "Adultes", "Seniors"], discover: "Explorer les disciplines",
  },
  about: {
    eyebrow: "Broadway Studio", title: "PLUS QU’UN STUDIO, UN LIEU POUR S’EXPRIMER.",
    text: "Centre d’éveil artistique et sportif de la Ville Verte, Broadway Studio accueille depuis 2022 les enfants, les adolescents, les adultes et les seniors. Son équipe pédagogique qualifiée cultive une approche fondée sur le plaisir de s’exprimer, la confiance et le développement personnel. Pensé autour des activités artistiques et sportives, le site offre un cadre architectural contemporain où chacun peut découvrir une discipline, progresser et révéler son potentiel.",
    link: "Découvrir le studio", imageAlt: "Espace d’accueil intérieur de Broadway Studio",
  },
  schedule: {
    eyebrow: "Cette semaine", title: "LE STUDIO VOUS ACCUEILLE.", subtitle: "Horaires d’ouverture",
    open: "Ouvert", closed: "Fermé", today: "Aujourd’hui", link: "Consulter le planning",
  },
  testimonials: {
    eyebrow: "Vos expériences", title: "CE SONT EUX QUI EN PARLENT LE MIEUX",
    google: "4,5 ★ sur 28 avis Google", previous: "Témoignage précédent", next: "Témoignage suivant",
    quote: "Témoignage", student: "Élève, 15 ans",
  },
  cta: {
    title: "Envie de découvrir Broadway Studio ?", text: "Échangeons sur la discipline et le parcours qui vous correspondent.",
    button: "Demander des informations", call: "Appeler",
  },
  contact: {
    eyebrow: "Ville Verte — Bouskoura", title: "NOUS TROUVER.", address: "Adresse", hours: "Horaires",
    phone: "Téléphones", email: "E-mail", directions: "Itinéraire", mapTitle: "Localisation de Broadway Studio",
  },
  footer: {
    text: "Centre artistique et sportif à Ville Verte, Bouskoura, ouvert aux enfants, adolescents, adultes et seniors.",
    navigation: "Navigation", universes: "Disciplines", coordinates: "Coordonnées", follow: "Suivre Broadway Studio",
    rights: "Tous droits réservés.",
  },
  mobileBar: { planning: "Planning", call: "Appeler", info: "Infos" },
  pages: {
    intro: "Cette page sera développée prochainement.", back: "Retour à l’accueil",
    titles: {
      about: "QUI SOMMES-NOUS", musique: "MUSIQUE", chant: "CHANT", danse: "DANSE", gymnastique: "GYMNASTIQUE",
      martial: "ARTS MARTIAUX", visual: "ARTS PLASTIQUES", theatre: "THÉÂTRE", cheer: "CHEERLEADING",
      fitness: "FITNESS 100 % FEMMES", birthdays: "ANNIVERSAIRES", planning: "PLANNING", events: "ÉVÉNEMENTS",
      gallery: "GALERIE", contact: "CONTACT", info: "DEMANDE D’INFORMATIONS",
    },
  },
  notFound: { title: "PAGE INTROUVABLE", text: "La page que vous recherchez n’existe pas ou a été déplacée.", back: "Revenir à l’accueil" },
  error: { title: "Cette page n’a pas pu être chargée", text: "Une erreur est survenue. Vous pouvez réessayer ou revenir à l’accueil.", retry: "Réessayer", home: "Accueil" },
} as const;

export type Translation = typeof fr;