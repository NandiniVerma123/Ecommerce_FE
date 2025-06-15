import React from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onContinueShopping }) => {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <ShoppingBag className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to fill it up!
            </p>
            <Button 
              onClick={onContinueShopping}
              size="lg"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Button
            onClick={onContinueShopping}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>

            {/* Recommended Products */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                You might also like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Add recommended products here */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-center text-gray-500">
                    <p>Recommended products coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              cartItems={cartItems}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;