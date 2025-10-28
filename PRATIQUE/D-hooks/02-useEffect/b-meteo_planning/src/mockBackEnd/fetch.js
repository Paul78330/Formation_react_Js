// Vous n'avez pas besoin de regarder cela, mais vous pouvez le faire si vous le souhaitez !

// Ce module exporte une fonctionnalité de récupération de fausses données.
// Dans une vraie application, cela récupérerait des données sur Internet, mais
// ce module attend juste un peu avant de répondre.

// Importation des données factices
import DATA from "./data";

// Fonction pour simuler une requête GET
export function get(endpoint) {
  // Génère un délai aléatoire entre 0 et 1000 millisecondes
  const delay = Math.floor(Math.random() * 1000);

  // Retourne une nouvelle promesse
  return new Promise((resolve, reject) => {
    // Exécute le code après le délai spécifié
    setTimeout(() => {
      // Vérifie si le point de terminaison est valide
      if (!DATA.hasOwnProperty(endpoint)) { 
        // Si le point de terminaison n'est pas valide, génère une liste de points de terminaison valides
        const validEndpoints = Object.keys(DATA) // Récupère les clés de l'objet DATA
          .map((endpoint) => ` - "${endpoint}"`) // Transforme chaque clé en une chaîne de caractères
          .join("\n "); // Joint toutes les chaînes de caractères avec un saut de ligne. Cela crée une liste formatée de points de terminaison valides, où chaque point de terminaison est sur une nouvelle ligne.

        /**
         * Dans ce contexte, endpoint est une chaîne de caractères qui représente un point de terminaison d'une API. Un point de terminaison d'API est une URL spécifique où une API peut être accédée. Par exemple, dans une API météo, vous pourriez avoir un point de terminaison /daily pour obtenir les prévisions quotidiennes et un point de terminaison /hourly pour obtenir les prévisions horaires.

        Dans ce code, endpoint est utilisé pour récupérer des données spécifiques de l'objet DATA. Si DATA a une propriété qui correspond à endpoint, alors ces données sont renvoyées. Si DATA n'a pas cette propriété, alors endpoint n'est pas un point de terminaison valide et une erreur est générée.
         */



        // Rejette la promesse avec un message d'erreur
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      // Si le point de terminaison est valide, crée une réponse
      const response = { status: 200, data: DATA[endpoint] };

      // Résout la promesse avec la réponse
      resolve(response);
    }, delay);
  });
}

//Donc, si DATA contient les points de terminaison daily et hourly, validEndpoints sera une chaîne de caractères qui ressemble à ceci :
// - "/daily"
// - "/hourly"

