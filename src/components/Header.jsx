import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchSecDiv from './SearchSecDiv';

function Header({ countryData, setSearchedCountry, setSelectedRegion }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-col items-center justify-center text-center gap-3 bg-gray-100">
      <Navbar countryData={countryData} setSelectedRegion={setSelectedRegion} />
      <SearchSecDiv
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setSearchedCountry={setSearchedCountry}
      />
    </header>
  );
}

export default Header;
