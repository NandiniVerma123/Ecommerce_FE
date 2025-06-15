import React from 'react';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure checkout'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer service'
    },
    {
      icon: ShoppingBag,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  return (
    <section className="relative">
      {/* Main Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Discover Amazing
                  <span className="block text-yellow-400">Products</span>
                </h1>
                <p className="text-xl text-purple-100 max-w-lg">
                  Shop the latest trends and find everything you need at unbeatable prices. 
                  Quality products, fast shipping, and exceptional service.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                  Shop Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  View Categories
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-purple-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-purple-200 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-purple-200 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                  alt="Shopping Experience"
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg">
                  🔥 Hot Deals!
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  ✨ New Arrivals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;