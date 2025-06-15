import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { formatPrice, calculateDiscount } from '../../utils/helpers';
import Button from '../common/Button';

const ProductCard = ({ product, onAddToCart, onViewProduct, isGridView = true }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  if (!isGridView) {
    // List view layout
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="flex">
          {/* Product Image */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                -{calculateDiscount(product.originalPrice, product.price)}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-purple-600 cursor-pointer transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => onViewProduct(product)}
                  variant="outline"
                  size="sm"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view layout
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{calculateDiscount(product.originalPrice, product.price)}%
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={() => onViewProduct(product)}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-sm"
            size="sm"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 
            className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors cursor-pointer"
            onClick={() => onViewProduct(product)}
          >
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          <div className="text-sm">
            {product.stock > 0 ? (
              <span className="text-emerald-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;