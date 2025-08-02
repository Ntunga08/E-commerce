import React, { useEffect, useState } from 'react';
import './Home.css';
import barcaImage from '../assets/barca.jpg';
import chelseaImage from '../assets/chelsea.jpg';
import madridImage from '../assets/madrid.jpg';
import chelseaImage2 from '../assets/chelsea2.jpg';

const Home = () => {

  const jerseyImages = [
    { src: barcaImage, alt: 'Barcelona Jersey' },
    { src: chelseaImage, alt: 'Chelsea Jersey' },
    { src: madridImage, alt: 'Madrid Jersey' },
    { src: chelseaImage2, alt: 'Chelsea Jersey 2' },
  ];

  return (
    <div>
      <header className="header">
        <div className="container nav-container">
          <div className="logo">BULUBA_SPORTWEARS</div>
          <nav className="nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="productDetai" className="nav-link">Products</a>
            <a href="#" className="nav-link">Men</a>
            <a href="#" className="nav-link">Women</a>
            <a href="#" className="nav-link">Kids</a>
            <a href="#" className="nav-link">Sale</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Your Ultimate Sportswear Destination</h1>
          <p className="hero-text">Discover the latest trends in activewear for all ages.</p>
          <div className="image-carousel">
            <div className="carousel-track">
              {jerseyImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
              {/* Duplicate images for infinite scroll effect */}
              {jerseyImages.map((image, index) => (
                <div key={`duplicate-${index}`} className="carousel-slide">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          <button className="button">Shop Now</button>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h2 className="section-title">Featured Collections</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://via.placeholder.com/400x300" alt="Men" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Men</h3>
                <p className="product-description">Explore the best in men's activewear.</p>
              </div>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/400x300" alt="Women" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Women</h3>
                <p className="product-description">Trendy and comfortable sportswear for women.</p>
              </div>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/400x300" alt="Kids" className="product-image" />
              <div className="product-content">
                <h3 className="product-title">Kids</h3>
                <p className="product-description">Durable and stylish outfits for kids.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          &copy; 2025 SNB_SPORTWEARS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
