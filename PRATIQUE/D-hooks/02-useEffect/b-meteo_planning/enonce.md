### Instructions

1 .

Nous avons commencé à créer une application de planification météorologique qui récupérera des données sur la météo et permettra à nos utilisateurs d'écrire quelques notes à côté des prévisions. Beaucoup de bon code a déjà été écrit, mais il n'y a actuellement aucun rendu à l'écran.

Lisons le code et commençons à comprendre ce qui se passe ici. Selon nous, quelle partie de notre code empêche le rendu du composant ?

Dans notre JSX, nous essayons de mapper sur un tableau stocké par la variable d'état `data`, mais notre effet qui récupère ces données n'est appelé qu'après le premier rendu. Ainsi, lors du premier rendu, les données sont présentes `undefined` et tenter de les mapper `map()` provoque notre erreur `undefined`!

Évitons cette erreur en vérifiant si les données ont déjà été chargées. Si ce n'est pas le cas, alors nous voulons que notre composant fonction renvoie simplement une balise de paragraphe avec le texte « Chargement… ». Si les données ne sont plus indéfinies, alors les données ont été chargées et nous pouvons continuer et restituer le JSX complet !

2 .

Notre récupération de données se fait sous notre effet. Remarquez comment nous utilisons actuellement uniquement les messages `alert()` pour suivre les demandes et la réception de données de notre serveur. Au lieu de simplement chaîner les données de réponse et de les afficher dans un message d'alerte, stockons ces données dans notre état.

Une fois les données récupérées, utilisez notre fonction de définition d'état pour stocker ces données dans l'état de notre composant !

N'oubliez pas que nous voulons stocker un tableau dans notre variable d'état `data`, pas l'intégralité de l'objet de réponse.

3 .

Tapez chacun des champs de saisie des notes dans notre tableau. Que remarquez-vous ? Pourquoi pensez-vous que cela se passe?

Chaque fois que nous tapons un champ de saisie, le composant s'affiche à nouveau pour afficher la nouvelle valeur de ce champ. Même si nous n'avons pas besoin de nouvelles données du backend, notre composant récupère de nouvelles données après chaque rendu !

Utilisez un tableau de dépendances vide pour garantir que les données ne sont récupérées qu'après le premier rendu de notre composant.


4 .

Wow, ce petit changement de code a fait une énorme différence dans les performances de notre application de planification météo !

Apportons une amélioration supplémentaire. Avez-vous remarqué les boutons en haut de notre application ? Nous voulons que nos utilisateurs puissent choisir entre une planification basée sur des prévisions météorologiques quotidiennes et des prévisions météorologiques hebdomadaires. Cliquer sur ces boutons ne change actuellement rien. Réparons ça !

Le serveur possède deux points de terminaison différents appelés : `/daily `et `/hourly`. Utilisons la valeur de la variable d'état `forecastType` pour déterminer à quel point final notre effet doit demander des données.

Après avoir effectué cette modification, notre effet se comporte différemment en fonction de la valeur de `forecastType`. On pourrait dire que la façon dont nous utilisons notre effet en dépend ! Ajoutez cette variable à notre tableau de dépendances afin que l'effet soit à nouveau appelé, `data` mis à jour de manière appropriée, après un nouveau rendu où l'utilisateur a sélectionné un type de prévision différent.
