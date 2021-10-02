import React from 'react';

import { SearchBox, LocationBox, WeatherBox } from '../../components/utils';
import './Home.css';

const HomePage = () => {
    return (
        <main>
            <SearchBox />
            <LocationBox />
            <WeatherBox />
        </main>
    );
};

export default HomePage;