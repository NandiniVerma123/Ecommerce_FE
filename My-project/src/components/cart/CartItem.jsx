import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../../utils/helpers';
import Button from '../common/Button';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      onRemoveItem(item.id);
    } else {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(item.price)}
          </span>
          {item.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(item.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 text-center min-w-[3rem] font-medium">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <div className="text-lg font-bold text-gray-900">
          {formatPrice(item.price * item.quantity)}
        </div>
        <div className="text-sm text-gray-500">
          {item.quantity} × {formatPrice(item.price)}
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemoveItem(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        title="Remove item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;