import React, { useState } from 'react';
import Layout from './components/common/Layout';
import Modal from './components/common/Modal';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutUs from './components/common/AboutUs';
import HomePage from './pages/HomePage';
import FAQ from './components/common/FAQ';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  // Navigation handler
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Authentication handlers
  const handleAuth = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setAuthModal({ isOpen: false, mode: 'register' });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  // Cart handlers
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    if (!user) {
      handleAuth('login');
      return;
    }
    // Navigate to checkout page (to be implemented)
    alert('Checkout functionality will be implemented next!');
  };

  const handleViewProduct = (product) => {
    // Navigate to product details page (to be implemented)
    alert(`View product: ${product.name}`);
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onAddToCart={handleAddToCart} />;
      case 'products':
        return (
          <ProductsPage
            onAddToCart={handleAddToCart}
            onViewProduct={handleViewProduct}
          />
        );
      case 'cart':
        return (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
            onContinueShopping={() => handleNavigation('products')}
          />
        );
      case 'about':
        return <AboutUs />;
      case 'faq':
        return <FAQ />;
      default:
        return <HomePage onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="App">
      <Layout
        user={user}
        cartItems={cartItems}
        onAuth={handleAuth}
        onLogout={handleLogout}
        onNavigation={handleNavigation}
        currentPage={currentPage}
      >
        {/* Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 py-4">
              <button
                onClick={() => handleNavigation('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'products' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => handleNavigation('cart')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'cart' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('faq')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'faq' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                FAQ
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        {renderCurrentPage()}
      </Layout>

      {/* Authentication Modal */}
      <Modal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        title=""
        size="md"
      >
        {authModal.mode === 'login' ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => setAuthModal({ ...authModal, mode: 'register' })}
            onForgotPassword={() => setAuthModal({ ...authModal, mode: 'forgot' })}
          />
        ) : (
          <RegisterForm
            onRegister={handleRegister}
            onSwitchToLogin={() => setAuthModal({ ...authModal, mode: 'login' })}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;