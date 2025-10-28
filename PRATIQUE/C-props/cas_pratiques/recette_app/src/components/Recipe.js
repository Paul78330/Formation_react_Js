// components/Recipe.js
import React from 'react';
import ImgRecipe from '../commons/ImgRecipe';

const Recipe = ({ selectedIngredients }) => {
  let recipe;
  let stages = []; //initialisation d'un tableau vide pour les étapes de la recette
  let image = ""; //initialisation d'une chaine de caractères vide pour l'image de la recette
  switch (selectedIngredients.sort().join(',')) {
    case 'Farine,Lait,Oeufs,Sucre':
      recipe = "Recette gateau";
      stages = [
        "Mettre le chocolat à fondre avec 2 c.à.s d'eau.",
        "Mélanger le sucre et le beurre. Incorporer le chocolat. Ajouter les œufs, la farine et le sel.",
        "Mettre la pâte dans un moule en silicone ou recouvert de papier cuisson.",
        "Enfourner à 210 °C pendant 15 à 20 minutes. Quand le dessus du gâteau a l'air croustillant, c'est que le gâteau est prêt ! Rapide, hein ?",
        "L'astuce Chefclub"
      ];
      image = "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/ab1bf9bd-6279-4033-812f-8f2b3fd30c08.jpg"
      break;
    case 'Farine,Lait':
      recipe = "Recette crêpes nature";
      stages = [
        "Mélanger la farine, les œufs, le lait, le sucre vanillé, le sel. Faire fondre le beurre et l'ajouter avec le rhum puis mélanger pour obtenir une pâte à crêpes homogène.",
        "Faire sauter les crêpes et déguster avec la garniture de votre choix."
      ];
      image = "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/4fa5a089-bc31-438a-8502-c266d523a752_RfMw4g9.jpg"
      break;
    case 'Oeufs':
      recipe = "Recette d'omelette";
      stages = [
        "Dans un bol, casser les œufs et les fouetter. Les gourmands ajouteront une larme de lait. Assaisonner avec un moins du sel et du poivre mais cela peut-être aussi avec des herbes, du piment, du paprika, de la muscade, du cumin...",
        "Dans une poêle, ajouter un peu d'huile d'olive ou de beurre. Quand la poêle est prête à crépiter (qu'elle est chaude), ajouter les œufs battus.",
        "Ajouter les garnitures cuites de votre choix. Il est préférable de les cuire séparément et au préalable pour éviter qu'elles ne détrempent la bonne omelette.",
        "Décoler les bords de l'omelette peu à peu. Plier l'omelette en deux et servir !"
      ]
      image = "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/b89f102d-8762-4fe9-9fa5-e3b0b6944257_jJQj2iR.jpg"
      break;
    default:
      recipe = "Sélectionnez d'autres ingrédients pour une recette.";
  }

  return (
    <div className='card'>
      <h3>Recette Suggérée:</h3>
      <p>{recipe}</p>
      {image && <ImgRecipe  imageUrl={image}/>}
      {stages.length > 0 && 
        <ol>
          {stages.map((stage, index) => (
            <li key={index}>{stage}</li>
          ))}
        </ol>
      }
    </div>
  );
};

export default Recipe;