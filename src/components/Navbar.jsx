import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">BULUBA_SPORTWEARS</div>
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="productDetail" className="nav-link">Products</a>
          <a href="#" className="nav-link">Men</a>
          <a href="#" className="nav-link">Women</a>
          <a href="#" className="nav-link">Kids</a>
          <a href="#" className="nav-link">Sale</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;