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
    