// components/IngredientSelector.js
import React from 'react';

// Définition du composant fonctionnel IngredientSelector
// Il prend en paramètre une fonction onIngredientChange qui sera appelée à chaque fois qu'un ingrédient est sélectionné ou désélectionné
const IngredientSelector = ({ onIngredientChange }) => {
  // Liste des ingrédients disponibles
  const ingredients = ["Farine", "Sucre", "Oeufs", "Lait"];

  // Le composant retourne une liste de cases à cocher pour chaque ingrédient
  return (
    <div>
      <h3 className='title'>Sélectionnez vos ingrédients:</h3>
      {ingredients.map(ingredient => (
        // Pour chaque ingrédient, on crée une case à cocher avec le nom de l'ingrédient comme label
        <label key={ingredient} style={{ display: 'block', margin: '5px' }}>
          <input
            type="checkbox"
            value={ingredient}
            // Lorsque la case à cocher est cliquée, on appelle la fonction onIngredientChange avec le nom de l'ingrédient et l'état de la case à cocher (cochée ou non)
            onChange={(e) => onIngredientChange(e.target.value, e.target.checked)}
          /> {ingredient}
        </label>
      ))}
    </div>
  );
};

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default IngredientSelector;
