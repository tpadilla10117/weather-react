import React, {useState} from 'react';
import { HomePage} from './utils';

require('dotenv').config();

/* WEATHER_KEY=621cd91a39717c6150035bb17519e755 */
const apiKey = process.env.WEATHER_KEY;

console.log(process.env.apiKey);
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

/* To dynamically render weather data: */
  const search = event => {
    if(event.key === "Enter") {
      fetch(`${BASE_URL}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then(res => res.json() )
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log("Here is the weather:", result);
        } );
    }
  };


  return (
    <div className="App">

      <HomePage query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} search={search}
        apiKey={apiKey}
        BASE_URL={BASE_URL}
      />

    </div>
  );
}

export default App;
