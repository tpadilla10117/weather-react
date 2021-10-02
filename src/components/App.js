import React from 'react';
import { HomePage} from './utils';

require('dotenv').config();

const apiKey = process.env.WEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  return (
    <div className="App">

      <HomePage />

    </div>
  );
}

export default App;
