import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import barcaImage from '../assets/barca.jpg';
import chelseaImage from '../assets/chelsea.jpg';
import madridImage from '../assets/madrid.jpg';
import chelseaImage2 from '../assets/chelsea2.jpg';

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  const jerseyImages = [
    { src: barcaImage, alt: 'Barcelona Jersey' },
    { src: chelseaImage, alt: 'Chelsea Jersey' },
    { src: madridImage, alt: 'Madrid Jersey' },
    { src: chelseaImage2, alt: 'Chelsea Jersey 2' },
  ];

  useEffect(() => {
    // Only show loading on initial page load
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  if (initialLoading && window.location.pathname === '/') {
    return <Loading />;
  }

  return (
    <div>
          <Navbar/>

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
            {['Men', 'Women', 'Kids'].map((category) => (
              <div key={category} className="product-card">
                <img 
                  src="https://via.placeholder.com/400x300" 
                  alt={category} 
                  className="product-image" 
                />
                <div className="product-content">
                  <h3 className="product-title">{category}</h3>
                  <p className="product-description">
                    {category === 'Men' && 'Explore the best in men\'s activewear.'}
                    {category === 'Women' && 'Trendy and comfortable sportswear for women.'}
                    {category === 'Kids' && 'Durable and stylish outfits for kids.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          &copy; 2025 BULUBA_SPORTWEARS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
