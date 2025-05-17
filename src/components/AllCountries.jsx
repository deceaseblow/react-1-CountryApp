import React, { useState } from 'react';
import CountryCard from './CountryCard';

function AllCountries({ country }) {
    const [visibleCount, setVisibleCount] = useState(9);

    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div className="px-8 py-12 bg-gray-100">
            <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">All Countries</h2>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8 p-8">
                    {country.slice(0, visibleCount).map((item, index) => (
                        <CountryCard key={index} country={item} />
                    ))}
                </div>
                {visibleCount < country.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={loadMore}
                            className="px-6 py-3 text-lg font-semibold bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllCountries;
