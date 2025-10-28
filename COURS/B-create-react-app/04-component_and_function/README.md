### Appliquer un composant dans une fonction de rendu

Vous avez peut-être remarqué que vous avez déjà vu ce comportement !

Dans les leçons précédentes, lorsque nous avons défini les composants et les avons exportés. Nous les exportions généralement dans notre fichier de niveau supérieur, **App.js** . Dans **App.js** , nous avons importé des composants et les avons renvoyés dans notre composant `App`, qui sont ensuite exportés pour être rendus !

```
import Button from './Button'

function App() {
  return <Button />;
}

export default App;
```

Semble familier? Cette capacité nous permet de séparer les composants en fonctions plus petites et de les connecter ensemble pour créer des composants plus complexes !

Nous pouvons le traiter comme si le `Button`composant est un enfant du `App`composant parent. En divisant un composant en composants plus petits extraits, nous pouvons réutiliser les pièces individuelles si nécessaire.
