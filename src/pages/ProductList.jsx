import React from 'react';

const SimpleJerseyGrid = () => {
  const products = [
    {
      id: 1,
      name: "Manchester United Home",
      originalPrice: 85000,
      salePrice: 65000,
      discount: 25,
      image: "#E53E3E" // Red
    },
    {
      id: 2,
      name: "Real Madrid Away",
      originalPrice: 90000,
      salePrice: 72000,
      discount: 20,
      image: "#2D3748" // Dark
    },
    {
      id: 3,
      name: "Barcelona Home",
      originalPrice: 88000,
      salePrice: 55000,
      discount: 38,
      image: "#3182CE" // Blue
    },
    {
      id: 4,
      name: "Arsenal Third",
      originalPrice: 82000,
      salePrice: 65000,
      discount: 21,
      image: "#38A169" // Green
    },
    {
      id: 5,
      name: "Chelsea Away",
      originalPrice: 84000,
      salePrice: 58000,
      discount: 31,
      image: "#805AD5" // Purple
    },
    {
      id: 6,
      name: "Liverpool Home",
      originalPrice: 87000,
      salePrice: 70000,
      discount: 20,
      image: "#E53E3E" // Red
    },
    {
      id: 7,
      name: "PSG Third",
      originalPrice: 89000,
      salePrice: 71000,
      discount: 20,
      image: "#EC4899" // Pink
    },
    {
      id: 8,
      name: "AC Milan Home",
      originalPrice: 83000,
      salePrice: 66000,
      discount: 20,
      image: "#2D3748" // Dark
    },
    {
      id: 9,
      name: "Bayern Munich Away",
      originalPrice: 86000,
      salePrice: 69000,
      discount: 20,
      image: "#3182CE" // Blue
    },
    {
      id: 10,
      name: "Juventus Home",
      originalPrice: 85000,
      salePrice: 68000,
      discount: 20,
      image: "#2D3748" // Dark
    },
    {
      id: 11,
      name: "Inter Milan Away",
      originalPrice: 84000,
      salePrice: 67000,
      discount: 20,
      image: "#3182CE" // Blue
    },
    {
      id: 12,
      name: "Atletico Madrid Third",
      originalPrice: 81000,
      salePrice: 65000,
      discount: 20,
      image: "#E53E3E" // Red
    }
  ];

  const formatPrice = (price) => {
    return `Tsh ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {product.discount}% OFF
                    </span>
                  </div>
                </div>
              )}

              {/* Jersey Image Area */}
              <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                {/* Simple Jersey Shape */}
                <div 
                  className="w-24 h-32 rounded-t-2xl relative shadow-md"
                  style={{ backgroundColor: product.image }}
                >
                  {/* Jersey details */}
                  <div className="absolute inset-2 bg-white bg-opacity-20 rounded-t-xl"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white bg-opacity-30 rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                    {product.name.split(' ')[0].substring(0, 3).toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="space-y-1">
                  {product.discount > 0 && (
                    <div className="text-xs text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </div>
                  )}
                  <div className="text-sm font-bold text-green-600">
                    {formatPrice(product.salePrice)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleJerseyGrid;