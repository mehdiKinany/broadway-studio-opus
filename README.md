# Broadway Studio Launch

Construis le nouveau site officiel de **BROADWAY STUDIO**, un centre artistique et sportif premium à Ville Verte / Bouskoura (Maroc), ouvert depuis 2022.

Ce message pose les **fondations + la page d'accueil**. On fera les pages intérieures ensuite. Site 100 % en français.

## RÈGLE ABSOLUE : ne jamais inventer
Le site actuel (bstudio.ma) est un template WordPress rempli de faux contenus. Tout ce qui est écrit ci-dessous a été vérifié. **N'ajoute AUCUNE donnée qui ne figure pas dans ce brief** : pas de noms de professeurs, pas de tarifs, pas de compteurs de type « 560+ élèves satisfaits », pas de faux témoignages, pas de numéro WhatsApp, pas de réseau social non listé. Si un composant a besoin d'une donnée que je ne fournis pas, construis le composant mais masque-le proprement quand la donnée est absente (rendu conditionnel). Aucun Lorem Ipsum, aucun texte en anglais oublié.

## IDENTITÉ VISUELLE
Les 4 images joints : le logo officiel, le bâtiment réel du studio, l'enseigne lumineuse, et l'affiche des Portes Ouvertes. Enregistre-les dans le projet (`src/assets/`).

