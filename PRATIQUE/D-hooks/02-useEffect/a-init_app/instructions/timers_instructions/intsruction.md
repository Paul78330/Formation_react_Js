1 .

Commençons par utiliser les quatre fonctions suivantes pour faire avancer le nombre stocké à `time`chaque seconde :

* `useEffect()`: l'Effet Hook, importé de la bibliothèque 'react'.
* [Fonction](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) `setInterval()` Javascript .
* `setTime()`: notre fonction de définition d'état.
* Une fonction de rappel de définition d'état : utilisée par `setTime()`pour calculer la valeur suivante de `time`en fonction de la valeur précédente de `time`

Ajoutez un effet qui utilise la `setInterval()`fonction pour appeler `setTime()`toutes les secondes (ou 1000 ms).

2 .

Notre valeur `time` se met à jour beaucoup trop rapidement car l'Effet Hook appelle notre effet après chaque rendu ! Notre effet crée un nouvel intervalle qui met à jour la valeur de `time` chaque seconde. Nous continuons d'ajouter de plus en plus d'intervalles qui mettent à jour la même variable `time`. Nous devons nettoyer nos anciens intervalles avant d'en ajouter de nouveaux !

Commençons par créer une variable `intervalId` et affectons-la à notre code `setInterval()` de l'étape précédente.

Ensuite, sous votre déclaration `intervalId`, utilisez le mot-clé `return` pour renvoyer une fonction de nettoyage. Notre fonction de nettoyage devrait utiliser la [`clearInterval()`fonction](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) .

3 .

Cela semble avoir résolu notre bug du trop grand nombre d'intervalles de mise à jour de la même variable !

Ajoutons une variable supplémentaire à notre minuterie et permettons à l'utilisateur de saisir un message pendant que la minuterie compte.

Tout d'abord, créons une variable d'état appelée `name` avec un setter d'état appelé `setName()`pour gérer la valeur de la zone de saisie. Définissez la variable d'état sur la valeur initiale d'une chaîne vide.

4 .

Super! Allons-y et mettons cette balise `input`.

Ajoutez un élément `<input>` à notre JSX. Définissez son attribut `value` sur notre variable d'état `name`.

5 .

Ensuite, définissez une fonction de gestionnaire d'événements nommée `handleChange()`. Ce gestionnaire d'événements prendra en compte la valeur de l'entrée de l'utilisateur et mettra à jour la variable d'état.

`handleChange()`doit utiliser la déstructuration d'objet sur son paramètre `target` à prendre en compte et utiliser le setter d'état `setName` pour définir la valeur de `name` sur `target.value`.

6 .

Excellent travail! Mettez ce gestionnaire d'événements `handleChange()` au travail !

Ajoutez l' écouteur d'événement `onChange` à la balise d'entrée, en le définissant sur `handleChange`.

Essayez de taper maintenant !

7 .

Euh oh. Plus de bugs. L'avez-vous déjà remarqué ? Tapez votre nom complet dans le champ de saisie de texte. Voyez-vous comment le minuteur semble arrêter de compter pendant que vous tapez ? Ce n'est pas ce que nous voulons !

Qu'est-ce qui se passe ici? Nous créons un nouvel intervalle après chaque rendu, cet intervalle appellera notre paramètre d'état pour mettre à jour `time`exactement une seconde après chaque rendu. Lorsque nous tapons dans le champ de saisie, notre composant continue de restituer, de nettoyer les anciens intervalles et d'en démarrer de nouveaux… mais notre paramètre d'état n'est appelé qu'une seconde après que nous ayons fini de taper !

Réparons cela une fois pour toutes ! Nous voulons vraiment utiliser un seul intervalle. Nous voulons que cet intervalle commence à s'écouler après notre premier rendu et nous voulons qu'il soit nettoyé après le rendu final.

Pour ce faire, utilisez un tableau de dépendances vide !
