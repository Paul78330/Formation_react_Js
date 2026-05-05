import { useState } from 'react';

function Chrono() {
  // Étape 1 : Initialiser l'état
  const [count, setCount] = useState(0);

  // Étape 2 : Créer la fonction increment()
  // Utilise une fonction de rappel car la nouvelle valeur dépend de l'ancienne
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Étape 3 : Créer la fonction start()
  // Appelle setCount() 5 fois avec fonction de rappel pour ajouter 5 au compteur
  const start = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  // Étape 4 : Créer la fonction reset()
  // Pas besoin de fonction de rappel car on ne dépend pas de la valeur précédente
  const reset = () => {
    setCount(0);
  };

  // Étape 5 : Créer l'interface JSX
  return (
    <div>
      <h1>Chronomètre : {count}</h1>
      <button onClick={increment}>Incrémenter (+1)</button>
      <button onClick={start}>Démarrer (+5)</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Chrono;
