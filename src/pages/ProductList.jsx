import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Shirt, Trophy, Users } from 'lucide-react';

const SportsJerseyPage = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      id: 1,
      name: "Manchester United Home Jersey",
      originalPrice: 85000,
      salePrice: 65000,
      discount: 24,
      team: "Manchester United",
      season: "2024/25",
      type: "Home",
      sport: "Football",
      rating: 4.8,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red', 'White'],
      category: "Premier League"
    },
    {
      id: 2,
      name: "Real Madrid Away Jersey",
      originalPrice: 90000,
      salePrice: 72000,
      discount: 20,
      team: "Real Madrid",
      season: "2024/25",
      type: "Away",
      sport: "Football",
      rating: 4.9,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Gold'],
      category: "La Liga"
    },
    {
      id: 3,
      name: "Barcelona Home Jersey",
      originalPrice: 88000,
      salePrice: 55000,
      discount: 38,
      team: "Barcelona",
      season: "2024/25",
      type: "Home",
      sport: "Football",
      rating: 4.7,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Blue', 'Red'],
      category: "La Liga"
    },
    {
      id: 4,
      name: "Lakers Home Jersey",
      originalPrice: 95000,
      salePrice: 76000,
      discount: 20,
      team: "Los Angeles Lakers",
      season: "2024/25",
      type: "Home",
      sport: "Basketball",
      rating: 4.6,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Purple', 'Gold'],
      category: "NBA"
    },
    {
      id: 5,
      name: "PSG Third Jersey",
      originalPrice: 82000,
      salePrice: 65000,
      discount: 21,
      team: "Paris Saint-Germain",
      season: "2024/25",
      type: "Third",
      sport: "Football",
      rating: 4.5,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Pink', 'Black'],
      category: "Ligue 1"
    },
    {
      id: 6,
      name: "Golden State Warriors Away",
      originalPrice: 92000,
      salePrice: 73000,
      discount: 21,
      team: "Golden State Warriors",
      season: "2024/25",
      type: "Away",
      sport: "Basketball",
      rating: 4.8,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Blue', 'Yellow'],
      category: "NBA"
    },
    {
      id: 7,
      name: "Arsenal Home Jersey",
      originalPrice: 86000,
      salePrice: 69000,
      discount: 20,
      team: "Arsenal",
      season: "2024/25",
      type: "Home",
      sport: "Football",
      rating: 4.7,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red', 'White'],
      category: "Premier League"
    },
    {
      id: 8,
      name: "Chelsea Away Jersey",
      originalPrice: 84000,
      salePrice: 58000,
      discount: 31,
      team: "Chelsea",
      season: "2024/25",
      type: "Away",
      sport: "Football",
      rating: 4.4,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Orange', 'Blue'],
      category: "Premier League"
    },
    {
      id: 9,
      name: "Miami Heat Vice Jersey",
      originalPrice: 98000,
      salePrice: 78000,
      discount: 20,
      team: "Miami Heat",
      season: "2024/25",
      type: "City Edition",
      sport: "Basketball",
      rating: 4.9,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Pink', 'Blue'],
      category: "NBA"
    },
    {
      id: 10,
      name: "Liverpool Third Jersey",
      originalPrice: 87000,
      salePrice: 70000,
      discount: 20,
      team: "Liverpool",
      season: "2024/25",
      type: "Third",
      sport: "Football",
      rating: 4.6,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Green', 'Gold'],
      category: "Premier League"
    },
    {
      id: 11,
      name: "AC Milan Home Jersey",
      originalPrice: 83000,
      salePrice: 66000,
      discount: 20,
      team: "AC Milan",
      season: "2024/25",
      type: "Home",
      sport: "Football",
      rating: 4.5,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red', 'Black'],
      category: "Serie A"
    },
    {
      id: 12,
      name: "Boston Celtics Home Jersey",
      originalPrice: 94000,
      salePrice: 75000,
      discount: 20,
      team: "Boston Celtics",
      season: "2024/25",
      type: "Home",
      sport: "Basketball",
      rating: 4.7,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Green', 'White'],
      category: "NBA"
    }
  ];

  const categories = ['All', 'Premier League', 'La Liga', 'NBA', 'Serie A', 'Ligue 1'];
  const filteredProducts = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSize(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const formatPrice = (price) => {
    return `Tsh ${price.toLocaleString()}`;
  };

  const getSportIcon = (sport) => {
    return sport === 'Basketball' ? <Trophy className="w-4 h-4" /> : <Shirt className="w-4 h-4" />;
  };

  const ProductCard = ({ product }) => (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group relative"
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {product.discount}% OFF
          </span>
        </div>
      )}

      {/* Sport Badge */}
      <div className="absolute top-3 right-12 z-10">
        <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg">
          {getSportIcon(product.sport)}
        </div>
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-16 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 group/heart"
      >
        <Heart
          className={`w-5 h-5 transition-colors duration-200 ${
            favorites.has(product.id)
              ? 'fill-red-500 text-red-500'
              : 'text-gray-600 group-hover/heart:text-red-500'
          }`}
        />
      </div>

      {/* Jersey Display */}
      <div className="relative h-52 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <div className="relative">
          {/* Jersey Shape */}
          <div className="w-36 h-44 bg-gradient-to-b from-emerald-600 to-emerald-800 rounded-t-3xl relative transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
            {/* Jersey Details */}
            <div className="absolute inset-2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
              {product.team.split(' ').pop().substring(0, 3).toUpperCase()}
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-xs">
              {product.season}
            </div>
          </div>
          {/* Jersey Number */}
          <div className="absolute top-6 right-2 bg-white text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            10
          </div>
        </div>
        
        {/* Hover Overlay */}
        {hoveredProduct === product.id && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Eye className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
