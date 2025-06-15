import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';

const Header = ({ user, cartItems = [], onAuth, onLogout, onNavigation, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'About Us', page: 'about' },
    { name: 'FAQ', page: 'faq' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-purple-600 text-white py-2 px-4 text-center text-sm">
        <p>Free shipping on orders over $50 | Use code: FREESHIP</p>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">ShopHub</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigation(item.page)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile search */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-purple-600">
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-purple-600 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart */}
            <button 
              onClick={() => onNavigation('cart')}
              className="p-2 text-gray-600 hover:text-purple-600 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User menu */}
            {user ? (
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600">
                  <User className="w-5 h-5" />
                  <span className="hidden md:block text-sm">{user.name}</span>
                </button>
                {/* User dropdown would go here */}
              </div>
            ) : (
              <button 
                onClick={() => onAuth('login')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Sign In
              </button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile search */}
            <div className="pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigation(item.page);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;