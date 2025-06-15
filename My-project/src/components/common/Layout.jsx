import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, user, cartItems = [], onAuth, onLogout, onNavigation, currentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        user={user} 
        cartItems={cartItems}
        onAuth={onAuth}
        onLogout={onLogout}
        onNavigation={onNavigation}
        currentPage={currentPage}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;