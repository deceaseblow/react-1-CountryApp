import React from 'react';

function CountryCard({ country }) {
    const { name, flags, capital } = country;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-white text-gray-900">
            <img
                src={flags.png}
                alt={`${name} flag`}
                className="object-cover object-center w-full rounded-md h-48"
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-purple-600">
                    Capital
                </span>
                <h2 className="text-xl font-semibold tracking-wide text-purple-700">{capital}</h2>
            </div>
            <p className="text-gray-800 font-bold text-lg">{name}</p>
        </div>
    );
}

export default CountryCard;
