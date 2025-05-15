import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-purple-500 font-poppins px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-3xl font-extrabold">CountryApp</h2>
          <p className="text-purple-300">
            Your gateway to exploring countries around the world — culture, geography, travel tips & more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:w-2/3 mx-auto">
          <div>
            <h3 className="uppercase font-semibold mb-3 border-b border-purple-600 pb-1">Continents</h3>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition">Africa</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Asia</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Europe</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Americas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase font-semibold mb-3 border-b border-purple-600 pb-1">Popular Destinations</h3>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition">Paris</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Tokyo</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">New York</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Cape Town</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase font-semibold mb-3 border-b border-purple-600 pb-1">Travel Tips</h3>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition">Packing Essentials</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Visa & Passport</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Local Customs</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Safety</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
