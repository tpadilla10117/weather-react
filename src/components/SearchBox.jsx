import React, {useEffect, useState} from "react";
import './SearchBox.css';


function SearchBox(props) {

    const {query, setQuery, weather, setWeather, search, apiKey, BASE_URL} = props;

    return (
        <div className="search-box">
            
            <input 
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={event => setQuery(event.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
};

export default SearchBox;