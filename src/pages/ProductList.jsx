import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Shirt, Trophy, Users } from 'lucide-react';

const SportsJerseyPage = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

 