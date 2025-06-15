import React from 'react';
import { categories } from '../../data/products';

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} items</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Weekend Sale</h3>
            <p className="text-purple-100 mb-6">
              Get up to 50% off on selected electronics and gadgets. Limited time offer!
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Electronics
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Fashion Week</h3>
            <p className="text-emerald-100 mb-6">
              Discover the latest fashion trends with exclusive discounts on clothing and accessories.
            </p>
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Fashion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;