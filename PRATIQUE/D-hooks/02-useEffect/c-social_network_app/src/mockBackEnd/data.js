// You don't need to look at this, but you can if you want!
//
// In this modele, we use some functions like Math.random(), 
// Math.floor(), and Array.from() to generate some fake data.
// When building user interfaces, it can be helpful to 
// mock out simplified versions of the data that our code
// will eventually fetch from backend servers

// Fonction pour générer un identifiant aléatoire
const getRandomId = () => `${Math.random()}-${Math.random()}`;

// Fonction pour générer un nombre aléatoire dans une plage donnée
const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

// Fonction pour sélectionner un élément aléatoire d'une liste
const randomFromList = (list) => list[getRandomNumber(0, list.length)];


const names = [
  "Anita",
  "Anima",
  "Asa",
  "Asha",
  "Azami",
  "Laila",
  "Haris",
  "Talia",
  "Noor",
  "Malik",
  "Basia",
  "Arya",
  "Duska",
  "Idris",
  "Kala",
  "Kamal",
  "Baz",
  "Ken",
  "Evander",
  "Kim",
  "Lina",
  "Lulu",
  "Caris",
  "Nia",
  "Paz",
  "Raisa",
  "Samir",
  "Zahara"
];



// Fonction pour générer un faux élément de nouvelles
const getNewsItem = () => ({
  id: getRandomId(),
  title: "Title Placeholder",
  message: "Message about item in the news feed (placeholder)",
  imgSrc:
    "https://via.placeholder.com/300x100.png?text=News+Feed+Image+Placeholder"
});

// Fonction pour générer un faux ami
const getFriend = () => ({
  id: getRandomId(),
  name: randomFromList(names),
  isOnline: Math.random() < 0.5
});

// Exportation d'un objet contenant des données factices pour différents points de terminaison
export default {
  "/menu": ["Home", "Profile", "Events", "Clubs"],
  "/news-feed": Array.from({ length: 5 }, getNewsItem),
  "/friends": Array.from({ length: 12 }, getFriend)
};
