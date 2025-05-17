import React from 'react';
import { FaCity, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';

function RandomCard({ country }) {
  const { name, capital, area, population, flags } = country;

  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-gray-100 px-4 font-poppins">
      <div
        className="randomCard bg-black border border-purple-600 rounded-xl shadow-lg p-8 w-full max-w-3xl text-purple-600
          flex flex-col md:flex-row items-center gap-8
          transition-all duration-300 hover:bg-purple-600 hover:text-black cursor-default"
      >
        <img
          src={flags.png}
          alt={`${name} flag`}
          className="w-72 h-48 object-cover rounded-lg border border-purple-600"
          loading="lazy"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">{name}</h1>

          <div className="space-y-5">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaCity className="text-purple-600 text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Capital</h3>
                <h2 className="text-lg">{capital || "N/A"}</h2>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaMapMarkedAlt className="text-purple-400 text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Area</h3>
                <h2 className="text-lg">{area ? `${area} km²` : "N/A"}</h2>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <FaUsers className="text-purple-400 text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Population</h3>
                <h2 className="text-lg">{population ? population.toLocaleString() : "N/A"}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomCard;
