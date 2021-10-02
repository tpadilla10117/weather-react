import React from "react";
import './SearchBox.css';

function SearchBox() {
    return (
        <div className="search-box">
            
            <input 
                type="text"
                className="search-bar"
                placeholder="Search..."
        
            />
        </div>
    );
};

export default SearchBox;