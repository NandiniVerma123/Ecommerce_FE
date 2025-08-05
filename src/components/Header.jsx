import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { categories } from '../data/data';

const Header = ({ onCartClick, onLoginClick, onCategorySelect, selectedCategory }) => {
  const { totalQuantity } = useSelector(state => state.cart);
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" />
            <h1 className="text-2xl font-bold text-blue-400">ShopHub</h1>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* User Profile */}
            <button 
              onClick={onLoginClick}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="hidden md:inline">
                {isAuthenticated ? `Hi, ${user?.name}` : 'Login'}
              </span>
            </button>
            
            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="relative flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="hidden md:flex items-center space-x-6 mt-4 pt-3 border-t border-slate-700">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.name)}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                selectedCategory === category.name ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;