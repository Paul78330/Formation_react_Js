## Configuration

1 .

Cliquez sur Enregistrer pour voir l'état actuel des choses.

Les informations de contact dans le navigateur semblent correctes, mais elles doivent être masquées jusqu'à ce que vous saisissiez un mot de passe !

Regardez dans **Contact.js** . Vous pouvez voir un composant `Contact`fonctionnel. À l'intérieur se trouve une fonction appelée `handleSubmit()`, qui sera chargée d'autoriser l'utilisateur à accéder au système.

Il y a déjà beaucoup de logique ici. Au fur et à mesure que nous progressons, vous commencerez à apprendre ce que est `useState`. Pour l'instant, sachez simplement que vous pouvez vérifier si un utilisateur a saisi le bon mot de passe en vérifiant si `authorized` est `true`.

2 .

Regardons les balises `<h1></h1>` dans la déclaration `return`.

À l'heure actuelle, l' élément `<h1>` affiche le texte `Contact`. Si un utilisateur n'a pas été autorisé, vous souhaitez que l'élément `<h1>` s'affiche à la place de `Enter the Password`.

En utilisant ce que vous savez des conditions dans les composants, faites en sorte que l' `<h1>`élément s'affiche `"Contact"`uniquement s'il `authorized`est vrai. Si `authorized`est faux, alors l' `<h1>`élément doit afficher `"Enter the Password"`.

3 .

Vérifions si cette dernière étape fonctionne correctement.

Pour l'instant, le navigateur devrait dire « Entrez le mot de passe ». C'est parce que `authorized` a la valeur initiale de `false`.

Modifiez la ligne 5 pour qu'elle soit `useState(true)` au lieu de `useState(false)`pour l'instant. Vous devriez voir que le texte dit désormais « Contact ». Ne vous inquiétez pas du fonctionnement `useState`, nous y reviendrons dans une prochaine leçon React.

Si cela fonctionne, assurez-vous de rétablir `useState(false)` avant de continuer.

## Le formulaire de connexion

4 .

Si l'utilisateur n'est pas autorisé, vous souhaitez qu'il voie un formulaire de connexion dans lequel il peut saisir un mot de passe. Créons ce formulaire de connexion !

Avant l'instruction `return` mais après la fonction `handleSubmit()`, déclarez une nouvelle variable nommée `login`.

Définir `login `égal à un élément JSX `<form></form>`.  `<form></form>` va avoir plusieurs enfants, alors mettez-le entre parenthèses !

Donnez l' attribut `<form></form>` , `action="#"` pour vous assurer qu'il ne redirige pas.

5 .

Bien! Donnons maintenant à votre formulaire quelques `<input />` que l'utilisateur devra remplir.

Entre les balises `<form></form>`, écrivez deux balises `<input />`. Donnez les deux premiers attributs :

* `type="password"`
* `placeholder="Password"`

Donnez le deuxième `<input />`attribut : `type="submit"`.

## Les coordonnées

6 .

Maintenant, masquons les informations de contact.

Après votre variable `login`, déclarez une autre variable nommée `contactInfo`. Définissez-le égal aux parenthèses vides :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="codecademy-js" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk12">const contactInfo</span><span class="mtk1"> = (</span></span><br/><span><span class="mtk1">); </span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Assurez-vous qu'il se trouve toujours à l'intérieur du composant fonction et avant l' instruction `return`.

Ensuite, déplacez l' élément `<ul></ul>` dans l'instruction return entre les parenthèses pour les quelles nous venons de créer `contactInfo`!

7 .

Super! En enregistrant deux expressions JSX en tant que variables, vous êtes prêt à basculer entre elles.

Dans l' instruction `return` du composant, créez une nouvelle ligne juste en dessous de l' élément `<h1></h1>`. Sur cette nouvelle ligne, utilisez un opérateur ternaire. Si `authorized` est  `true`, effectuez un ternaire `contactInfo`. Sinon, le ternaire `login`.

## Gestion de la soumission

8 .

Dans le composant fonction `Contact`, vous voyez une fonction nommée `handleSubmit()`.

Cette fonction vérifiera si un mot de passe soumis est égal à `'swordfish'`. Si c'est le cas, alors `authorized` deviendra `true`.

Vous devez appeler `handleSubmit` chaque fois qu'un utilisateur clique sur le bouton Soumettre.

Donnez `<form></form> sur `attribut `onSubmit` . Définissez la valeur de l'attribut égale à la fonction `handleSubmit`.

9 .

Essayez de saisir un mot de passe incorrect et cliquez sur « Soumettre ». Rien ne devrait arriver.

Essayez maintenant de saisir « swordfish ». Le site Web devrait révéler les coordonnées !
