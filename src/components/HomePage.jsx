import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import Header from './Header';
import HeroSlider from './HeroSlider';
import SubcategoryNav from './SubcategoryNav';
import CategoryGrid from './CategoryGrid';
import ProductGrid from './ProductGrid';
import Cart from './Cart';
import Login from './Login';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    dispatch(addItem(product));
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
    setShowSubcategories(false);
  };

  const handleHeaderCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowSubcategories(true);
  };

  const handleCloseSubcategories = () => {
    setShowSubcategories(false);
    setSelectedCategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    console.log('Selected subcategory:', subcategory);
    // You can implement filtering by subcategory here
    setShowSubcategories(false);
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        onCartClick={() => setShowCart(true)}
        onLoginClick={() => setShowLogin(true)}
        onCategorySelect={handleHeaderCategorySelect}
        selectedCategory={showSubcategories ? selectedCategory : null}
      />
      
      {/* Subcategory Navigation */}
      {showSubcategories && (
        <SubcategoryNav
          selectedCategory={selectedCategory}
          onClose={handleCloseSubcategories}
          onSubcategoryClick={handleSubcategoryClick}
        />
      )}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {!showSubcategories && <HeroSlider />}
        <CategoryGrid onCategoryClick={handleCategoryClick} />
        <ProductGrid 
          onAddToCart={handleAddToCart}
          selectedCategory={!showSubcategories ? selectedCategory : null}
        />
      </div>

      {/* Modals */}
      <Cart 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
      />
      <Login 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </div>
  );
};

export default HomePage;