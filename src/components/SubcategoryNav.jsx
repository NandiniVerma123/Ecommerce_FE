import React from 'react';
import { X } from 'lucide-react';
import { subcategories } from '../data/data';

const SubcategoryNav = ({ selectedCategory, onClose, onSubcategoryClick }) => {
  if (!selectedCategory || !subcategories[selectedCategory]) {
    return null;
  }

  const categoryData = subcategories[selectedCategory];

  return (
    <div className="bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800">{selectedCategory}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {Object.entries(categoryData).map(([subcategory, items]) => (
            <div key={subcategory} className="space-y-2">
              <h4 className="font-medium text-slate-800 text-sm border-b border-slate-200 pb-1">
                {subcategory}
              </h4>
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onSubcategoryClick(item)}
                      className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors block text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryNav;