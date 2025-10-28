### Renvoyer un autre composant

3 minutes

Comme nous l'avons vu précédemment, chaque composant React est responsable d'un élément de l'interface. À mesure que l’application gagne en complexité, les composants doivent pouvoir interagir les uns avec les autres pour prendre en charge les fonctionnalités nécessaires.

Jusqu'à présent, nous avons exploré les composants qui renvoient des éléments JSX, tels que :

```
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

```

Dans cet exemple, le composant React n'interagit pas avec d'autres composants. Cependant, vous pouvez faire interagir les composants les uns avec les autres en transmettant des informations ou même en renvoyant d'autres composants.

```
function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}

```

Dans l'exemple ci-dessus, `ItemBox`renvoie une instance de `PurchaseButton`. Ceci est un exemple de la façon dont un composant peut référencer d'autres composants !
