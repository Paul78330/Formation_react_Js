import React, { useState, useEffect } from "react";
import { get } from './mockBackEnd/fetch';

export default function Forecast() {
  // Utilisation du Hook d'état pour gérer les données de prévision, les notes et le type de prévision
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  // Utilisation du Hook d'effet pour demander les données de prévision lors du montage du composant
  useEffect(() => {
    alert('Requested data from server...');
    get('/daily').then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2));
    });
  });

  // Fonction pour gérer le changement des notes
  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }));

  // Rendu du composant
  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Ce composant React affiche une interface utilisateur pour un planificateur météo. Il utilise le Hook d'état pour gérer les données de prévision, les notes et le type de prévision. Lors du montage du composant, il demande les données de prévision à l'aide du Hook d'effet. Il y a des boutons pour changer le type de prévision, et un tableau pour afficher les données de prévision. Chaque ligne du tableau a un champ d'entrée pour les notes, qui sont gérées par la fonction handleChange.