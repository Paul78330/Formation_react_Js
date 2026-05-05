const h1 = <h1>Hello world</h1>;
/**
 * De quel genre de code hybride étrange s'agit-il ? Est-ce du     JavaScript ? HTML ? Ou autre chose?
  *Il semble qu'il doit s'agir de JavaScript puisqu'il commence const et se termine par ;. Si vous essayiez de l'exécuter dans un fichier HTML, cela ne fonctionnerait pas.
  *Cependant, le code contient également <h1>Hello world</h1>, qui ressemble exactement au HTML. Cette partie ne fonctionnerait pas si vous essayiez de l'exécuter dans un fichier JavaScript.

  de quoi s'agit-il ?

  *La réponse est… un fichier JavaScript ! Malgré ce à quoi il ressemble, votre code ne contient en réalité aucun code HTML.

  *La partie qui ressemble à HTML, <h1>Hello world</h1>s'appelle JSX. 

  Qu’est-ce que JSX ?

  *Que signifie « extension de syntaxe » ?

  *Dans ce cas, cela signifie que JSX n'est pas du JavaScript valide. Les navigateurs Web ne peuvent pas le lire !
  *Si un fichier JavaScript contient du code JSX, alors ce fichier devra être compilé . Cela signifie qu'avant que le fichier n'atteigne un navigateur Web, un compilateur JSX traduira n'importe quel JSX en JavaScript standard.
 */

  // JSX Elements:
  <h1>Hello world</h1>;
  //Cet élément JSX ressemble exactement à HTML ! La seule différence notable est que vous le trouverez dans un fichier JavaScript plutôt que dans un fichier HTML

  //Les éléments JSX sont traités comme des expressions JavaScript . Ils peuvent aller partout où les expressions JavaScript peuvent aller. Cela signifie qu'un élément JSX peut être enregistré dans une variable, passé à une fonction, stocké dans un objet ou un tableau… vous l'appelez.

//Voici un exemple d'élément JSX enregistré dans une variable :
const navBar = <nav>I am a nav bar</nav>;

//Voici un exemple de plusieurs éléments JSX stockés dans un objet :

const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

//Attributs dans JSX :
// Un attribut JSX est écrit en utilisant une syntaxe de type HTML : un nom , suivi d'un signe égal, suivi d'une valeur . La valeur doit être placée entre guillemets, comme ceci : my-attribute-name="my-attribute-value"

//Voici quelques éléments JSX avec des attributs :
<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
//Un seul élément JSX peut avoir de nombreux attributs, tout comme en HTML :
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

//JSX imbriqué :
//Vous pouvez imbriquer des éléments JSX à l'intérieur d'autres éléments JSX, tout comme en HTML.

//Voici un exemple d'<h1>élément JSX, imbriqué à l'intérieur d'un <a>élément JSX :
<a href="https://www.example.com"><h1>Click me!</h1></a>
//Pour rendre cela plus lisible, vous pouvez utiliser des sauts de ligne et une indentation de style HTML :

/* <a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a> */ //Erreur de compilation

//Si une expression JSX occupe plusieurs lignes, vous devez alors placer l'expression JSX multiligne entre parenthèses. Cela semble étrange au début, mais on s'y habitue :
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

//Les expressions JSX imbriquées peuvent être enregistrées en tant que variables, transmises à des fonctions, etc., tout comme les expressions JSX non imbriquées ! Voici un exemple d' expression JSX imbriquée enregistrée en tant que variable :
const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);

//Éléments externes JSX
//Il existe une règle que nous n'avons pas mentionnée : une expression JSX doit avoir exactement un élément le plus externe. En d'autres termes, ce code fonctionnera :
const paragraphs = (
  <div id="i-am-the-outermost-element"> //Le plus externe
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

//Mais ce code ne fonctionnera pas :
// const paragraphs = (
//   <p>I am a paragraph.</p> //Le plus externe
//   <p>I, too, am a paragraph.</p>
// );

/**
 * La première balise d'ouverture et la balise de fermeture finale d'une expression JSX doivent appartenir au même élément JSX !

  *Il est facile d’oublier cette règle et de se retrouver avec des erreurs difficiles à diagnostiquer.

  *Si vous remarquez qu'une expression JSX comporte plusieurs éléments externes, la solution est généralement simple : enveloppez l'expression JSX dans un <div>élément.
 */

//Rendre une expression JSX
// Vous avez appris à écrire des éléments JSX ! Il est maintenant temps d'apprendre à les restituer .

// Restituer une expression JSX signifie la faire apparaître à l’écran .
//Le code suivant affichera une expression JSX :
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<h1>Hello world</h1>);