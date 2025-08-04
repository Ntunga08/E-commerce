

import React, {useState} from 'react';
import {Bars3Icon , XMarkIcon} from '@heroicons/react/24/outline';

const Navbar = () => {

  const [isOPen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-sm font-bold text-blue-700 px-0">BULUBA_SPORTWEARS</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOPen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isOPen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/productList" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Men</a>
          <a href="#" className="hover:text-blue-600">Women</a>
          <a href="#" className="hover:text-blue-600">Kids</a>
          <a href="#" className="hover:text-blue-600">Sale</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOPen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/productList" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Men</a>
          <a href="#" className="hover:text-blue-600">Women</a>
          <a href="#" className="hover:text-blue-600">Kids</a>
          <a href="#" className="hover:text-blue-600">Sale</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      )}  
    </header>
  );
};

export default Navbar;