- Couleur de marque : **jaune/or `#FFCC33`**, sur base **noir / anthracite très sombre**.
- Signature secondaire de marque : *« express yourself »* en script manuscrit (le logo l'utilise déjà). Tu peux l'employer comme signature discrète, jamais comme titre principal.
- Le logo est jaune + blanc : il lui faut toujours un fond sombre.

## DIRECTION ARTISTIQUE
Cible : **école artistique haut de gamme / conservatoire moderne / centre culturel contemporain**. Registre éditorial et élégant.

À FAIRE : typographie forte et contrastée (gros titres serrés, en capitales pour les titres de section), beaucoup d'espace blanc, images généreuses, grille éditoriale asymétrique, filets fins, animations discrètes (reveal au scroll, transitions 150–400 ms), alternance de sections claires et de sections très sombres.

À NE PAS FAIRE (le piège à éviter absolument) : dégradés violets/bleus artificiels, effets 3D, glassmorphism, ombres portées épaisses, emojis en guise d'icônes, carrousels qui défilent tout seuls vite, cartes arrondies génériques de template de salle de sport, badges « ✨ » partout. Pas de scroll-jacking, pas de curseur personnalisé.

Choisis une paire de polices Google Fonts qui soutient ce positionnement : une serif éditoriale à fort caractère (par ex. Fraunces, Playfair Display ou Instrument Serif) pour les titres, et une sans-serif neutre et moderne (Inter, Geist ou DM Sans) pour le texte courant.

## TECHNIQUE
Stack Lovable par défaut (Vite + React + TypeScript + Tailwind + shadcn/ui).

1. **Design system d'abord.** Définis tous les tokens dans `index.css` (variables HSL) et `tailwind.config.ts` : couleurs sémantiques, échelle typographique, espacements, rayons, largeurs de conteneur, variantes de boutons. Aucune couleur codée en dur dans les composants. Le site doit rester visuellement cohérent d'une page à l'autre.
2. **Données centralisées** dans `src/data/` : `site.ts`, `disciplines.ts`, `testimonials.ts`, `events.ts`. L'adresse, les téléphones, les horaires et les réseaux ne doivent exister qu'à UN seul endroit (`site.ts`) et être importés partout ailleurs.
3. **Textes centralisés** : place toutes les chaînes affichées dans un dictionnaire (`src/i18n/fr.ts`) et consomme-les via un petit hook `useT()`. On ajoutera l'anglais et l'espagnol plus tard — l'architecture doit le permettre sans réécrire les composants. **Ne génère PAS de traduction EN/ES maintenant.**
4. `react-router-dom` pour les routes. SEO par page (title, meta description, Open Graph, canonical) via un composant `<Seo />`.
5. **Mobile first, priorité absolue.** Teste 375, 390, 430, 768, 1024, 1440 px. Zéro débordement horizontal, boutons de 44 px minimum. Accessibilité : contrastes AA, focus visible, labels de formulaire, alt text, `prefers-reduced-motion` respecté, HTML sémantique.

## ROUTES (créer le routeur complet dès maintenant, pages intérieures en placeholder minimal propre)
Ces slugs sont déjà indexés par Google, **ne les change pas** : `/`, `/qui-sommes-nous`, `/musique`, `/chant`, `/danse`, `/gymnastique`, `/arts-martiaux`, `/arts-plastiques`, `/theatre`, `/cheerleading`, `/fitness`, `/anniversaires`, `/planning`, `/evenements`, `/gallery`, `/contact`, `/demande-dinformations`. Plus une vraie page 404.

## DONNÉES VÉRIFIÉES → `src/data/site.ts`
```
Nom : BROADWAY STUDIO
Baseline : Centre artistique et sportif — Ville Verte, Bouskoura
Depuis : 2022
Adresse : Lot n°1, Lotissement Les Jardins de Massignon 2, Av. Patrice Lumumba, Ville Verte, Bouskoura 27182, Maroc
Téléphones : +212 676 228 232  /  +212 662 777 417
Email : contact@bstudio.ma
Google Maps Plus Code : F9QJ+6F Bouskoura
Note Google : 4,5 / 5 sur 28 avis
Instagram : https://www.instagram.com/broadwaystudio_bouskoura/
Facebook : https://www.facebook.com/profile.php?id=61565777400150
YouTube : https://www.youtube.com/@broadwaystudio.bouskoura
```
**Horaires** (source Google Maps, corroborée par le planning des cours) :
```
Lundi      15h30 – 20h00
Mardi      10h30 – 12h30  et  15h30 – 20h00
Mercredi   10h30 – 12h30  et  14h00 – 20h00
Jeudi      10h30 – 12h30  et  15h30 – 20h00
Vendredi   10h30 – 12h30  et  15h30 – 20h00
Samedi     09h00 – 15h00
Dimanche   Fermé
```
Modélise-les en tableau de créneaux (un jour peut avoir deux plages) et affiche « Fermé » pour dimanche. Prévois un petit indicateur « Ouvert / Fermé » calculé à partir de ces données.

**Pas de WhatsApp** : aucun numéro WhatsApp n'a pu être vérifié, n'en mets aucun. **Pas de Twitter/X** non plus.

## LES 9 UNIVERS → `src/data/disciplines.ts`
Chaque entrée : `slug`, `nom`, `accroche` (une phrase), `resume` (2–3 phrases), `sousDisciplines[]`, `image`, `publics[]`. Les sous-disciplines listées ici sont toutes confirmées par le planning officiel 2025-2026 :

1. **Musique** (`/musique`) — Piano, Guitare, Batterie, Violon. Cours individuels, **sur réservation de créneau horaire**.
2. **Chant** (`/chant`) — Chant moderne (dès 9 ans, et groupe Ados), Chorale orientale (adultes). Cours individuels ou collectifs, proposés en français et en anglais.
3. **Danse** (`/danse`) — Éveil et initiation (dès 3 ans), Danse classique, Danse contemporaine, Hip-Hop, Éveil Hip-Hop, Street / Urban Dance, Afro Dance, Danse orientale, GYAL Dance, Zumba Kids (dès 7 ans), Danses de couple (salsa, bachata, rock).
4. **Gymnastique** (`/gymnastique`) — Gymnastique sportive (éveil dès 3 ans, puis catégories 1 à 5), Gymnastique rythmique (éveil, puis 8-12 ans et 12 ans et +).
5. **Arts martiaux** (`/arts-martiaux`) — Judo (Baby Judo 3-4 ans, Éveil judo 5-6 ans, Judo 7 ans et +), Aïkido (8-12 ans et Ados), Kick-boxing (Pré-ados/Ados, et un créneau « Elle »).
6. **Arts plastiques** (`/arts-plastiques`) — Éveil aux Beaux-Arts (4-6 ans), Dessin académique, Peinture, Poterie, Sculpture, Atelier BD & Mangas, Académie des Arts (ados & adultes).
7. **Théâtre** (`/theatre`) — groupes 4-6 ans, 7-10 ans, 11 ans et +, Ados, et Impro théâtrale (8-12 ans).
8. **Cheerleading** (`/cheerleading`) — discipline présentée par le studio. **Aucun créneau n'apparaît au planning 2025-2026 : ne promets aucun horaire ni aucun âge sur cette discipline.**
9. **Fitness 100 % Femmes** (`/fitness`) — trois familles : *Renforcement & Cardio* (Body Sculpt, CAF, TBC, Circuit Training, Functional Training), *Dance & Fun Fitness* (Zumba, Chaabi Kaada, Danse orientale, Step, Afro Dance), *Stretch & Balance* (Pilates, Balance, Tai Chi, Yoga).

Deux offres complémentaires, à traiter comme des univers à part entière eux aussi :
- **Échecs** — créneau confirmé au planning (jeudi) et discipline présentée aux Portes Ouvertes.
- **Anniversaires** (`/anniversaires`) — organisation d'anniversaires enfants, formule « all in one » : activités artistiques et ludiques, jeux organisés, animation et goûter.

Publics accueillis : enfants, adolescents, adultes, seniors.

## STRUCTURE DE LA PAGE D'ACCUEIL
1. **Header** sticky, logo à gauche, nav : Accueil · Disciplines (menu déroulant avec les 9 univers) · Planning · Événements · Galerie · Le Studio · Contact. CTA principal à droite : **DEMANDER DES INFORMATIONS**. Transparent au-dessus du hero, fond sombre solide dès le scroll. Mobile : menu plein écran élégant.
2. **Hero** — photo réelle du bâtiment (`studio-exterieur.jpg`) en fond, voile sombre pour la lisibilité. Titre : **« L'ART DE GRANDIR. LE PLAISIR DE S'EXPRIMER. »** Sous-titre : *« Un centre artistique et sportif à Bouskoura où enfants, adolescents et adultes développent leur créativité, leur confiance et leur talent. »* CTA 1 « Découvrir les disciplines », CTA 2 « Voir le planning », lien discret « Demander des informations ».
3. **Bandeau de confiance** — une ligne sobre, séparée par des points : VILLE VERTE — BOUSKOURA · ENFANTS · ADOS · ADULTES · 9 UNIVERS ARTISTIQUES & SPORTIFS · DEPUIS 2022. Pas de compteurs chiffrés animés.
4. **Annonce Portes Ouvertes** — bloc mis en avant, car l'événement est imminent : **Journées Portes Ouvertes, samedi 19 et dimanche 20 septembre 2026, de 10h00 à 17h00**, au studio. Disciplines présentées : musique, chant, danse, théâtre, échecs, arts visuels, arts martiaux, gym. Utilise l'affiche jointe. CTA « Demander des informations ».
5. **Les disciplines** — titre de section « EXPLOREZ VOTRE PASSION ». Grille éditoriale de grandes cartes visuelles (pas 9 rectangles identiques : varie les tailles pour créer un rythme). Chaque carte : image, nom, une phrase, lien « Découvrir ». Hover sobre et élégant sur desktop. Sur mobile, grille propre à une ou deux colonnes. (Les images des disciplines arrivent au prochain message — prévois un placeholder sombre neutre avec le nom de la discipline, sans image de stock aléatoire.)
6. **À chacun son parcours** — 4 cartes : ENFANTS · ADOS · ADULTES · SENIORS. Chacune renvoie vers les disciplines. N'invente aucune restriction d'âge au-delà de celles fournies plus haut.
7. **À propos** — titre « PLUS QU'UN STUDIO, UN LIEU POUR S'EXPRIMER. » Texte court (150 mots max, pas de pavé) : centre d'éveil artistique de la Ville Verte, ouvert depuis 2022, équipe pédagogique qualifiée, pédagogie fondée sur le plaisir de s'exprimer et le développement personnel, un site architectural conçu autour des activités artistiques, ouvert aux enfants comme aux adultes et aux seniors. Illustre avec `enseigne-lumineuse.jpeg`. Lien « Découvrir le studio ».
8. **Aperçu du planning** — bloc d'accroche vers `/planning` (on construira la page ensuite), avec les horaires d'ouverture affichés depuis `site.ts`.
9. **Témoignages** — titre « CE SONT EUX QUI EN PARLENT LE MIEUX ». Utilise **uniquement** ces témoignages réels (corrige seulement la ponctuation et les fautes de frappe, ne réécris pas le sens). Mets-les dans `src/data/testimonials.ts`. Carrousel à défilement manuel uniquement, ou grille — pas d'autoplay rapide.
   - « Ma fille est inscrite à BROADWAY depuis 2022 en danse classique et judo. Le corps professoral est excellent et à l'écoute des enfants et des demandes des parents. Je suis à 100 % satisfait. La qualité des activités, des professeurs et du staff. Les spectacles de fin d'année sont excellents et aux petits soins pour nos enfants. »
   - « Merci pour cette excellente année à BROADWAY. J'ai pu apprendre énormément de techniques et d'astuces m'ayant permis d'améliorer mon niveau de dessin. Ce fut une très bonne expérience. J'ai fait d'incroyables rencontres. Je recommande vivement BROADWAY ! » — *élève, 15 ans*
   - « La qualité des enseignants est de haut niveau. L'organisation et la logistique sont parfaites, avec une très bonne communication. De grands progrès ont été relevés pour ma fille, avec beaucoup de plaisir et d'épanouissement pendant les cours. »
   - « Depuis leur inscription à BROADWAY, nous avons noté une excellente adhésion aux activités, un épanouissement et un réel apport en matière de discipline. On remercie le staff pour son engagement, sa disponibilité et son professionnalisme. »
   - « Très satisfait. Rigueur et sécurité. Communication claire. Je compte réinscrire ma fille. Merci pour la qualité du service. »
   - « On s'est régalé à ce beau spectacle ! C'est du travail de qualité et les costumes sont topissimes. Bravo à toute l'équipe de Broadway. »
   - « Nous tenons à remercier BROADWAY pour son excellent travail et pour les efforts fournis auprès des enfants. Nous sentons un épanouissement et une prise de confiance. Un grand bravo au coach pour sa pédagogie. »
   Tu peux mentionner sobrement la note Google « 4,5 ★ sur 28 avis » à côté du titre de section, avec un lien vers la fiche Google.
10. **CTA final** — bloc sombre pleine largeur, « Envie de découvrir Broadway Studio ? », bouton vers `/demande-dinformations`, et les deux numéros de téléphone cliquables.
11. **Contact / localisation** — adresse complète, horaires, téléphones, email, bouton « Itinéraire » vers Google Maps, et une carte intégrée.
12. **Footer** premium sur fond très sombre : logo, courte présentation, colonnes de navigation, les 9 disciplines, coordonnées, horaires, et **uniquement** les trois réseaux vérifiés (Instagram, Facebook, YouTube). Pas de mention « Wikidigital », pas de Twitter.
13. **Barre d'action fixe mobile** discrète (masquée sur desktop) : Planning · Appeler · Infos. Peu haute, pas envahissante.

## CE QU'IL NE FAUT SURTOUT PAS REPRENDRE du site actuel
Aucun compteur chiffré (le site actuel affiche « 70+ Dance Classes », « 20+ Best Instructor », « 20+ Total Brunch », « 560+ Happy Customer » sur l'accueil et des chiffres *différents* sur la page À propos — tout est faux). Aucune section blog. Aucune section équipe / instructeurs. Aucun bouton en anglais du type « JOIN NOW », « Book Now », « Best Instructor », « Happy Customer ».

Commence par le design system et la structure de données, puis construis la page d'accueil avec soin. C'est cette page qui doit prouver que Broadway Studio est un établissement sérieux et établi.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://broadway-studio-opus.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c75cf47a-9d25-4dca-9da9-ac6cd9c59fd7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
