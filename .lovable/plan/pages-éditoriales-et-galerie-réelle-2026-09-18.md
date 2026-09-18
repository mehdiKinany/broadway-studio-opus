# Pages éditoriales et galerie réelle

## Objectif
Remplacer les six pages encore provisoires et la galerie par des pages complètes, exclusivement fondées sur les informations et photographies vérifiées fournies.

## Mise en œuvre
1. **Médias réels**
   - Importer les dix nouveaux fichiers dans les ressources du site.
   - Étendre le catalogue média central avec catégorie, texte alternatif honnête, légende et dimensions natives.
   - Associer l’affiche Spring Camp uniquement à l’événement passé correspondant ; son tarif restera visible dans l’affiche historique, sans être repris comme offre actuelle.

2. **Pages Chant, Arts plastiques et Cheerleading**
   - Chant : en-tête typographique sombre, texte pédagogique, deux cours confirmés et lien vers le planning.
   - Arts plastiques : œuvres d’élèves, affiche BD & Mangas, quatre ateliers confirmés et mention sobre de JBARA.
   - Cheerleading : présentation courte, sans photo ni promesse de créneau, avec avertissement de non-disponibilité au planning actuel et contacts.

3. **Pages Broadway Fitness et Anniversaires**
   - Fitness : page éditoriale dédiée « BROADWAY FITNESS — 100 % FEMMES », trois familles de cours, aucun horaire inventé, appel final vers la demande de planning.
   - Anniversaires : ouverture avec les bulles, galerie des cinq photos, texte de formule clé en main et appel final sans prix, durée ou capacité.

4. **Page Qui sommes-nous**
   - Présentation courte en sections aérées avec les trois photographies du lieu.
   - Mettre en valeur uniquement les trois éléments de crédibilité vérifiés et le lien Google.
   - Ne créer aucune section équipe, aucun profil et aucun compteur.

5. **Galerie accessible**
   - Construire une mosaïque qui respecte les ratios natifs et charge les images progressivement avec dimensions réservées.
   - Déduire automatiquement les filtres des catégories réellement présentes.
   - Ajouter une visionneuse avec boutons précédent/suivant, clavier, Échap, glissement tactile, restitution du focus et piège de focus.
   - Exclure de la galerie l’affiche Spring Camp, conformément à son usage limité à la page Événements ; les autres photographies réelles seront toutes présentées.

6. **Cohérence et validation**
   - Centraliser toutes les nouvelles chaînes françaises dans le dictionnaire existant.
   - Réutiliser le système de mouvement, les boutons et les styles existants, avec réduction des animations respectée.
   - Conserver les métadonnées actuelles sans les modifier.
   - Vérifier les sept pages à 375 px et 1440 px : lisibilité, navigation, absence de débordement, images, filtres et visionneuse.

## Détails techniques
- Créer des composants de page ciblés plutôt qu’un bloc générique unique.
- Conserver les routes et leurs adresses actuelles.
- Étendre l’événement Spring Camp avec son affiche réelle, sans exposer le tarif dans le contenu textuel.
- La galerie utilisera les données de `media.ts` comme source unique pour les catégories et descriptions.