import React from 'react';
import IconImage from './IconImage';

function Navbar({ countryData, setSelectedRegion }) {
  const uniqueRegions = [...new Set(
    countryData.filter(c => c.region && c.region.trim() !== '').map(c => c.region)
  )];

  return (
    <nav className="bg-white py-4 shadow-md w-full h-20 flex items-center justify-center">
      <ul className="flex justify-center items-center space-x-10 text-gray-700 font-medium">
        {uniqueRegions.map((region, index) => (
          <React.Fragment key={region}>
            <li
              className="hover:text-purple-600 hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </li>
            {index === 2 && (
              <li>
                <IconImage />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
