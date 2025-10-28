import React from 'react';
import {comments} from './CommentData'; // Assurez-vous que ce chemin est correct
import Card from './Card';

function App(){
  return(
    <div className='header'>
      {
        comments.map(comment => {
          return <Card commentObject={comment} key={comment.id} /> // Ajoutez un retour ici et un key prop
        })
      }
    </div> // Fermez correctement la balise div ici
  )
}

export default App;