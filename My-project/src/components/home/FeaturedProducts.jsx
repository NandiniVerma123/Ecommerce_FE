import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { products } from '../../data/products';
import { formatPrice, calculateDiscount } from '../../utils/helpers';
import Button from '../common/Button';

const FeaturedProducts = ({ onAddToCart }) => {
  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products at unbeatable prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
                </div>

                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-sm"
                    size="sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
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
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;