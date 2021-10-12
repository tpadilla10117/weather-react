import React from 'react';
import './WeatherBox.css';

function WeatherBox (props) {

    const {query, setQuery, weather, setWeather, search, apiKey, BASE_URL} = props;

    return (
        <div className="weather-box">
            <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">
                {weather.weather[0].main}
            </div>

        </div>
    );
};

export default WeatherBox;