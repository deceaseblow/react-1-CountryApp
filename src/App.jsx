import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import countryData from './data/CountryData';
import Footer from './components/Footer';

function App() {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const [randomCountry] = useState(() => {
    const randomIndex = Math.floor(Math.random() * countryData.length);
    return countryData[randomIndex];
  });

  const filteredCountries = countryData.filter(country => {
    const matchesName = country.name.toLowerCase().includes(searchedCountry.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesName && matchesRegion;
  });

  return (
    <>
      <Header
        countryData={countryData}
        setSearchedCountry={setSearchedCountry}
        setSelectedRegion={setSelectedRegion}
      />
      <Main
        randomCountry={randomCountry}
        countryData={filteredCountries}
      />
      <Footer />
    </>
  );
}

export default App;
