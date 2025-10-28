# Noms de propriétés calculés en JavaScript

Les noms de propriétés calculés sont une fonctionnalité ES6 qui permet aux noms des propriétés d'objet dans la notation littérale d'objet JavaScript d'être déterminés dynamiquement, c'est-à-dire calculés.

Les objets JavaScript sont en réalité des dictionnaires, il était donc toujours possible de créer dynamiquement une chaîne et de l'utiliser comme clé avec la syntaxe object ['property'] = value.

Cependant, les noms de propriété calculés ES6 nous permettent d'utiliser des noms générés dynamiquement dans les littéraux d'objet. Exemple:

```
const myPropertyName = 'c'

const myObject = {
  a: 5,
  b: 10,
  [myPropertyName]: 15
} 

console.log(myObject.c) // prints 15
```

Pour souligner que les expressions peuvent être utilisées directement comme noms de propriétés calculées, un autre exemple :

```
const fieldNumber = 3

const myObject = {
  field1: 5,
  field2: 10,
  ['field' + fieldNumber]: 15
}

console.log(myObject.field3) // prints 15
```

Cela peut être très pratique.

Une autre variante consiste à utiliser des littéraux de modèle (interpolation de chaîne) pour les noms de propriétés calculés. Notez cependant que cela nécessite toujours la syntaxe des crochets :

```
const fieldNumber = 3

const myObject = {
  field1: 5,
  field2: 10,
  [`field${fieldNumber}`]: 15
}

console.log(myObject.field3) // prints 15
```
