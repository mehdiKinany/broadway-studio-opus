# Photos réelles et système de motion

## Résultat attendu
- Retirer définitivement les deux visuels artificiels et toute référence à ceux-ci.
- Intégrer les dix photos réelles fournies, avec des descriptions fidèles.
- Montrer les photos prévues dans les cartes de l’accueil et sur les pages Musique, Danse, Gymnastique, Arts martiaux et Théâtre.
- Conserver des compositions typographiques sombres pour les disciplines sans photo réelle.
- Appliquer une animation éditoriale discrète à l’accueil, à la navigation, au pied de page et à la barre mobile.

## Mise en œuvre
1. **Assainir les médias**
   - Supprimer les deux images artificielles du stockage du projet et retirer leurs imports.
   - Importer les dix photos jointes dans le stockage d’assets du site.
   - Remplacer l’image de la section Studio par la photographie réelle déjà vérifiée de l’enseigne.

2. **Brancher les vraies photos**
   - Centraliser les références et textes alternatifs honnêtes par discipline.
   - Ajouter Piano, Danse, Gymnastique, Judo et Théâtre aux cartes correspondantes de l’accueil.
   - Créer des présentations éditoriales réelles pour les cinq pages concernées, avec galeries adaptées au nombre d’images.
   - Légender `karate-cours.jpeg` comme « Cours d’arts martiaux à Broadway Studio », sans identifier une discipline non confirmée.

3. **Créer le socle d’animation**
   - Définir tous les tokens de durée et d’accélération dans la feuille globale, avec le commentaire demandé.
   - Ajouter `useReveal()` et les composants `Reveal`, titre masqué et image révélée, avec observation unique et fallback visible sans JavaScript.
   - Ajouter les cascades plafonnées à six éléments et les états `will-change` limités à l’animation.

4. **Appliquer les interactions**
   - Accueil : entrée du titre et des actions, parallax du fond uniquement sur ordinateur, reveals de blocs, titres et images, cartes de discipline conformes.
   - Navigation : seuil de 80 px, réduction 88→68 px, soulignements, menu mobile plein écran avec verrouillage du défilement et fermeture sans cascade.
   - Témoignages : glissement natif et snap sur mobile, commandes et transition sur ordinateur, sans lecture automatique.
   - Navigation entre pages : fondu court et remontée immédiate.
   - Boutons, liens, pied de page et barre mobile : interactions cohérentes, sans mouvement décoratif excessif.

5. **Accessibilité et validation**
   - Désactiver globalement transformations, parallax et masques avec `prefers-reduced-motion`, en gardant le contenu visible.
   - Vérifier clavier, focus, descriptions d’images, cibles tactiles et absence de mouvement interdit.
   - Contrôler le rendu et les interactions aux largeurs 375, 390, 430, 768, 1024 et 1440 px.

## Détails techniques
- Les animations ne modifieront que `transform`, `opacity` et `clip-path`.
- Les changements de hauteur du header seront obtenus par transformation/composition, sans animer `height`.
- Le parallax et les lectures de scroll seront passifs et regroupés par `requestAnimationFrame`.
- Aucun visuel généré ou de banque ne remplacera une photographie manquante.
