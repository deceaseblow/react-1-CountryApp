import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-purple-500 font-poppins px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Brand Info */}
        <div className="lg:w-1/3 space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold">CountryApp</h2>
          <p className="text-purple-300">
            Your gateway to exploring countries around the world — culture, geography, travel tips & more.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
          {/* Continents */}
          <div className="text-center sm:text-left">
            <h3 className="uppercase font-semibold mb-3 border-b border-purple-600 pb-1">Continents</h3>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition">Africa</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Asia</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Europe</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Americas</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="text-center sm:text-left">
            <h3 className="uppercase font-semibold mb-3 border-b border-purple-600 pb-1">Popular Destinations</h3>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition">Paris</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Tokyo</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">New York</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Cape Town</a></li>
            </ul>
          </div>

          {/* Travel Tips */}
          <div className="text-center sm:text-left">
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

      {/* Optional: Small copyright section */}
      <div className="mt-10 text-center text-purple-400 text-sm">
        &copy; {new Date().getFullYear()} CountryApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
