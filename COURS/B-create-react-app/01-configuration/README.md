# Création d'une application React

Utilisez create-react-app pour créer facilement une application React sur votre propre ordinateur.

## Introduction

*React* est un framework d'interface utilisateur développé par Facebook. Son taux d'adoption par les développeurs augmente rapidement et a été classé comme le framework Web le plus apprécié dans l' [enquête 2019 auprès des développeurs Stack Overflow](https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted) . 

## Se préparer

Nous utiliserons le *gestionnaire de packages Node (npm)* , vous devrez donc avoir *Node* installé sur votre ordinateur. Pour vérifier si Node est installé, exécutez cette commande dans votre terminal :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">node -v</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Si Node est installé, cette commande renverra un numéro de version, comme `v12.18.1`.

S'il n'est pas déjà installé, suivez les étapes de [Configuration locale ](https://www.codecademy.com/content-items/c4fe3060dbc61fc82d810c4ea06c29a8)de Node avant de continuer.

Lorsque vous installez Node, npm est également automatiquement installé sur votre ordinateur. Cependant, npm est un projet distinct de Node.js et a tendance à être mis à jour plus fréquemment. De ce fait, même si vous venez d'installer Node (et donc npm), c'est une bonne idée de mettre à jour votre npm. Heureusement, npm sait se mettre à jour !

Pour mettre à niveau vers la dernière version de npm sur *nix (OSX, Linux, etc.), vous pouvez exécuter cette commande dans votre terminal :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">sudo npm install -g npm@latest</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

Pour effectuer une mise à niveau sous Windows, suivez les étapes décrites [dans la documentation npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) .

## 1. Configuration de l'application passe-partout

Il est possible de créer manuellement une application React, mais Facebook a créé un package Node [*create-react-app*](https://create-react-app.dev/) pour générer une version passe-partout d'une application React.

En plus de fournir quelque chose qui fonctionne immédiatement, cela présente l'avantage supplémentaire de fournir une structure cohérente pour les applications React que vous reconnaîtrez lorsque vous vous déplacez entre les projets React. Il fournit également un script de build et un serveur de développement prêts à l'emploi.

Nous utiliserons *npx* , un outil d'exécution de packages fourni avec npm 5.2+ et supérieur, pour installer et exécuter `create-react-app`. Cela garantira que la dernière version de `create-react-app` est utilisée.

Ouvrez votre terminal.

* Si vous avez déjà effectué une installation globale `create-react-app` via `npm install -g create-react-app`, il est recommandé de désinstaller d'abord le package. Dans votre terminal, exécutez ces commandes :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">npm uninstall -g create-react-app</span></span><br/><span><span class="mtk1">npx create-react-app myfirstreactapp</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

* Si vous n'avez jamais installé `create-react-app` auparavant, vous pouvez simplement exécuter cette commande :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">npx create-react-app myfirstreactapp</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

* Si *Yarn* est installé, vous utiliserez  `create-react-app` par défaut pour créer de nouveaux projets. Si vous préférez utiliser npm, vous pouvez ajouter `--use-npm` à la commande de création. Il ressemblera à ceci:

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">npx create-react-app myfirstreactapp --use-npm</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

(N'hésitez pas à remplacer `myfirstreactapp` par le nom de votre choix, à condition qu'il ne contienne pas de majuscules :-))

Une fois terminé, vous obtiendrez quelques conseils rapides sur la façon d'utiliser l'application :

![createReactAppCommands](https://content.codecademy.com/programs/react/creating-a-react-app/npm_react_commands.png)

Avant d'exécuter l'application, examinons la structure de l'application et voyons ce qu'elle contient.

## 2. Structure de l'application React

Changez de répertoire et accédez à l'application que vous venez de créer et ouvrez l'application dans l'éditeur de texte de votre choix. Vous devriez voir la structure de fichier suivante :

<pre class="styles_pre__Vzth4"><pre class="gamut-it1bt3 e1aon2sq0"><code><div data-lang="plaintext" class="gamut-13bvm8t e5rxebe0"><span><span class="mtk1">myfirstreactapp</span></span><br/><span><span class="mtk1">├── node_modules</span></span><br/><span><span class="mtk1">├── public</span></span><br/><span><span class="mtk1">│   ├── favicon.ico</span></span><br/><span><span class="mtk1">│   ├── index.html</span></span><br/><span><span class="mtk1">│   ├── logo192.png</span></span><br/><span><span class="mtk1">│   ├── logo512.png</span></span><br/><span><span class="mtk1">│   ├── manifest.json</span></span><br/><span><span class="mtk1">│   └── robots.txt</span></span><br/><span><span class="mtk1">├── src</span></span><br/><span><span class="mtk1">│   ├── App.css</span></span><br/><span><span class="mtk1">│   ├── App.js</span></span><br/><span><span class="mtk1">│   ├── App.test.js</span></span><br/><span><span class="mtk1">│   ├── index.css</span></span><br/><span><span class="mtk1">│   ├── index.js</span></span><br/><span><span class="mtk1">│   ├── logo.svg</span></span><br/><span><span class="mtk1">│   ├── serviceWorker.js</span></span><br/><span><span class="mtk1">│   └── setupTests.js</span></span><br/><span><span class="mtk1">├── .gitignore</span></span><br/><span><span class="mtk1">├── package.json</span></span><br/><span><span class="mtk1">├── package-lock.json</span></span><br/><span><span class="mtk1">└── README.md</span></span><br/><span><span></span></span><br/></div></code></pre></pre>

`create-react-app` s'est occupé de la mise en place de la structure principale de l'application ainsi que de quelques paramètres de développement. La plupart de ce que vous voyez ne sera pas visible par le visiteur de votre application Web. React utilise un outil appelé *webpack* qui transforme ici les répertoires et fichiers en actifs statiques. Les visiteurs de votre site reçoivent ces actifs statiques.

Ne vous inquiétez pas si vous ne comprenez pas grand chose sur Webpack pour le moment. L'un des avantages de l'utilisation `create-react-app`de notre application React est que nous pouvons contourner toute sorte de configuration manuelle pour Webpack. Si vous souhaitez approfondir le sujet par vous-même, vous pouvez trouver un [aperçu de haut niveau des concepts fondamentaux de webpack ici](https://webpack.js.org/concepts/) .

**.gitignore**

Il s'agit du fichier standard utilisé par l'outil de contrôle de source git pour déterminer les fichiers et répertoires à ignorer lors de la validation du code. Bien que ce fichier existe, `create-react-app`aucun dépôt git n'a été créé dans ce dossier. Si vous regardez le fichier, il a pris soin d'ignorer un certain nombre d'éléments (même **.DS_Store** pour les utilisateurs Mac) :

![createReactAppGitIgnore](https://content.codecademy.com/programs/react/creating-a-react-app/react_gitignore.png)

**package.json**

![package_json](https://content.codecademy.com/courses/React/react_setup-037-package-json.png)

Ce fichier décrit tous les paramètres de l'application React.

* `name` est le nom de votre application
* `version` est la version actuelle
* `"private": true` est un paramètre de sécurité pour éviter de publier accidentellement votre application en tant que package public au sein de l'écosystème npm.
* `dependencies` contient tous les modules et versions Node requis pour l'application. Dans l'image ci-dessus, vous verrez six dépendances. Les trois premiers, comme vous l’avez peut-être deviné, sont destinés à des tests. Les deux dépendances suivantes nous permettent d'utiliser `react`et `react-dom` dans notre JavaScript. Enfin, `react-scripts` fournit un ensemble utile de scripts de développement pour travailler avec React. Dans la capture d'écran ci-dessus, la version `react ` spécifiée est `^16.13.1`. Cela signifie que npm installera la version majeure la plus récente correspondant à 16.xx. En revanche, vous pouvez également voir quelque chose comme `~1.2.3` dans **package.json** , qui installera uniquement la version mineure la plus récente correspondant à 1.2.x.
* `scripts` spécifie les alias que vous pouvez utiliser pour accéder à certaines `react-scripts` commandes de manière plus efficace. Par exemple, l'exécution `npm test` dans votre ligne de commande exécutera `react-scripts test --env=jsdom` en arrière-plan.
* Vous verrez également deux autres attributs, `eslintConfig `et `browserslist`. Ces deux modules sont des modules Node ayant leur propre ensemble de valeurs. `browserslist` fournit des informations sur la compatibilité du navigateur de l'application, tout en `eslintConfig` s'occupant du [peluchage du code](https://stackoverflow.com/questions/8503559/what-is-linting) .

**nœud_modules**

Ce répertoire contient les dépendances et sous-dépendances des packages utilisés par l'application React actuelle, comme spécifié par **package.json** . Si vous y jetez un coup d’œil, vous pourriez être surpris par le nombre.

L'exécution `ls -1 | wc -l`dans le répertoire **node_modules/** produira plus de 800 sous-dossiers. Ce dossier est automatiquement ajouté au **.gitignore** pour une bonne raison ! Ne vous inquiétez pas, même avec toutes ces dépendances, l'application de base ne fera qu'environ 50 Ko après avoir été [minifiée](https://techterms.com/definition/minification) et compressée pour la production.

**package-lock.json**

Ce fichier contient l'arborescence de dépendances exacte installée dans **node_modules/** . Cela permet aux équipes travaillant sur des applications privées de s'assurer qu'elles disposent de la même version des dépendances et des sous-dépendances. Il contient également un historique des modifications apportées à **package.json** , afin que vous puissiez rapidement revenir sur les modifications de dépendances.

**public**

Ce répertoire contient des actifs qui seront servis directement sans traitement supplémentaire par webpack. **index.html** fournit le point d’entrée de l’application Web. Vous verrez également un favicon (icône d'en-tête) et un **manifest.json** .

Le fichier manifeste configure le comportement de votre application Web si elle est ajoutée à l'écran d'accueil d'un utilisateur Android (les utilisateurs d'Android peuvent « raccourcir » les applications Web et les charger directement depuis l'interface utilisateur Android). Vous pouvez en savoir plus [ici](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) .

**src**

Celui-ci contient le JavaScript qui sera traité par webpack et constitue le cœur de l'application React. En parcourant ce dossier, vous voyez le composant JavaScript principal de l'application ( **App.js** ), ses styles associés ( **App.css** ) et la suite de tests ( **App.test.js** ). **index.js** et ses styles ( **index.css** ) fournissent une entrée dans l'application et lancent également le **registerServiceWorker.js** . Ce service worker s'occupe de la mise en cache et de la mise à jour des fichiers pour l'utilisateur final. Il permet une fonctionnalité hors ligne et un chargement plus rapide des pages après la visite initiale. Plus d'informations sur cette méthodologie sont disponibles [ici](https://developers.google.com/web/fundamentals/primers/service-workers) .

Au fur et à mesure que votre application React se développe, il est courant d'ajouter un répertoire **composants/** pour organiser les composants et les fichiers liés aux composants et un répertoire **vues/** pour organiser les vues React et les fichiers liés aux vues.

## 3. Démarrage du serveur de développement d'applications React

Comme indiqué dans le message de réussite lors de l'exécution de `create-react-app`, il vous suffit de l'exécuter `npm start` dans le répertoire de votre application pour commencer à servir le serveur de développement. Il devrait ouvrir automatiquement un onglet dans votre navigateur qui pointe vers `http://localhost:3000/`(sinon, visitez manuellement cette adresse). Vous vous retrouverez en train de regarder une page ressemblant à l’image suivante :

![default_react_app](https://content.codecademy.com/courses/React/react_setup-038-default-react-app.png)

Comme indiqué, toute modification apportée au code source sera mise à jour en direct ici. Voyons cela en action.

Laissez l'onglet du terminal actuel ouvert (il est occupé à servir l'application React) et ouvrez **src/App.js** dans votre éditeur de texte préféré. Vous verrez à quoi ressemble un mashup de JavaScript et HTML. Il s'agit de *JSX* , c'est ainsi que React ajoute la syntaxe XML à JavaScript. Il fournit un moyen intuitif de créer des composants React et est compilé en JavaScript au moment de l'exécution. Nous approfondirons cela dans d'autres contenus, mais pour l'instant, faisons une simple modification et voyons la mise à jour dans le navigateur.

Modifiez le texte du paragraphe principal à lire `Hello Codecademy!` dans **App.js** et enregistrez le fichier.

![réagir_setup](https://content.codecademy.com/courses/React/react_setup-039-app-js.png)

Si vous avez laissé le terminal en marche, vous devriez pouvoir basculer sur votre navigateur et voir la mise à jour :

![edit_react_app](https://content.codecademy.com/courses/React/react_setup-040-edited-react-app.png)

Toutes nos félicitations! Vous êtes maintenant opérationnel avec React. Vous pouvez maintenant commencer à ajouter des fonctionnalités pour votre application.

## Prochaines étapes

Si vous souhaitez en savoir plus `create-react-app`, commencez par la [documentation sur le site Web create-react-app](https://create-react-app.dev/docs/getting-started) .

Étant donné qu'une prochaine étape importante après la création d'une application React consiste à configurer votre environnement pour la déboguer, pensez à consulter notre [article sur les outils de développement React](https://www.codecademy.com/paths/web-development/tracks/front-end-applications-with-react/modules/react-development-setup-and-ravenous-part-1/informationals/ready-react-developer-tools) . Là, nous utilisons le squelette initial créé avec `create-react-app`pour vous préparer à commencer le débogage des applications React.
