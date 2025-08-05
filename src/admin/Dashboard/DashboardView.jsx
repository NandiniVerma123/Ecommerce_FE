import React from 'react';
import { ShoppingCart, Package, Users, DollarSign } from 'lucide-react';
import { useAdminStore } from '../../hooks/useAdminStore';
import StatsCard from './StatsCard';

const DashboardView = () => {
  const { stats, analytics } = useAdminStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Orders"
          value={stats.totalOrders.toLocaleString()}
          icon={ShoppingCart}
          trend="up"
          trendValue="12"
          color="blue"
        />
        <StatsCard
          title="Total Products"
          value={stats.totalProducts.toLocaleString()}
          icon={Package}
          trend="up"
          trendValue="8"
          color="green"
        />
        <StatsCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          icon={Users}
          trend="up"
          trendValue="15"
          color="purple"
        />
        <StatsCard
          title="Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend="up"
          trendValue="23"
          color="yellow"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Trends */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Trends</h3>
          <div className="space-y-3">
            {analytics.orderTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{trend.month}</span>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-200 rounded-full h-2 w-20">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(trend.orders / 200) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{trend.orders}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-3">
            {analytics.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{product.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-200 rounded-full h-2 w-20">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(product.sales / 50) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.sales}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New order #1234 received from John Doe</span>
            <span className="text-xs text-gray-400 ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Product "Premium Headphones" stock updated</span>
            <span className="text-xs text-gray-400 ml-auto">4 hours ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New user registration: Jane Smith</span>
            <span className="text-xs text-gray-400 ml-auto">6 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;