import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Customer Service',
      links: [
        'Contact Us',
        'FAQ',
        'Shipping Info',
        'Returns & Exchanges',
        'Size Guide',
        'Track Your Order'
      ]
    },
    {
      title: 'About ShopHub',
      links: [
        'About Us',
        'Careers',
        'Press',
        'Sustainability',
        'Investors',
        'Affiliates'
      ]
    },
    {
      title: 'Quick Links',
      links: [
        'New Arrivals',
        'Best Sellers',
        'Sale',
        'Gift Cards',
        'Store Locator',
        'Student Discount'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new arrivals, and style inspiration.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">ShopHub</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for quality products at unbeatable prices. 
              We're committed to providing exceptional shopping experiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>123 Commerce Street, Shop City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>support@shophub.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 ShopHub. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;