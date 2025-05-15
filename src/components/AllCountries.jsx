import React from 'react';
import CountryCard from './CountryCard';

function AllCountries({ country }) {
    return (
        <div className="px-8 py-12 bg-gray-100">
            <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">All Countries</h2>
            <div className="max-w-7xl mx-auto"> 
                <div className="flex flex-wrap justify-center gap-8 p-8 ">
                {country.map((item, index) => (
                    <CountryCard key={index} country={item} />
                ))}
            </div>
            </div>
        </div>
    );
}

export default AllCountries;
