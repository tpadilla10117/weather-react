import React from 'react';

import { SearchBox, LocationBox } from '../../components/utils';
import './Home.css';

const HomePage = () => {
    return (
        <main>
            <SearchBox />
            <LocationBox />
        </main>
    );
};

export default HomePage;