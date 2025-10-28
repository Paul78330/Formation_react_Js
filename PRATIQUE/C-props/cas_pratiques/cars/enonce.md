### Objectif de l'Exercice

**Créer une application React qui affiche une liste de voitures avec leurs couleurs.**

### Instructions

1. **Préparation**
   * Créez un nouveau projet React nommé cars.
   * Editer un composant `Car` dans un fichier `Car.js` comme point de départ.
2. **Création d'un composant `Garage`**
   * Créez un nouveau composant fonctionnel nommé `Garage`.
   * Dans ce composant, créez un tableau d'objets `cars`, où chaque objet représente une voiture et contient deux propriétés : `brand` (la marque de la voiture) et `color` (la couleur de la voiture).
   * Exemple d'objet voiture : `{ brand: "Peugeot", color: "rouge" }`.
3. **Affichage des voitures**
   * Utilisez la méthode `map` pour itérer sur le tableau de voitures dans le composant `Garage`.
   * Pour chaque voiture, retournez un composant `Car` en passant la marque comme `children` et la couleur comme prop `color`.
   * Assurez-vous que chaque composant `Car` a une `key` unique.
4. **Personnalisation de l'affichage**
   * Modifiez le style du composant `Car` pour qu'il reflète mieux le design souhaité pour votre application. Vous pouvez ajuster les styles en ligne ou utiliser une feuille de style CSS.
5. **Extension (Optionnelle)**
   * Ajoutez une fonctionnalité pour ajouter de nouvelles voitures à la liste à travers un formulaire simple avec des champs pour la marque et la couleur.
   * Implémentez une fonctionnalité pour supprimer une voiture de la liste.

### Résultat Attendu

À la fin de cet exercice, vous aurez créé une application qui affiche dynamiquement une liste de voitures avec leurs marques et couleurs spécifiques. Vous aurez pratiqués des props dans les composants fonctionnels et aurez eu l'occasion d'expérimenter avec les listes et la manipulation de données dans React.
