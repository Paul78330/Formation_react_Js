import React from 'react';
import Garage from './Garage';
import './App.css';



function App() {


  const store = {//Endroit où nous allons stocker de la data rélatif au composant

    titre: 'Mon catalogue de Voiture',
    color: "gray"

  }


    return (
      <div className="App">

        <Garage
          title={store.titre}
          color={store.color}
        />

      </div>
    );


}

export default App;
