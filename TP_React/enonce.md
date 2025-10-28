### Pensées passagères (TP React Js)

Et si vous pouviez publier quelque chose en sachant qu'il ne vivrait pas éternellement ? Dans ce projet, nous allons construire une place pour nos pensées passagères. Une fois que vous aurez ajouté une courte pensée, elle disparaîtra après seulement 15 secondes.

Commençons!

## Ajouter des pensées

1 .															1 point

Exécutez l'application et jetez un œil à ce que nous avons jusqu'à présent.

La structure de l'application est là, mais… eh bien, ça ne marche pas vraiment ! Il manque actuellement trois pièces majeures :

1. Si vous essayez d'ajouter une nouvelle pensée, cela actualise toute la page et ne fait rien.
2. Si vous essayez de supprimer une pensée manuellement, elle plante !
3. Les pensées ne disparaissent jamais, ce qui va à l’encontre de tout l’intérêt de l’application.

Avant de commencer, parlons du principal élément d'état stocké par l'application : un ensemble d'objets de pensée. 

Chacun de ces objets aura trois propriétés :

* `id`, un identifiant unique pour cette pensée
* `text`, le texte de la pensée
* `expiresAt`, le temps d'expiration de la pensée, représenté par un nombre

Jetez un œil à **App.js** . Vous verrez que nous définissons deux idées de départ aux lignes 8 à 19 comme ci-dessous :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="codecademy-js" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk12">const </span><span class="mtk1">[</span><span class="mtk9">thoughts</span><span class="mtk1">, </span><span class="mtk9">setThoughts</span><span class="mtk1">] = </span><span class="mtk9">useState</span><span class="mtk1">([</span></span><br/><span><span class="mtk1">  {</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">id</span><span class="mtk1">: </span><span class="mtk9">generateId</span><span class="mtk1">(),</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">text</span><span class="mtk1">: </span><span class="mtk8">'This is a place for your passing thoughts.'</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">expiresAt</span><span class="mtk1">: </span><span class="mtk9">getNewExpirationTime</span><span class="mtk1">(),</span></span><br/><span><span class="mtk1">  },</span></span><br/><span><span class="mtk1">  {</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">id</span><span class="mtk1">: </span><span class="mtk9">generateId</span><span class="mtk1">(),</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">text</span><span class="mtk1">: </span><span class="mtk8">"They'll be removed after 15 seconds."</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">expiresAt</span><span class="mtk1">: </span><span class="mtk9">getNewExpirationTime</span><span class="mtk1">(),</span></span><br/><span><span class="mtk1">  },</span></span><br/><span><span class="mtk1">]);</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Cela définira l'état à quelque chose comme ceci :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="codecademy-js" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">[</span></span><br/><span><span class="mtk1">  {</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">id</span><span class="mtk1">: </span><span class="mtk9">0</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">text</span><span class="mtk1">: </span><span class="mtk8">'This is a place for your passing thoughts.'</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">expiresAt</span><span class="mtk1">: </span><span class="mtk9">1600624968405</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">  },</span></span><br/><span><span class="mtk1">  {</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">id</span><span class="mtk1">: </span><span class="mtk9">1</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">text</span><span class="mtk1">: </span><span class="mtk8">"They'll be removed after 15 seconds."</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">    </span><span class="mtk10">expiresAt</span><span class="mtk1">: </span><span class="mtk9">1600624968405</span><span class="mtk1">,</span></span><br/><span><span class="mtk1">  },</span></span><br/><span><span class="mtk1">]</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Lorsque nous créons de nouveaux objets de pensée, nous ferons quelque chose de très similaire à ceci. Commençons!

2 .															3 points

Ouvrez le composant `App` dans **App.js** . Vous pouvez voir que nous avons déjà configuré le tableau de pensées dans une variable appelée `thoughts`, à l'aide du hook `useState()`. Nous avons également `setThoughts()`, une fonction que nous pouvons appeler pour mettre à jour la liste des pensées. Connectons ces éléments afin que les utilisateurs puissent ajouter de nouvelles pensées.

Tout d'abord, nous devrons écrire une nouvelle fonction à l'intérieur de `App()`, appelée `addThought()`. Il faudra un seul argument, `thought`, et il se placera dans le tableau des pensées avec `setThoughts()`.

À l'intérieur de `addThought()`, nous appellerons `setThoughts()` avec une fonction qui renvoie un nouvel état : le tableau avec le new `thought` au début.

Ajoutez cette fonction entre la fin de l'appel `useState()` (la ligne se terminant par `]);`) et le `return`.

3 .															1 point

Nous avons maintenant une fonction qui mettra à jour l'état, mais nous devons l'utiliser. Plus précisément, transmettons-le au composant `AddThoughtForm` en tant qu'accessoire.

Dans **App.js** , recherchez où `<AddThoughtForm>` est rendu. Passez un accessoire nommé `addThought` et donnez notre fonction nouvellement créée `addThought()` comme valeur.

4 .															2 points

Maintenant que nous passons `addThought()` au composant `AddThoughtForm`, il est temps pour nous de faire en sorte que ce composant appelle réellement cette fonction.

`AddThoughtForm`a aura un certain état. Plus précisément, il contiendra la valeur de la saisie de texte et, lorsque l'utilisateur soumettra le formulaire, nous prendrons cette saisie et l'utiliserons dans un appel à `addThought()`.

Ouvrez **AddThoughtForm.js** .

Sur la première ligne, nous devrons importer `useState()` et React. Mettez à jour l'importation pour importer à la fois `React` et `useState()`.

Ensuite, à l'intérieur de `AddThoughtForm`, configurez l'état initial de la saisie de texte sous forme de chaîne vide.

Après avoir fait cela, vous devrez écrire une fonction appelée `handleTextChange()` qui sera appelée lorsque l'entrée changera. Il prendra l'événement comme argument et appellera `setText()` pour mettre à jour l'état.

Enfin, vous devrez connecter ces deux éléments à l'entrée. Passez un accessoire `text` appelé `value`, et transmettez à  `handleTextChange()`un accessoire appelé `onChange`.

Nous stockons maintenant l'état de l'entrée !

5 .															2 points

Maintenant que l'état de l'entrée est stocké, nous devrons créer un nouvel objet de pensée lorsque le formulaire sera soumis. La gestion de l'évènement de soumission du formulaire est la première étape pour y parvenir.

Créez une nouvelle fonction pour gérer la soumission du formulaire appelée `handleSubmit()`. Il prendra l'évènement comme argument (comme le `handleTextChange()` fait maintenant).

Pour empêcher le formulaire d'actualiser la page, appelez `event.preventDefault()` à l'intérieur de  `handleSubmit()`. Cela empêche le navigateur d'effectuer son comportement par défaut lorsqu'un formulaire est soumis.

Enfin, ajoutez le gestionnaire de soumission au formulaire en passant `onSubmit={handleSubmit}`.

Une fois cela fait, le formulaire ne devrait plus actualiser la page. (Rien d'autre ne se produira non plus, mais nous réglerons ce problème bientôt.)

6 .															2 points

Maintenant, nous allons mettre à jour `handleSubmit()` pour… eh bien, soumettre réellement les données !

Dans **utilities.js,** vous verrez qu'il existe deux fonctions : `generateId()` et `getNewExpirationTime()`. Nous utiliserons ces fonctions pour obtenir les valeurs de l'identifiant unique et le délai d'expiration des nouveaux objets de pensée.

De retour dans **AddThoughtForm.js** , Dans `handleSubmit()` après l'appel à `event.preventDefault()`, créez un nouvel objet de pensée avec ses trois propriétés requises : `id`(généré par `generateId()`), `text`(à partir des étapes précédentes) et `expiresAt`(généré par `getNewExpirationTime()`). Passez-le à `addThought()`.

Si vous ne savez pas comment créer un objet de pensée, reportez-vous à la procédure à suivre dans **App.js** .

Une fois cela fait, vous devriez pouvoir soumettre le formulaire et voir la nouvelle pensée apparaître à l’écran !

7 .															0.5 point

Bien que nous créions de nouvelles idées, vous remarquerez peut-être une partie de l'expérience utilisateur qui semble un peu peu intuitive : la saisie n'est pas effacée lorsque vous soumettez le formulaire. Cela signifie que tout ce que vous avez tapé reste présent, même si ce n'est probablement pas le cas.

Effacez le texte de l'entrée après avoir ajouté une nouvelle pensée.

8 .															1 point

Il ne reste plus qu'une chose à faire ici : si l'utilisateur n'a rien tapé mais qu'il soumet quand même le formulaire, une pensée vide sera créée. Nous avons tous des pensées vides de temps en temps, mais nous ne voulons probablement pas les ajouter à notre application.

Pour résoudre ce problème, n'appelez que `addThought() `si l'utilisateur a tapé quelque chose dans la zone de texte. Vous utiliserez une instruction `if` pour vérifier la longueur de la variable `text` avant de créer et d'ajouter un nouvel objet de pensée. (Assurez-vous de toujours appeler `event.preventDefault()`, même si l'utilisateur n'a rien tapé.)

## Supprimer manuellement des pensées

9 . 															2 points

L'application devrait proposer deux façons de supprimer des pensées :

1. Suppression manuelle, lorsque l'utilisateur clique sur le bouton Supprimer.
2. Suppression automatique après 15 secondes.

Commençons par la première tâche. Cela nous aidera à construire l’échafaudage du second.

Ouvrez **App.js** .

Tout comme nous avons ajouté une fonction pour ajouter de nouvelles pensées, nous devrons également créer une fonction pour les supprimer.

Sous `addThought()`, créez une nouvelle fonction appelée `removeThought()`. Il prendra l'ID de la pensée que nous voulons supprimer dans un argument appelé `thoughtIdToRemove`, et il appellera `setThoughts()` pour supprimer la pensée.

Pour ce faire, vous appellerez `thoughts.filter()` pour filtrer la pensée que nous souhaitons supprimer.


10 .															2 points

Une fois cela fait, tout ce que vous aurez à faire est de transmettre cette nouvelle fonction comme accessoire au composant `Thought`. Ajoutez un nouveau accesoire (props) appelé `removeThought` avec la fonction nouvellement créée `removeThought()`comme valeur.

Si vous avez réussi, vous devriez maintenant pouvoir supprimer manuellement des pensées en cliquant sur le bouton Supprimer à côté de chaque pensée.

## Laisser les pensées s'éloigner

11 .															0.5 point

L'application se rapproche, mais il nous manque encore la fonctionnalité principale : faire disparaître les pensées.

Lorsqu'un composant `Thought` est rendu, nous voulons lancer un compte à rebours. Une fois le compte à rebours expiré, nous souhaitons appeler `removeThought()`. Nous ferons cela avec un hook d'effet.

Ouvrez **Thought.js** .

Commencez par importer `useEffect()` depuis React.

12 .															2 points

Commençons par définir une minuterie dans le composant `Thought` avec `setTimeout()`.

À l'aide du hook `useEffect()`, appelez `setTimeout()`. Le premier argument doit être une fonction qui appelle `alert('Time has passed!')`(ou tout autre exemple de texte de votre choix – nous le supprimerons plus tard). Cela devrait arriver lorsque la pensée expire. Vous pourriez calculer cela comme ceci :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="codecademy-js" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk12">const timeRemaining</span><span class="mtk1"> = </span><span class="mtk9">thought</span><span class="mtk1">.</span><span class="mtk10">expiresAt</span><span class="mtk1"> - </span><span class="mtk9">Date</span><span class="mtk1">.</span><span class="mtk10">now</span><span class="mtk1">();</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Assurez-vous de vous rappeler deux choses :

1. Renvoyez une fonction qui efface le délai d'attente lorsque vous avez terminé ! C'est toujours une bonne pratique de nettoyer vos effets.
2. Ajoutez `[thought]`comme dépendance, dans le deuxième argument de `useEffect()`. Vous souhaitez réexécuter l'effet chaque fois que c'est `thought`différent.

Une fois cela fait, vous devriez voir « Le temps est passé ! » alertes après 15 secondes.

13 .															1 point

Il ne reste plus qu'une chose à faire : remplacer  `alert()`par un appel à `removeThought()`. Cela devrait déjà être transmis en tant que `props`, il vous suffira donc de supprimer la ligne `alert()` et de la remplacer par un appel à `removeThought()`.

Vous devrez appeler `removeThought()` avec l'identifiant de cette pensée, que vous pourrez obtenir avec `thought.id`.

Une fois cela fait, essayez d'ajouter quelques pensées et regardez-les disparaître… c'est comme votre cerveau, mais vous l'avez construit avec React.
