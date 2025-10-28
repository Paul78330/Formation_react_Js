//Ce composant crée un tableau d'objets représentant des voitures et les affiche en utilisant le composant Car. Chaque voiture a une marque et une couleur spécifiées.

// Garage.js
import React from 'react';
import Car from './Car'; // Assurez-vous que le chemin d'importation est correct
import MyHeader from './Components/MyHeader';

const Garage = (props) => {
    const cars = [
      { 
        brand: "Peugeot", 
        color: "rouge", 
        image : 'https://cdn.motor1.com/images/mgl/1xmP3/s1/peugeot-3008-restyling.jpg' 
      },
      { 
        brand: "Citroën", 
        color: "bleu",
        image: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,q_auto,c_fill,f_auto,fl_lossy/auto-client/d67e286fb3cd125369f5a9bf2f819b3d/citroen_c3_2024_max_4x3.jpg"
      },
        { 
          brand: "Tesla", 
          color: "noir",
          image : "https://www.tesla.com/sites/default/files/images/support/Meet-Your-Tesla-Model-X.png"
      },
        // Ajoutez d'autres voitures ici si vous le souhaitez
    ];

    return (
        //methode 1
        // <div>
        //     {cars.map((car, index) => (
        //         <Car key={index} color={car.color}>
        //             {car.brand}
        //         </Car>
        //     ))}
        // </div>

      //methode 2
        
            <MyHeader myStyle={props.color}>
              {props.title}
              {cars.map((car, index) => (
                  <Car key={index} color={car.color} image={car.image}>
                      {car.brand}
                  </Car>
              ))}
            </MyHeader>
        
    );
};

export default Garage;
