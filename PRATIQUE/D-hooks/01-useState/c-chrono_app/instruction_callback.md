### Objectif du TP

Ce TP vous permettra de pratiquer la mise à jour de l'état à partir de l'état précédent en utilisant des fonctions de rappel. Vous allez créer un simple chronomètre et comprendre comment la fonction de rappel permet de mémoriser la valeur précédente de l'état lors d'une mise à jour.

### Contexte théorique

Les mises à jour de l'état dans React sont asynchrones. Lorsque vous appelez `setState()`, React peut regrouper plusieurs mises à jour pour améliorer les performances. Sans fonction de rappel, vous risquez d'utiliser une valeur d'état obsolète.

Exemple :
```javascript
// Risqué : utilise la valeur actuelle de count qui peut être obsolète
setCount(count + 1);

// Sûr : la fonction de rappel reçoit toujours la valeur la plus récente
setCount(prevCount => prevCount + 1);
```

### Scénario de l'application

Vous allez créer un chronomètre simple avec trois boutons :
- Incrémenter : augmente le compteur de 1
- Démarrer : ajoute 5 au compteur d'un coup
- Réinitialiser : remet le compteur à 0

### Instructions

#### Étape 1 : Initialiser l'état

Déclarez et initialisez une variable d'état appelée `count` pour suivre la valeur du chronomètre.

Initialisez `count` avec la valeur `0` pour le premier rendu.

```javascript
const [count, setCount] = useState(0);
```

#### Étape 2 : Créer la fonction increment()

Créez une fonction `increment()` qui augmente le compteur de 1.

IMPORTANT : Utilisez une fonction de rappel car la nouvelle valeur dépend de l'ancienne.

```javascript
const increment = () => {
  setCount(prevCount => prevCount + 1);
};
```

Pourquoi `prevCount` ? Cette fonction de rappel reçoit automatiquement la valeur la plus récente de l'état, même si React a regroupé plusieurs mises à jour.

#### Étape 3 : Créer la fonction start()

Créez une fonction `start()` qui appelle `setCount()` 5 fois rapidement pour ajouter 5 au compteur.

```javascript
const start = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};
```

Grâce à la fonction de rappel, chaque appel utilise le résultat du précédent. Le compteur augmente bien de 5.

#### Étape 4 : Créer la fonction reset()

Créez une fonction `reset()` qui remet le compteur à 0.

Ici, pas besoin de fonction de rappel car on ne dépend pas de la valeur précédente :

```javascript
const reset = () => {
  setCount(0);
};
```

#### Étape 5 : Créer l'interface JSX

Affichez le compteur et les trois boutons :

```javascript
return (
  <div>
    <h1>Chronomètre : {count}</h1>
    <button onClick={increment}>Incrémenter (+1)</button>
    <button onClick={start}>Démarrer (+5)</button>
    <button onClick={reset}>Réinitialiser</button>
  </div>
);
```

### Expérimentation : Avec et sans fonction de rappel

Pour bien comprendre l'importance de la fonction de rappel, testez cette version INCORRECTE de `start()` :

```javascript
// VERSION INCORRECTE - NE PAS UTILISER
const startBuggy = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

Que se passe-t-il ? Le compteur n'augmente que de 1 au lieu de 5 car tous les appels utilisent la même valeur obsolète de `count`.

### Points clés à retenir

1. La fonction de rappel `prevCount => prevCount + 1` mémorise et utilise toujours la valeur la plus récente
2. Sans fonction de rappel, plusieurs appels rapides à `setState()` peuvent utiliser la même valeur obsolète
3. Utilisez une fonction de rappel quand : nouvelle valeur = ancienne valeur + modification
4. Pas besoin de fonction de rappel quand vous définissez une valeur fixe (comme `setCount(0)`)

### Critères de réussite

- Le chronomètre démarre à 0
- Le bouton "Incrémenter" augmente de 1 à chaque clic
- Le bouton "Démarrer" augmente de 5 d'un coup
- Le bouton "Réinitialiser" remet à 0
- Les fonctions utilisent des fonctions de rappel quand nécessaire
