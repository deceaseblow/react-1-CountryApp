import React from 'react';

function CountryCard({ country }) {
    const { name, flags, capital } = country;

    return (
        <div className="max-w-xs p-6 rounded-xl shadow-md bg-black text-gray-100 hover:shadow-purple-500/40 hover:scale-105 transform transition duration-300 ease-in-out">
            <img
                src={flags.png}
                alt={`${name} flag`}
                className="object-cover object-center w-full rounded-md h-48 "
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-purple-400">
                    Capital
                </span>
                <h2 className="text-xl font-semibold tracking-wide text-purple-300">{capital}</h2>
            </div>
            <p className="text-purple-200 font-bold text-lg">{name}</p>
        </div>

    );
}

export default CountryCard;
