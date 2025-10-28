### USESTATE

Le Hook `useState` est une fonction intégrée dans React qui vous permet d'ajouter un état local à vos composants fonctionnels. Avant l'introduction des Hooks, seuls les composants de classe pouvaient avoir un état.

Voici comment `useState` fonctionne :

*const [state, setState] = useState(initialState);*

* `useState` est une fonction qui prend un argument : l'état initial. Il retourne un tableau de deux éléments.
* Le premier élément du tableau est la valeur actuelle de l'état. Dans l'exemple ci-dessus, `state` est la valeur actuelle de l'état.
* Le deuxième élément est une fonction qui vous permet de mettre à jour cet état. Dans l'exemple ci-dessus, `setState` est cette fonction. Lorsque vous voulez changer la valeur de l'état, vous appelez cette fonction avec la nouvelle valeur.


Voici un exemple d'utilisation de `useState` :

*import React, { useState } from 'react';*

*function Counter() {
  const [count, setCount] = useState(0);*

 *return (
    `<div>`
      `<p>`Vous avez cliqué {count} fois `</p>`
      <button onClick={() => setCount(count + 1)}>
        Cliquez moi
      `</button>`
    `</div>`
  );
}*

Dans cet exemple, `useState` est utilisé pour garder une trace du nombre de fois qu'un bouton a été cliqué. L'état initial est `0`. Chaque fois que le bouton est cliqué, la fonction `setCount` est appelée avec la nouvelle valeur de `count`, qui est l'ancienne valeur plus un.
