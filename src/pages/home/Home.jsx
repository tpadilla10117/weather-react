import React from 'react';

import { SearchBox, LocationBox, WeatherBox } from '../../components/utils';
import './Home.css';

const HomePage = (props) => {

    const {query, setQuery, weather, setWeather, search, apiKey, BASE_URL} = props;

    return (
        <main>
            <SearchBox />
            <LocationBox />
            <WeatherBox />
        </main>
    );
};

export default HomePage;