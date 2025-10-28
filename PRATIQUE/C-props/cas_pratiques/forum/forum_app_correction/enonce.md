### Forum CodeyOverflow

Dans ce projet, nous allons construire les prémices d'un forum web ! Un forum est un forum de discussion en ligne où les utilisateurs peuvent échanger leurs opinions sur une variété de sujets. L'élément le plus important d'un forum est la section des commentaires. C'est ce sur quoi nous allons travailler dans ce projet.

En créant cette application, vous perfectionnerez vos compétences dans les composants React en vous entraînant à utiliser des accessoires ainsi qu'en définissant, en rendant et en référençant des composants.

##### Configuration de l'en-tête et du corps

1 .

Jetez un œil aux fichiers fournis pour ce projet.

Il existe un fichier nommé **commentData.js** qui contient un tableau d'objets de commentaires avec `profileImg`, `username` et `comment` comme propriétés. Vous l'utiliserez pour remplir les commentaires sur le forum.

Votre section de commentaires sera composée de composants `Card` , qui seront composés de composants enfants plus petits `Header` et `Body` .

Ensuite, **App.js** contiendra le composant de niveau supérieur. Les données de **commentData.js** seront récupérées dans **App.js** et circuleront vers le bas de `App `vers `Card`, puis vers `Header` et `Body`.

**index.js** rendra le composant `App`. **style.css** et **index.html** gèrent le balisage et le style du forum.

Une fois que vous vous sentez à l'aise avec la structure de cette application, passez au point de contrôle suivant.

2 .

Commençons par le plus petit composant, le `Body`. Le `Body` est chargé d'afficher les commentaires que les utilisateurs ont rédigés. Cela fonctionnera avec la propriété `comment` de notre objet `comments` transmis de l'extrait de **commentData.js** .

Ouvrez **Body.js** et définissez votre composant `Body`.

Ce composant devrait recevoir `props`. Cet objet `props` contient toutes les données de notre commentaire, telles que le nom d'utilisateur, l'image de profil et le commentaire, mais `Body` fonctionne spécifiquement uniquement avec la propriété `comment`.

Demandez au composant de renvoyer un élément `<p>` contenant la propriété `comment` depuis `props`.

3 .

Exportez le composant `Body` après la définition de sa fonction afin qu'il puisse être importé et utilisé dans **Card.js** .

4 .

Ouvrez **Header.js** et définissez votre composant `Header`.

Ce composant sera responsable des propriétés `profileImg` et `username` de notre objet `comments` transmis .

Le composant `Header` doit recevoir `props`. Le composant doit renvoyer deux éléments, un élément `<img>` dont l'attribut `src` recevra la propriété `profileImg` depuis `props` et un élément `<h1>` affichant `username` depuis `props`.

5 .

Exportez le composant `Header` après la définition de sa fonction afin qu'il puisse être importé et utilisé dans **Card.js** .

##### Configuration de la carte

6 .

Bon travail! Faisons un bref détour vers **App.js** .

Actuellement, le composant `App` est vide. Il s'agit du composant de niveau supérieur et il est responsable du renvoi de l'interface à restituer. Dans ce cas, il renverra une instance du composant `Card` pour chaque commentaire dans **commentData.js** .

Dans le corps du composant `App`, mappez le tableau `comments` avec l'argument nommé `comment` et renvoyez une instance du composant `Card`.

Pour chaque composant, donnez-lui un attribut nommé `commentObject` et la valeur `{comment}`.

7 .

Bon! Vous avez configuré `App` pour la transmission des informations au composant `Card`. Rassemblons les pièces.

Ouvrez **Card.js** et importez les composants `Header `et `Body`. `Card` sera la « coque » externe qui contient nos deux composants plus petits : `Card` est le parent et `Header` et `Body` sont les composants enfants.

Commencez à définir le composant `Card`. `Card` devrait recevoir `props`.

`Card` doit renvoyer une instance du composant `Header` et une instance du composant `Body`.

8 .

Auparavant, dans **App.js** , vous avez transmis via `Card` un attribut `commentObject` contenant un objet avec trois propriétés ( `profileImg`, `username`, et `comment`).

Il est temps d'y accéder et enfin de les transmettre aux composants enfants : `Header `et `Body`.

`Header` attend deux accessoires, `profileImg` et `username`.

Donnez à l' instance `Header` un attribut nommé `profileImg` et la valeur de `props.commentObject.profileImg`.

9 .

Ensuite, donnez à l' instance `Header` un attribut nommé `username `et la valeur de `props.commentObject.username`.

10 .

L' instance `Body` attend un accessoire `comment`.

Donnez à l' instance `Body` un attribut nommé `comment `et la valeur de `props.commentObject.comment`.

11 .

Maintenant, exportez le composant `Card` afin qu'il puisse être importé et utilisé.

12 .

Ouvrez à nouveau **App.js** et importez le composant `Card` qui est maintenant défini et exporté.

13 .

Ensuite, exportez le composant `App`.
