// Vous n'avez pas besoin de regarder cela, mais vous pouvez le faire si vous le souhaitez !
//
// Dans ce module, nous utilisons des fonctions comme Math.random(), 
// Math.floor(), et Array.from() pour générer des fausses données.
// Lors de la construction d'interfaces utilisateur, il peut être utile de
// simuler des versions simplifiées des données que notre code
// récupérera finalement des serveurs backend

import DATA from "./data";

export function get(endpoint) {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(DATA)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const response = { status: 200, data: DATA[endpoint] };

      resolve(response);
    }, delay);
  });
}
