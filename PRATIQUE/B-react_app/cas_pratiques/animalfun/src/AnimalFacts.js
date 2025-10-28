// Importation des dépendances et des données
import { animals } from './animals';
import React from 'react';

// Titre initial
const title = '';

// Image de fond
const background = <img className="background" alt='ocean' src='/images/ocean.jpg'/>;

// Fonction pour afficher un fait aléatoire sur l'animal cliqué
function displayFact(e){
  // Récupération de l'animal à partir de l'attribut alt de l'image cliquée
  const animal = e.target.alt;
  // Vérification que l'animal existe dans les données
  if (animals[animal]) {
    // Sélection d'un fait aléatoire sur l'animal
    const index = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[index];

    // Affichage du fait dans l'élément avec l'ID 'fact'
    const p = document.getElementById('fact');
    p.innerHTML = "Here's a fun fact : " + funFact;
  }
}

// Création des images pour chaque animal
const images = [];
for(const animal in animals){
  const image = (
    <img
      onClick={displayFact} // Ajout d'un gestionnaire d'événement pour afficher un fait lors du clic
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />
  );
  images.push(image);
}

const showBackground = true;

// Composant principal
function AnimalFacts() {
  return (
    <div>
      <h1>
        {title === '' ? 'Click an animal for a fun fact' : title}
      </h1>
      {showBackground && background} // Affichage de l'image de fond si showBackground est vrai
      <p id='fact'></p> // Élément pour afficher les faits
      <div className='animals'>{images}</div> // Affichage des images des animaux
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default AnimalFacts;

