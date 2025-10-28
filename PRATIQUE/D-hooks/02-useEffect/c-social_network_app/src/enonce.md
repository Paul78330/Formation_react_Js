### Instructions

1 .

Pour le moment, ce code semble très bien fonctionner. Il existe trois requêtes réseau différentes effectuées dans un seul effet et de nombreuses données différentes et sans rapport sont gérées dans une seule variable d'état. Mettons-nous au travail pour diviser ces appels simples `useState() `en hooks `useEffect()` séparés et plus simples. Cela rendra ce code plus facile à comprendre, à développer et à réutiliser à mesure que nous continuons à améliorer notre application !

Commencez à refactoriser ce composant :

* Utilisez un Hook State distinct pour `menu`, `newsFeed` et `friends`.
* Utilisez ces nouveaux paramètres d'état plutôt que `setData()` dans l'effet.
* Simplifiez notre JSX pour utiliser ces nouvelles variables d'état au lieu de `data`.

2 .

`Promise.all()` nous a été utile lorsque nous avons regroupé toutes nos données dans un seul objet. Il a appelé tous les services backend, et lorsqu'ils ont tous renvoyé des réponses, nous avons alors pu appeler nos setters d'état avec les réponses.

Parce que nous gérons désormais ces valeurs séparément, nous pouvons supprimer cette complexité ! Dans notre effet, appelez la fonction `get()` trois fois pour les trois collections de données différentes que notre composant souhaite restituer, sans en utiliser `Promise.all()`davantage.

3 .

Maintenant que nous avons trois appels backend distincts, continuons à séparer les préoccupations en divisant chacune d'elles en trois Effect Hooks distincts !

4 .

Chaque appel `useEffect()` fonctionne avec un appel `useState()` correspondant. Réorganisons notre code pour montrer cette relation plus clairement, rendant la logique plus facile à lire et à réutiliser !

Pour chacune de ces trois collections de données, regroupez le State Hook et le Hook Effet associés côte à côteEffet. Cela aidera à préciser quels Hooks travaillent ensemble pour gérer chaque modèle de données distinct.
