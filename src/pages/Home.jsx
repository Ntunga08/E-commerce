import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import barcaImage from '../assets/barca.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Hardcoded jersey list
  const jerseys = new Array(12).fill({
    name: "Manchester United",
    price: "$147 for 2 nights · 5.0",
    image: barcaImage,
    tag: "Guest favorite"
  });

  // Optional: Filter jerseys by search
  const filteredJerseys = jerseys.filter(jersey =>
    jersey.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">BULUBA_SPORTWEARS</h1>

        {/* ✅ FIXED Search bar wrapper */}
        <div className="mb-6 flex items-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for jerseys..."
            className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Jersey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredJerseys.map((jersey, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 overflow-hidden bg-white shadow hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={jersey.image}
                  alt="Product"
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 bg-opacity-60 text-black text-xs px-2 py-1 rounded">
                  {jersey.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{jersey.name}</h3>
                <p className="text-gray-600 mt-1">{jersey.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
