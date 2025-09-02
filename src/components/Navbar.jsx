import React, { useState } from 'react';

function Navbar({ countryData, setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const uniqueRegions = [...new Set(
    countryData.filter(c => c.region && c.region.trim() !== '').map(c => c.region)
  )];

  return (
    <nav className="bg-black py-4 shadow-md w-full flex items-center justify-between md:justify-center px-4 md:px-10">
      {/* Logo or brand */}
      <div className="block text-white font-bold text-xl md:hidden">Countries</div>
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menu */}
      <ul className={`flex-col md:flex md:flex-row md:space-x-10 space-y-2 md:space-y-0 absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
        {uniqueRegions.map((region) => (
          <li
            key={region}
            className="text-gray-300 hover:text-purple-600 hover:scale-105 transition cursor-pointer px-4 py-2 md:p-0 text-center"
            onClick={() => {
              setSelectedRegion(region);
              setIsOpen(false); 
            }}
          >
            {region}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
