// Cette fonction retourne le temps actuel (en millisecondes depuis le 1er janvier 1970)
// augmenté de 15 secondes (15 * 1000 millisecondes). C'est utile pour définir
// une date d'expiration pour quelque chose dans le futur.
export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

// Cette variable est utilisée pour générer des identifiants uniques.
// Elle est initialisée à 0 et est incrémentée chaque fois qu'un nouvel identifiant est généré.
let nextId = 0;

// Cette fonction génère un nouvel identifiant unique.
// Elle retourne la valeur actuelle de nextId, puis l'incrémente.
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}