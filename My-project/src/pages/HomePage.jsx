import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';

const HomePage = ({ onAddToCart }) => {
  return (
    <div>
      <Hero />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <Categories />
    </div>
  );
};

export default HomePage;