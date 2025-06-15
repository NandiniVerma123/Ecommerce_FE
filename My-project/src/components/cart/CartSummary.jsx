import React from 'react';
import { Truck, Shield, Gift } from 'lucide-react';
import { formatPrice } from '../../utils/helpers';
import Button from '../common/Button';

const CartSummary = ({ cartItems, onCheckout }) => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const benefits = [
    {
      icon: Truck,
      text: subtotal > 50 ? 'Free shipping included!' : `Add ${formatPrice(50 - subtotal)} for free shipping`
    },
    {
      icon: Shield,
      text: 'Secure checkout with SSL encryption'
    },
    {
      icon: Gift,
      text: 'Free gift wrapping available'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
      
      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3 text-sm">
            <benefit.icon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-600">{benefit.text}</span>
          </div>
        ))}
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Button variant="outline" size="sm">
            Apply
          </Button>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={onCheckout}
        className="w-full"
        size="lg"
        disabled={cartItems.length === 0}
      >
        Proceed to Checkout
      </Button>

      {/* Security Note */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Your payment information is processed securely. We do not store credit card details.
      </p>
    </div>
  );
};

export default CartSummary;