import React from 'react';
import RandomCard from './RandomCard';
import AllCountries from './AllCountries';
function Main({ randomCountry, countryData }) {
    return (
        <div>
                <RandomCard country={randomCountry} />
        

            <AllCountries country={countryData} />

        </div>
    );
}

export default Main;
