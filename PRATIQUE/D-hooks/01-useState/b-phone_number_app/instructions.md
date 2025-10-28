### Instructions

1 .

Utilisons le State Hook pour que notre programme n'accepte que les entrées numériques puisque nous voulons un numéro de téléphone de l'utilisateur.

Tout d'abord, assurez-vous que nous pouvons utiliser le State Hook en important `useState` depuis la bibliothèque React.

2 .

Déclarez et attribuez des valeurs pour notre état actuel et notre paramètre d'état avec `useState()`. Utiliser `phone` comme nom de notre variable d'état actuel.

Assurez-vous de donner à `phone` la variable d'état la valeur initiale d'une chaîne vide !

3 .

Précisons la valeur de notre balise d'entrée JSX en ajoutant un attribut `value` et en le définissant sur la valeur de notre variable d'état `phone`.

Nous souhaitons également détecter toute modification apportée à la balise d'entrée pendant que l'utilisateur tape, ajoutez donc un écouteur d'événement `onChange` et attribuez-lui la fonction `handleChange`.

4 .

Enfin, complétez la fonction `handleChange()`. Cette fonction vérifie la validité de la valeur d'entrée que l'utilisateur saisit. Si l'entrée est numérique, elle doit mettre à jour la variable d'état via la fonction setter.

Dans l'instruction if de la fonction `handleChange()`, mettez à jour l'état à l'aide de la fonction state setter `setPhone()` et définissez-le sur la nouvelle valeur `newPhone`
