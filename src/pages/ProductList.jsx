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

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>

        <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {product.team}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{product.type} • {product.season}</p>

        {/* Colors */}
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500 mr-2">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-gray-200 ${
                  color === 'Red' ? 'bg-red-500' :
                  color === 'Blue' ? 'bg-blue-500' :
                  color === 'Green' ? 'bg-green-500' :
                  color === 'Purple' ? 'bg-purple-500' :
                  color === 'Orange' ? 'bg-orange-500' :
                  color === 'Pink' ? 'bg-pink-500' :
                  color === 'Yellow' ? 'bg-yellow-500' :
                  color === 'Gold' ? 'bg-yellow-400' :
                  color === 'Black' ? 'bg-black' :
                  'bg-white border-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <span className="text-xs text-gray-500 mb-2 block">Size:</span>
          <div className="flex space-x-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(product.id, size)}
                className={`px-2 py-1 text-xs border rounded transition-colors ${
                  selectedSize[product.id] === size
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-orange-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-lg font-bold text-green-600">
              {formatPrice(product.salePrice)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Shirt className="w-8 h-8 mr-3 text-orange-600" />
                Sports Jersey Collection
              </h1>
              <p className="text-gray-600">Official team jerseys from top leagues worldwide</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Users className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                <p className="text-sm text-gray-500">Authentic</p>
                <p className="font-semibold text-gray-900">Licensed</p>
              </div>
              <div className="text-center">
                <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <p className="text-sm text-gray-500">Showing</p>
                <p className="font-semibold text-gray-900">{filteredProducts.length} Jerseys</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     