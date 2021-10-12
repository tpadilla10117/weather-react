import React, {useState, useEffect} from 'react';
import { HomePage} from './utils';

require('dotenv').config();

const apiKey = process.env.WEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

/* To dynamically render weather data: */
  const search = event => {
    if(event.key === "Enter") {
      fetch(`${BASE_URL}weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then(res => res.json() )
        .then(result => setWeather(result) );
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
