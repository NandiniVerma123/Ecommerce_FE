export const categories = [
  { id: 1, name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
  { id: 2, name: 'Fashion', icon: '👗', color: 'bg-pink-500' },
  { id: 3, name: 'Home & Kitchen', icon: '🏠', color: 'bg-green-500' },
  { id: 4, name: 'Books', icon: '📚', color: 'bg-purple-500' },
  { id: 5, name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
  { id: 6, name: 'Beauty', icon: '💄', color: 'bg-rose-500' },
  { id: 7, name: 'Automotive', icon: '🚗', color: 'bg-gray-500' },
  { id: 8, name: 'Toys', icon: '🧸', color: 'bg-yellow-500' }
];

export const subcategories = {
  'Fashion': {
    "Men's Clothing": ['T-Shirts', 'Shirts', 'Jeans', 'Formal Wear', 'Ethnic Wear', 'Innerwear', 'Sportswear'],
    "Women's Clothing": ['Dresses', 'Tops', 'Sarees', 'Kurtas', 'Jeans', 'Ethnic Wear', 'Western Wear'],
    "Men's Footwear": ['Casual Shoes', 'Formal Shoes', 'Sports Shoes', 'Sandals', 'Sneakers'],
    "Women's Footwear": ['Heels', 'Flats', 'Sandals', 'Sports Shoes', 'Boots'],
    "Accessories": ['Watches', 'Sunglasses', 'Bags', 'Belts', 'Jewelry', 'Wallets'],
    "Featured Brands": ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'H&M', 'Zara', 'Forever 21']
  },
  'Electronics': {
    "Mobiles & Tablets": ['Smartphones', 'Feature Phones', 'Tablets', 'Mobile Accessories'],
    "Laptops & Computers": ['Laptops', 'Desktops', 'Gaming Laptops', 'Accessories'],
    "Audio & Video": ['Headphones', 'Speakers', 'Home Theater', 'Soundbars'],
    "Cameras": ['DSLR', 'Point & Shoot', 'Action Cameras', 'Camera Accessories'],
    "Gaming": ['Gaming Consoles', 'Gaming Accessories', 'Games'],
    "Smart Devices": ['Smart Watches', 'Smart Home', 'Fitness Trackers']
  },
  'Home & Kitchen': {
    "Kitchen Appliances": ['Mixer Grinders', 'Juicers', 'Coffee Makers', 'Microwave Ovens'],
    "Home Appliances": ['Air Conditioners', 'Refrigerators', 'Washing Machines', 'Water Purifiers'],
    "Furniture": ['Sofas', 'Beds', 'Dining Tables', 'Chairs', 'Storage'],
    "Home Decor": ['Wall Art', 'Lighting', 'Curtains', 'Rugs', 'Plants'],
    "Kitchen & Dining": ['Cookware', 'Dinnerware', 'Kitchen Tools', 'Storage Containers'],
    "Bedding & Bath": ['Bed Sheets', 'Towels', 'Pillows', 'Blankets']
  }
};
export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.8,
    reviews: 2847,
    description: 'Latest iPhone with advanced camera system'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 849,
    originalPrice: 949,
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.6,
    reviews: 1923,
    description: 'Powerful Android smartphone with AI features'
  },
  {
    id: 3,
    name: 'Designer Dress',
    price: 89,
    originalPrice: 129,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
    rating: 4.4,
    reviews: 567,
    description: 'Elegant evening dress for special occasions'
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.7,
    reviews: 1456,
    description: 'Premium noise-cancelling wireless headphones'
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 159,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Kitchen',
    rating: 4.5,
    reviews: 892,
    description: 'Professional grade coffee maker for home use'
  },
  {
    id: 6,
    name: 'Running Shoes',
    price: 129,
    originalPrice: 159,
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports',
    rating: 4.6,
    reviews: 1234,
    description: 'Comfortable running shoes for daily workouts'
  },
  {
    id: 7,
    name: 'Laptop Backpack',
    price: 49,
    originalPrice: 69,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
    rating: 4.3,
    reviews: 678,
    description: 'Durable laptop backpack with multiple compartments'
  },
  {
    id: 8,
    name: 'Smart Watch',
    price: 299,
    originalPrice: 349,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.5,
    reviews: 2156,
    description: 'Advanced smartwatch with health monitoring'
  },
  {
    id: 9,
    name: 'Skincare Set',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beauty',
    rating: 4.7,
    reviews: 445,
    description: 'Complete skincare routine for healthy skin'
  },
  {
    id: 10,
    name: 'Gaming Chair',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Kitchen',
    rating: 4.4,
    reviews: 789,
    description: 'Ergonomic gaming chair for long sessions'
  },
  {
    id: 11,
    name: 'Cookbook Collection',
    price: 35,
    originalPrice: 45,
    image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books',
    rating: 4.6,
    reviews: 324,
    description: 'Essential cookbook collection for home chefs'
  },
  {
    id: 12,
    name: 'Yoga Mat',
    price: 29,
    originalPrice: 39,
    image: 'https://images.pexels.com/photos/3984356/pexels-photo-3984356.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sports',
    rating: 4.5,
    reviews: 567,
    description: 'Non-slip yoga mat for daily practice'
  }
];