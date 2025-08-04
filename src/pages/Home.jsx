
import React from 'react';
import Navbar from '../components/Navbar';
import barcaImage from '../assets/barca.jpg'; 

const Home = () =>  {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <h1 className="text-3xl font-bold ">BULUBA_SPORTWEARS</h1>
        <div className='rounded-3xl  border-gray overflow-hidden bg-white inset-shadow-xl hover:shadow-md transition w-64 mt-4'>
          <div className='relative'>
            <img src={barcaImage} alt="Product" className="w-full h-auto object-cover mb-4" />
  
            <span className="absolute top-2  bg-red bg-opacity-60 text-black text-xs px-2 py-1 rounded">Guest favorite</span>
          </div>
          <div className='p-4'>
            <h3 className='font-semibold text-lg'>Manchester United</h3>
            <p className='text-gray-600 mt-1'>$147 for 2 nights  5.0</p>
          </div>    
        </div>
      </div>
    </>
  );
}
export default Home;