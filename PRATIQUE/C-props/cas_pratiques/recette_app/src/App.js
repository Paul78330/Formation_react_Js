// App.js
import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import Recipe from './components/Recipe';
import Wrapper from './commons/Wrapper';
import Header from './commons/Header';
import './App.css';

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientChange = (ingredient, isChecked) => {
    if (isChecked) {
      // Ajouter l'ingrédient sélectionné
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      // Retirer l'ingrédient désélectionné
      setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
    }
  };

  return (
  <div className="container">
    <Wrapper>
      <Header title="Application de Recettes de Cuisine" />
      <IngredientSelector onIngredientChange={handleIngredientChange} />
      <Recipe selectedIngredients={selectedIngredients} />
    </Wrapper>
  </div>
  );
}

export default App;
