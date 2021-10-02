import React from 'react';
import './WeatherBox.css';

function WeatherBox () {
    return (
        <div className="weater-box">
            <div className="temp">
                15 c
            </div>
            <div className="weather">
                Sunny
            </div>

        </div>
    );
};

export default WeatherBox;