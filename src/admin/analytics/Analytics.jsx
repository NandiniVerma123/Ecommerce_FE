import React from 'react';
import { TrendingUp, TrendingDown, Users, ShoppingCart } from 'lucide-react';
import { useAdminStore } from '../../hooks/useAdminStore';

const AnalyticsView = () => {
  const { analytics, stats } = useAdminStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your business performance and metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">3.24%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="text-green-500" size={16} />
                <span className="text-sm text-green-600 ml-1">+0.8%</span>
              </div>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <TrendingUp size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">$156.78</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="text-green-500" size={16} />
                <span className="text-sm text-green-600 ml-1">+12.5%</span>
              </div>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <ShoppingCart size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Customer Retention</p>
              <p className="text-2xl font-bold text-gray-900">68.5%</p>
              <div className="flex items-center mt-2">
                <TrendingDown className="text-red-500" size={16} />
                <span className="text-sm text-red-600 ml-1">-2.1%</span>
              </div>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-900">15.3%</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="text-green-500" size={16} />
                <span className="text-sm text-green-600 ml-1">+3.2%</span>
              </div>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <TrendingUp size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {analytics.orderTrends.map((trend, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-blue-500 rounded-t w-full transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${(trend.orders / 200) * 100}%`, minHeight: '20px' }}
                ></div>
                <span className="text-xs text-gray-600 mt-2">{trend.month}</span>
                <span className="text-xs font-semibold text-gray-900">{trend.orders}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Performance</h3>
          <div className="space-y-4">
            {analytics.topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">{product.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 rounded-full h-2 w-24">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(product.sales / 50) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{product.sales}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingCart className="text-blue-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Total Sales</h4>
            <p className="text-2xl font-bold text-blue-600">${stats.revenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-green-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">New Customers</h4>
            <p className="text-2xl font-bold text-green-600">127</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Growth Rate</h4>
            <p className="text-2xl font-bold text-purple-600">+23.5%</p>
            <p className="text-sm text-gray-500">vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;