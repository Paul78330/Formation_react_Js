// Vous n'avez pas besoin de regarder cela, mais vous pouvez le faire si vous le souhaitez !
//
// Dans ce module, nous utilisons certaines fonctions comme Math.random(), 
// Math.floor(), et Array.from() pour générer des fausses données.
// Lors de la construction des interfaces utilisateur, il peut être utile de
// simuler des versions simplifiées des données que notre code
// ira finalement chercher sur les serveurs backend

// Fonction pour générer un identifiant aléatoire
const getRandomId = () => `${Math.random()}-${Math.random()}`;

// Fonction pour générer un nombre aléatoire dans une plage donnée
const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

// Tableau des résumés météorologiques possibles
const summaries = [
  "Rainy",
  "Cloudy",
  "Partly Cloudy",
  "Partly Sunny",
  "Mostly Sunny",
  "Sunny"
];

// Fonction pour sélectionner un élément aléatoire d'une liste
const randomFromList = (list) => list[getRandomNumber(0, list.length)];

// Fonction pour générer une température aléatoire
const getTemp = () => {
  const avg = getRandomNumber(60, 30);

  return {
    avg,
    min: avg - 10,
    max: avg + 10
  };
};

// Fonction pour générer un élément météorologique aléatoire
const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100)
});

// Export des données météorologiques factices
export default {
  "/daily": Array.from({ length: 5 }, getWeatherItem), // Génère 5 éléments météorologiques pour les prévisions quotidiennes
  "/hourly": Array.from({ length: 24 }, getWeatherItem) // Génère 24 éléments météorologiques pour les prévisions horaires
};

/**
 * L'exportation dans ce code est un objet JavaScript qui contient deux propriétés : /daily et /hourly. Chaque propriété est un tableau de données météorologiques générées aléatoirement.

"/daily": Array.from({ length: 5 }, getWeatherItem): Cette ligne crée un tableau de 5 éléments en utilisant la fonction getWeatherItem pour générer chaque élément. Array.from() est une méthode JavaScript qui crée un nouveau tableau à partir d'un objet itérable ou d'un objet avec une propriété length. Ici, { length: 5 } est un objet avec une propriété length de 5, donc Array.from() crée un tableau de 5 éléments. Pour chaque élément, il appelle la fonction getWeatherItem pour générer les données météorologiques.

"/hourly": Array.from({ length: 24 }, getWeatherItem): Cette ligne est similaire à la précédente, mais elle crée un tableau de 24 éléments pour représenter les prévisions météorologiques de chaque heure d'une journée.

L'objet exporté peut être importé dans un autre fichier JavaScript en utilisant l'instruction import. Par exemple, vous pouvez faire import weatherData from './data.js' pour importer ces données dans un autre fichier. Ensuite, vous pouvez accéder aux prévisions quotidiennes avec weatherData["/daily"] et aux prévisions horaires avec weatherData["/hourly"].
 */