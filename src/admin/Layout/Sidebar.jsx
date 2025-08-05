import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { useAdminStore } from '../../hooks/useAdminStore'; // Make sure this exists

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAdminStore();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
a
  const menuItems = [
    { id: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { id: '/admin/products', label: 'Products', icon: Package },
    { id: '/admin/users', label: 'Users', icon: Users },
    { id: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { id: '/admin/settings', label: 'Settings', icon: Settings }
  ];

  const handleLogout = () => {
    // ✅ Optional: clear token/localStorage here
    console.log('Logging out...');
    setShowLogoutModal(false);
    navigate('/login'); // ✅ Navigate to login page
  };

  return (
    <>
      <div className={`bg-slate-900 text-white transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      } min-h-screen flex flex-col justify-between`}>

        {/* --- Top Header and Menu Items --- */}
        <div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <h1 className="text-xl font-bold">Admin Panel</h1>
              )}
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
            </div>
          </div>

          {/* --- Navigation Items --- */}
          <nav className="mt-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-slate-800 transition-colors ${
                    isActive ? 'bg-slate-800 border-r-2 border-blue-500' : ''
                  }`}
                >
                  <Icon size={20} />
                  {!sidebarCollapsed && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* --- Logout Button --- */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => setShowLogoutModal(true)}
            className={`w-full flex items-center px-4 py-3 text-left text-red-500 hover:bg-red-600 hover:text-white rounded-md transition-colors ${
              sidebarCollapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut size={20} />
            {!sidebarCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* --- Logout Confirmation Modal --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Confirm Logout</h2>
            <p className="text-gray-700 mb-6">Are you sure you want to logout from the admin panel?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
