import React from 'react';
import { 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  DollarSign,
  Eye,
  Users,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,584',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingCart,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-600'
    },
    {
      title: 'Total Products',
      value: '156',
      change: '+3.1%',
      isPositive: true,
      icon: Package,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600'
    },
    {
      title: 'Page Views',
      value: '45,678',
      change: '-2.4%',
      isPositive: false,
      icon: Eye,
      color: 'bg-gradient-to-r from-orange-500 to-red-600'
    }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: '$89.99', status: 'completed', date: '2 hours ago' },
    { id: '#12346', customer: 'Jane Smith', amount: '$156.50', status: 'processing', date: '4 hours ago' },
    { id: '#12347', customer: 'Mike Johnson', amount: '$67.25', status: 'pending', date: '6 hours ago' },
    { id: '#12348', customer: 'Sarah Wilson', amount: '$203.80', status: 'completed', date: '8 hours ago' },
    { id: '#12349', customer: 'David Brown', amount: '$95.40', status: 'shipped', date: '1 day ago' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Last 30 days</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Revenue Overview</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg font-medium">7D</button>
              <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">30D</button>
              <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">90D</button>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-600">Revenue chart will be displayed here</p>
              <p className="text-sm text-gray-500 mt-1">Integration with chart library needed</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">New Customers</p>
                  <p className="text-sm text-gray-600">This month</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">124</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Package className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800">Products Sold</p>
                  <p className="text-sm text-gray-600">This week</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">89</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Avg. Order Value</p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-purple-600">$87</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;