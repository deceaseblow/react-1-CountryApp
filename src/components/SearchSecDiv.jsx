import React, { useState } from 'react';

function SearchSecDiv({ showSearch, setShowSearch, setSearchedCountry }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchedCountry(value); // <-- IMPORTANT
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to CountryApp Website</h1>
      <p className="text-2xl text-purple-600 font-semibold">
        You can find data of any country in this website.
      </p>

      {showSearch && (
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80 text-lg"
          />
          <span className="absolute right-4 top-3 text-gray-400 text-xl">🔍</span>
        </div>
      )}

      <div className="flex items-center gap-5 mt-4">
        <button
          onClick={handleSearchClick}
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition text-lg"
        >
          Search
        </button>
        <button
          className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition text-lg"
        >
          HAVE A LOOK
        </button>
      </div>
    </div>
  );
}

export default SearchSecDiv;
