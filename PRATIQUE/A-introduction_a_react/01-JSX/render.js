//Le rendu JSX expliqué


//Examinons le code que vous venez d'écrire dans les dernière lignes de app-1.js.
const container = document.getElementById('app');
const root = reactDOM.createRoot(container);
root.render(<h1>Hello world</h1>);


//Avant de commencer, il est essentiel de comprendre que React s'appuie sur deux choses pour restituer : quel contenu restituer et où placer le contenu.
//Dans cet esprit, regardons la première ligne :

//Cette ligne:
//const container = document.getElementById('app')
// Utilise l'objet document qui représente notre page Web.
// Utilise la méthode getElementById() de document pour obtenir l'objet Element représentant l'élément HTML avec l'identifiant transmis( app).
// Stocke l'élément dans container.

//Dans la ligne suivante :
//const root = createRoot(container)
//nous utilisons createRoot() issue de la bibliothèque react-dom/client, qui crée une racine React à partir de container et la stocke dans root. 
//root peut être utilisé pour restituer une expression JSX. Il s'agit de la partie « où placer le contenu » du rendu React.

//Enfin, la dernière ligne :
//root.render(<h1>Hello world</h1>)
//utilise la méthode render() de root pour restituer le contenu transmis en argument. Ici, nous passons un élément <h1> qui affiche Hello world. Il s'agit de la partie « quel contenu rendre » du rendu React.

//Passer une variable à render()
/**
 * Précédement, nous avons vu comment créer une racine React en utilisant createRoot()et utiliser sa méthode render() pour rendre JSX .

  *L'argument de la méthode render() n'a pas besoin d'être JSX, mais il doit être évalué comme une expression JSX. L'argument peut également être une variable, à condition que cette variable soit évaluée comme une expression JSX.

 */

  //Dans cet exemple, nous enregistrons une expression JSX en tant que variable nommée toDoList. On passe alors toDoList comme argument de render():

  const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
  
  const container2 = document.getElementById('app2');
  const root2 = reactDOM.createRoot(container2);
  root2.render(toDoList);

  //Le DOM virtuel
  //Une particularité de la render()méthode racine React est qu'elle met à jour uniquement les éléments DOM qui ont changé .

  //Cela signifie que si vous effectuez exactement le même rendu deux fois de suite, le deuxième rendu ne fera rien :
  const hello = <h1>Hello world</h1>;

//Ceci affichera "Hello world" à l'écran :
root.render(hello, document.getElementById('app'));

//Ceci ne fera rien :
root.render(hello, document.getElementById('app'));

// C'est significatif ! Seule la mise à jour des éléments DOM nécessaires constitue une grande partie du succès de React. Ceci est accompli en utilisant le DOM virtuel de React .
