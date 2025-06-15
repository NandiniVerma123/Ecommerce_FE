export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg",
      "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg"
    ],
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-hour Battery", "Bluetooth 5.0", "Quick Charge"],
    stock: 25,
    rating: 4.8,
    reviews: 127,
    brand: "AudioTech"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
      "https://images.pexels.com/photos/393048/pexels-photo-393048.jpeg"
    ],
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery"],
    stock: 18,
    rating: 4.6,
    reviews: 89,
    brand: "FitTech"
  },
  {
    id: 3,
    name: "Luxury Leather Jacket",
    price: 179.99,
    originalPrice: 229.99,
    category: "Fashion",
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      "https://images.pexels.com/photos/1124469/pexels-photo-1124469.jpeg"
    ],
    description: "Crafted from premium genuine leather, this jacket combines style and durability for the modern fashionista.",
    features: ["Genuine Leather", "Premium Quality", "Classic Design", "Multiple Sizes"],
    stock: 12,
    rating: 4.9,
    reviews: 203,
    brand: "StyleCraft"
  },
  {
    id: 4,
    name: "Professional Camera",
    price: 899.99,
    originalPrice: 1199.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      "https://images.pexels.com/photos/90947/pexels-photo-90947.jpeg"
    ],
    description: "Capture life's moments with this professional-grade camera featuring 4K video recording and advanced image stabilization.",
    features: ["4K Video Recording", "Image Stabilization", "Professional Lens", "Weather Sealed"],
    stock: 8,
    rating: 4.7,
    reviews: 156,
    brand: "PhotoPro"
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 349.99,
    originalPrice: 449.99,
    category: "Furniture",
    image: "https://images.pexels.com/photos/2181965/pexels-photo-2181965.jpeg",
    images: [
      "https://images.pexels.com/photos/2181965/pexels-photo-2181965.jpeg",
      "https://images.pexels.com/photos/2181966/pexels-photo-2181966.jpeg"
    ],
    description: "Work comfortably with this ergonomic office chair designed to support your posture during long work sessions.",
    features: ["Ergonomic Design", "Lumbar Support", "Adjustable Height", "Premium Materials"],
    stock: 15,
    rating: 4.5,
    reviews: 94,
    brand: "ComfortSeat"
  },
  {
    id: 6,
    name: "Wireless Speaker System",
    price: 149.99,
    originalPrice: 199.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
    images: [
      "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
      "https://images.pexels.com/photos/1279814/pexels-photo-1279814.jpeg"
    ],
    description: "Fill any room with rich, immersive sound from this compact wireless speaker system with deep bass.",
    features: ["Wireless Connectivity", "Rich Bass", "Compact Design", "12-hour Battery"],
    stock: 22,
    rating: 4.4,
    reviews: 78,
    brand: "SoundWave"
  }
];

export const categories = [
  { id: 1, name: "Electronics", count: 156, image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" },
  { id: 2, name: "Fashion", count: 243, image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" },
  { id: 3, name: "Furniture", count: 89, image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" },
  { id: 4, name: "Sports", count: 127, image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg" },
  { id: 5, name: "Beauty", count: 198, image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg" },
  { id: 6, name: "Books", count: 76, image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg" }
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    userName: "Sarah Johnson",
    rating: 5,
    title: "Excellent quality!",
    comment: "These headphones exceeded my expectations. The sound quality is amazing and they're very comfortable.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: 2,
    productId: 1,
    userId: 2,
    userName: "Mike Chen",
    rating: 4,
    title: "Great value for money",
    comment: "Good headphones with decent noise cancellation. Battery life is impressive.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: 3,
    productId: 2,
    userId: 3,
    userName: "Emma Davis",
    rating: 5,
    title: "Perfect fitness companion",
    comment: "This watch has all the features I need for tracking my workouts. Highly recommended!",
    date: "2024-01-12",
    verified: true
  }
];