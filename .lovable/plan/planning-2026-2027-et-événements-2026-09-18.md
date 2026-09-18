# Planning 2026-2027 et événements

## Objectif
Remplacer les pages provisoires par un planning mobile-first fidèle aux données officielles et une page Événements éditoriale, sans contenu inventé.

## Mise en œuvre
- Créer `schedule.ts` avec le contenu fourni, strictement inchangé, puis isoler la classification Enfants / Ados / Adultes dans une fonction pure testable.
- Actualiser les disciplines selon la saison 2026-2027 : ajouter les pratiques confirmées et retirer celles absentes du nouveau planning.
- Construire `/planning` avec filtres cumulables, compteur, réinitialisation, état vide, vue mobile groupée par jour et vue bureau en six colonnes chronologiques.
- Relier chaque cours à sa discipline quand une page dédiée existe, signaler les horaires à confirmer et ajouter les notes Musique et contact.
- Structurer les événements datés et les temps forts sans date dans `events.ts`, avec statut à venir/passé calculé au jour courant.
- Construire `/evenements` en mettant les Portes Ouvertes et leur affiche au premier plan, puis les événements passés et les temps forts sobres.
- Ajouter les données schema.org Event uniquement aux événements datés.
- Corriger le bandeau de confiance et confirmer que les cinq cartes concernées affichent les vraies photos.
- Centraliser toutes les nouvelles chaînes françaises, conserver les animations existantes et les métadonnées propres à chaque page.

## Vérification
- Tester la logique de classification des publics et la séparation temporelle des événements.
- Vérifier filtres, état vide, liens, affichage mobile et bureau, absence de débordement et erreurs navigateur.
- Contrôler que les pratiques retirées n’apparaissent plus et que les cinq vraies photos sont visibles sur l’accueil.
