// File: src/admin/Layout/AdminLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Layout/Sidebar'; // Adjust path if needed
import Header from './Layout/Header';   // Optional: only include if you use a header

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        {/* Optional Header */}
        <Header />

        {/* Outlet for nested routes */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
