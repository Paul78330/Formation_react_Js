

#### Instruction

1 .

Importez l'exportation par défaut de la bibliothèque `'react'` et appelez-la `React`. Nous utiliserons également State Hook, alors allez-y et importez également l'exportation nommée `useState` depuis la bibliothèque.`'react'`

2 .

Utilisez `const` pour déclarer et attribuer les valeurs de retour de l'appel `useState()` à `color` et `setColor` à l'intérieur du composant nommé ColorPicker dans le module ColorPicker.js.

3 .

```
function ColorPicker() {
 
const divStyle = {backgroundColor: 'violet'};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button>
        Aquamarine
      </button>
      <button>
        BlueViolet
      </button>
      <button>
        Chartreuse
      </button>
      <button>
        CornflowerBlue
      </button>
    </div>
  );
```

Dans JSX, utilisez des écouteurs d'événements `onClick` pour appeler la fonction `setColor()` de définition d'état avec la couleur appropriée lorsque l'utilisateur clique sur chacun de ces boutons.

4 .

Mettez à jour l' objet `divStyle` afin que la propriété `backgroundColor` soit définie sur notre valeur d'état actuelle au lieu de toujours afficher le violet.
