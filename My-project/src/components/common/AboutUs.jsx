import React from 'react';
import { Users, Award, Globe, Heart, Shield, Truck, Star, Target } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Globe, label: 'Countries Served', value: '50+' },
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best possible experience for our customers.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We carefully curate our products and work only with trusted suppliers to ensure premium quality.'
    },
    {
      icon: Truck,
      title: 'Fast & Reliable',
      description: 'Quick shipping, reliable service, and hassle-free returns are at the core of our operations.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously evolve our platform and services to meet the changing needs of modern shoppers.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      description: 'Visionary leader with 15+ years in e-commerce and retail innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      description: 'Technology expert focused on creating seamless shopping experiences.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Experience',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      description: 'Passionate about delivering exceptional customer service and satisfaction.'
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
      description: 'Operations specialist ensuring efficient fulfillment and logistics.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ShopHub
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize online shopping by providing exceptional products, 
              unbeatable prices, and outstanding customer service to shoppers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, ShopHub began as a small startup with a big dream: to create 
                  the world's most customer-centric online shopping platform. What started in a 
                  garage with just three passionate entrepreneurs has grown into a global marketplace 
                  serving millions of customers worldwide.
                </p>
                <p>
                  Our journey hasn't always been easy, but our commitment to quality, innovation, 
                  and customer satisfaction has remained unwavering. We've built lasting partnerships 
                  with trusted suppliers, invested heavily in technology, and assembled a world-class 
                  team dedicated to making your shopping experience exceptional.
                </p>
                <p>
                  Today, ShopHub is more than just an e-commerce platform – we're a community of 
                  shoppers, sellers, and innovators working together to redefine what online 
                  shopping can be.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind ShopHub who work tirelessly to bring you the best shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            To democratize access to quality products by creating an inclusive, innovative, and 
            sustainable e-commerce platform that connects customers with the products they love, 
            while supporting businesses of all sizes to thrive in the digital economy.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Our Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;