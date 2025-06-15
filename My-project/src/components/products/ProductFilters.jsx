import React, { useState } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import { categories } from '../../data/products';

const ProductFilters = ({ filters, onFiltersChange, onClearFilters }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: 'Over $500', min: 500, max: 9999 }
  ];

  const brands = ['AudioTech', 'FitTech', 'StyleCraft', 'PhotoPro', 'ComfortSeat', 'SoundWave'];

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handlePriceRangeChange = (range) => {
    onFiltersChange({ 
      ...filters, 
      priceRange: filters.priceRange.min === range.min && filters.priceRange.max === range.max 
        ? { min: 0, max: 9999 }
        : range 
    });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    onFiltersChange({ ...filters, brands: newBrands });
  };

  const handleRatingChange = (rating) => {
    onFiltersChange({ 
      ...filters, 
      minRating: filters.minRating === rating ? 0 : rating 
    });
  };

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 mb-3"
        >
          {title}
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };

  const filtersContent = (
    <div className="space-y-6">
      {/* Categories */}
      <FilterSection title="Categories">
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange.min === range.min && filters.priceRange.max === range.max}
                onChange={() => handlePriceRangeChange(range)}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Customer Rating">
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="text-purple-600 focus:ring-purple-500"
              />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </div>
                ))}
                <span className="text-sm text-gray-700 ml-2">& up</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
            <Filter className="w-5 h-5 text-gray-500" />
          </div>
          {filtersContent}
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
            <button
              onClick={() => setShowMobileFilters(false)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4">
            {filtersContent}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilters;