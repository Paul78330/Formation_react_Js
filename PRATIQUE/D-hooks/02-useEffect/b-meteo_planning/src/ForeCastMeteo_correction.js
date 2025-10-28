import React, { useState, useEffect } from "react";
import { get } from './mockBackEnd/fetch';

export default function Forecast() {
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data)
    });
  }, [forecastType]);

  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }));

  if(!data){
    return <p>Loading...</p>
  }

  return (
    <div className='App' style={{margin: "20px 20px" }}>
      <h1>My Weather Planner</h1>
      <div >
        <button onClick={() => setForecastType('/daily')} style={{marginLeft: "15px"}}>5-day</button>
        <button onClick={() => setForecastType('/hourly')} style={{marginLeft: "10px"}}>Today</button>
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
          {data.map((item, i) => (
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
