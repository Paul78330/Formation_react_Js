### Instructions

1 .

Créons un programme qui documente combien de fois vous avez cliqué sur la page.

Écrivez un gestionnaire d'événements nommé `increment()` qui sera chargé de suivre le nombre de fois qu'un utilisateur a cliqué. Définissez cette fonction pour qu'elle appelle `setClickCount()` avec une fonction de rappel de définition d'état, en ajoutant `1` à la valeur précédente de `clickCount`.

2 .

Importez le hook `useEffect()` et appelez-le avec un effet qui ajoute un écouteur d'événements  pour les événements `'mousedown'` sur l'objet `document`. Lorsqu'un événement `'mousedown'` se produit n'importe où sur le `document`, nous souhaitons que notre gestionnaire d'événements `increment()` soit appelé.

3 .

Si vous ne l'avez pas déjà fait, exécutez notre code et cliquez sur la fenêtre du navigateur. Ce qui se passe? Pourquoi cela arrive-t-il?

Chaque fois que notre composant est rendu, notre effet est appelé, ajoutant un autre écouteur d'événement. En quelques clics et rendus, nous avons attaché de nombreux auditeurs d'événements au DOM ! Nous devons nettoyer après nous !

Mettez à jour notre effet pour qu'il renvoie une fonction de nettoyage qui supprimera notre dernier écouteur d'événement du DOM.

**indice :** Notre fonction de nettoyage est une nouvelle fonction renvoyée par notre effet. Cette fonction de nettoyage doit utiliser `removeEventListener()`Notre fonction de nettoyage est une nouvelle fonction renvoyée par notre effet. Cette fonction de nettoyage doit utiliser `removeEventListener()`
