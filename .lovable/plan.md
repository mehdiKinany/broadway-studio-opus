# Broadway Studio — fondations et page d’accueil

## Objectif
Créer le site officiel français de Broadway Studio avec une identité éditoriale premium, une page d’accueil complète et tous les liens demandés déjà fonctionnels vers des pages intérieures sobres.

## Direction visuelle
- Palette noir/anthracite, blanc cassé et or Broadway, entièrement portée par des variables sémantiques.
- Titres en Instrument Serif, textes en DM Sans, chargés depuis Google Fonts dans l’en-tête du document.
- Composition éditoriale asymétrique, grands visuels réels, filets fins, alternance claire/sombre et mouvements discrets respectant la réduction des animations.
- Logo toujours présenté sur fond sombre et décliné en favicon carré.

## Structure et contenus
- Centraliser les coordonnées, horaires, réseaux et calcul d’ouverture dans `site.ts`.
- Centraliser les univers, témoignages et événement Portes Ouvertes dans leurs fichiers dédiés.
- Centraliser toutes les chaînes visibles dans le dictionnaire français et les exposer via `useT()`.
- N’afficher que les informations vérifiées du brief ; aucune donnée de remplissage.

## Accueil
- En-tête fixe transparent puis sombre, menu disciplines, navigation complète et menu mobile plein écran.
- Grande ouverture sur la photo du bâtiment, bandeau de confiance et annonce Portes Ouvertes illustrée par l’affiche.
- Grille éditoriale des univers avec emplacements visuels sombres en attendant les futures photos.
- Parcours par public, présentation du studio avec l’enseigne, aperçu des horaires et statut ouvert/fermé.
- Témoignages réels en navigation manuelle, appel final, coordonnées, carte et pied de page complet.
- Barre d’actions mobile Planning / Appeler / Infos.

## Navigation et pages futures
- Créer chaque adresse demandée avec une vraie page minimale, un titre et des métadonnées uniques.
- Créer une vraie page introuvable et préserver les slugs fournis.
- Utiliser le routeur natif TanStack du projet plutôt que `react-router-dom`, et le système CSS-first de Tailwind v4 plutôt qu’un fichier de configuration obsolète. Le résultat fonctionnel demandé reste identique.

## Ressources
- Héberger les quatre images fournies via les ressources du projet et les importer depuis `src/assets/`.
- Produire un favicon optimisé depuis le logo officiel.
- Utiliser les icônes existantes pour les commandes, réseaux, coordonnées et navigation.

## Validation
- Vérifier le rendu et les interactions à 375, 390, 430, 768, 1024 et 1440 px.
- Contrôler les débordements, tailles tactiles, contraste, focus clavier, textes alternatifs, menu mobile, carrousel manuel, liens et carte.
- Vérifier que chaque page possède ses propres métadonnées françaises et qu’aucun contenu interdit ou inventé n’apparaît.
