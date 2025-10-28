import React from 'react';
import GroceryItem from './GroceryItem'; // Importation du composant GroceryItem

function App() {
  // Utilisation du composant GroceryItem pour afficher les articles d'épicerie
  return (
    <div>
      <h1>Épicerie en ligne</h1>
      <GroceryItem name="Eggs" />
      <GroceryItem name="Banana" />
      <GroceryItem name="Strawberry" />
      <GroceryItem name="Bread" />
    </div>
  );
}

export default App;
