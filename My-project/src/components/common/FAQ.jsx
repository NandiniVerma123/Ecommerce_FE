import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free shipping is available on orders over $50. International shipping times vary by location but typically take 7-14 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Items must be unused and in original packaging. Return shipping is free for defective items, while customer returns may incur a small shipping fee."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply and are the responsibility of the customer."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly through the carrier's website. You can also check your order status in your account dashboard."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After this time, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes."
    },
    {
      question: "Do you offer warranties on your products?",
      answer: "Yes, all electronics come with manufacturer warranties ranging from 1-3 years. We also offer extended warranty options at checkout. Fashion items and accessories have a 90-day quality guarantee."
    },
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign In' button in the top right corner, then select 'Create Account'. You'll need to provide your email, create a password, and fill in your basic information. Account creation is free and gives you access to order tracking, wishlists, and exclusive offers."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact us within 48 hours with photos of the damage. We'll arrange for a replacement or full refund at no cost to you, including return shipping."
    },
    {
      question: "Do you have a loyalty program?",
      answer: "Yes! Our ShopHub Rewards program gives you points for every purchase, review, and referral. Points can be redeemed for discounts on future orders. Premium members get free shipping, early access to sales, and exclusive deals."
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about shopping, shipping, returns, and more.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Contact Support
              </button>
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;