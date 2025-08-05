import React from 'react';
import { categories } from '../data/data';

const CategoryGrid = ({ onCategoryClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.name)}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
              {category.icon}
            </div>
            <span className="text-sm font-medium text-slate-700 text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;