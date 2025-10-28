### Objectif de l'Exercice

Développer une application React qui permet aux utilisateurs de choisir des ingrédients à partir d'une liste prédéfinie. En fonction des ingrédients sélectionnés, l'application affichera une recette de cuisine correspondante.

### Instructions

1. **Préparation de l'Environnement**
   * Créez un nouveau projet React ou utilisez un projet existant pour l'exercice.
2. **Création des Composants**
   * **Composant `IngredientSelector`** : Ce composant affichera une liste d'ingrédients que l'utilisateur peut choisir. Pour simplifier, les ingrédients peuvent être sélectionnés à l'aide de cases à cocher.
   * **Composant `Recipe`** : Ce composant affichera la recette basée sur les ingrédients sélectionnés. La recette est déterminée en passant les ingrédients sélectionnés comme props à ce composant.
3. **Logique de Sélection des Ingrédients**
   * Dans le composant principal de votre application (par exemple, `App`), gérez un état local représentant les ingrédients sélectionnés. Puisque nous n'utilisons pas les hooks, cet état sera géré à travers le constructeur et les méthodes de classe.
   * Fournissez une fonction dans votre composant principal qui permet de mettre à jour cet état chaque fois qu'un utilisateur sélectionne ou désélectionne un ingrédient.
4. **Affichage des Recettes**
   * En fonction des ingrédients sélectionnés, le composant principal passera ces informations au composant `Recipe` en tant que props.
   * Le composant `Recipe` utilisera ces props pour déterminer quelle recette afficher. Vous pouvez définir des règles simples (par exemple, si l'utilisateur sélectionne "farine" et "sucre", une recette de gâteau sera affichée).

### Tâches

* Compléter le composant principal (`App`) pour gérer la sélection des ingrédients et passer les ingrédients sélectionnés comme props au composant `Recipe`.
* Étendre la logique dans le composant `Recipe` pour inclure plus de recettes basées sur différentes combinaisons d'ingrédients.
* (Optionnel) Améliorer l'interface utilisateur avec du CSS pour rendre l'application plus attrayante.

Cet exercice vous aidera à comprendre comment les données peuvent être passées à travers les composants et comment elles peuvent être utilisées pour conditionnellement afficher différentes parties de l'interface utilisateur, le tout sans l'utilisation de hooks pour la gestion de l'état.
