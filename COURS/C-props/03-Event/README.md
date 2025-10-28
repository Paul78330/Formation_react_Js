### Placer un gestionnaire d'événements dans un composant de fonction

Vous pouvez, et vous le ferez souvent, transmettre des fonctions en tant que [`props`](https://www.codecademy.com/resources/docs/react/props). Il est particulièrement courant de transmettre des fonctions *de gestionnaire d'événements* .

Dans les prochaines pratiques, nous passerons une fonction de gestionnaire d'événements comme accessoire. Cependant, nous devons *définir* un gestionnaire d'événements avant de pouvoir en transmettre un n'importe où. Dans cet exercice, nous définirons une fonction de gestionnaire d'événements.

Comment définissons-nous un gestionnaire d'événements dans React ?

Nous définissons un gestionnaire d'événements comme méthode sur le composant fonction !

```
import React from 'react';

function Example() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
```


### Passer un gestionnaire d'événements comme accessoire

Bien! Vous avez défini une nouvelle méthode à l'intérieur du `Talker`composant. Vous êtes maintenant prêt à *transmettre* cette fonction à un autre composant.

Vous pouvez transmettre une méthode exactement de la même manière que n'importe quelle autre donnée : en utilisant des accolades.

```
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

export default Talker;
```

### Recevez un gestionnaire d'événements en guise d'accessoire

4 minutes

Super! Vous venez de transmettre une fonction de `<Talker />`à `<Button />`.

Si un utilisateur clique sur cet `<button>`élément, vous souhaitez que votre fonction transmise `talk()`soit appelée. Cela signifie que vous devez vous attacher `talk()`à l' `<button>`élément en tant que *gestionnaire d'événements* .

Comment tu fais ça? De la même manière que vous attachez n'importe quel gestionnaire d'événements à un élément JSX : vous attribuez à cet élément JSX un *attribut* spécial . Le *nom* de l'attribut doit être un nom d'événement comme `onClick` ou `onHover`. La *valeur* de l'attribut doit correspondre au gestionnaire d'événements que vous souhaitez attacher.

```
import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

export default Button;
```


### handleEvent, onEvent et props.onEvent

Parlons de nommer les choses.

Lorsque vous transmettez un *gestionnaire d'événements* en tant qu'accessoire, comme vous venez de le faire, vous devez choisir deux noms. Les deux choix de dénomination se produisent dans le composant *parent* , le composant qui définit le gestionnaire d'événements et le transmet.

Le premier nom que vous devez choisir est le nom du gestionnaire d'événements lui-même.

```
function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}
```

Le deuxième nom que vous devez choisir est le nom de l'accessoire que vous utiliserez pour *transmettre* le gestionnaire d'événements. C'est la même chose que le nom de l'attribut.

Pour notre nom d'accessoire, nous avons également choisi `talk`, comme indiqué à la ligne 12 :

```
return <Button talk={talk} />;
```

Ces deux noms peuvent être ce que nous voulons. Cependant, il existe une convention de dénomination couramment utilisée.

Voici comment fonctionne la convention de dénomination : commencez par réfléchir au *type d'événement* que vous écoutez. Dans notre exemple, le type d'événement était « clic ». Si vous écoutez un événement « clic », alors vous nommez votre *gestionnaire d'événements* `handleClick` . Si vous écoutez un événement « survol », alors vous nommez votre gestionnaire d'événements `handleHover` :

```
function myClass() {
  function handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}

```

Le nom de votre accessoire doit être le mot `on`, plus votre type d'événement. Si vous écoutez un événement « clic », alors vous nommez votre accessoire `onClick`. Si vous écoutez un événement « survol », alors vous nommez votre accessoire `onHover` :

```
function myClass(){
  function handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
   return <Child onHover={handleHover} />;
}

```
