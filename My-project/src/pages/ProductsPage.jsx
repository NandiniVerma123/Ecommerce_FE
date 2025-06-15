import React, { useState, useMemo } from 'react';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import { products } from '../data/products';

const ProductsPage = ({ onAddToCart, onViewProduct }) => {
  const [isGridView, setIsGridView] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: { min: 0, max: 9999 },
    brands: [],
    minRating: 0
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'newest', label: 'Newest First' }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      
      // Price filter
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
      
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }
      
      // Rating filter
      if (product.rating < filters.minRating) {
        return false;
      }
      
      return true;
    });

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer
        default:
          return 0; // Featured (original order)
      }
    });

    return sorted;
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRange: { min: 0, max: 9999 },
      brands: [],
      minRating: 0
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of premium products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <ProductFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                {/* Results count */}
                <div className="text-gray-600">
                  Showing {filteredAndSortedProducts.length} of {products.length} products
                </div>

                {/* View and Sort Controls */}
                <div className="flex items-center space-x-4">
                  {/* View Toggle */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setIsGridView(true)}
                      className={`p-2 rounded-lg transition-colors ${
                        isGridView ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsGridView(false)}
                      className={`p-2 rounded-lg transition-colors ${
                        !isGridView ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
              }>
                {filteredAndSortedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onViewProduct={onViewProduct}
                    isGridView={isGridView}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <SlidersHorizontal className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;