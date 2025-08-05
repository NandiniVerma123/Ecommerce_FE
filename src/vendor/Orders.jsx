import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Package, 
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-12345',
      customer: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      products: [
        { name: 'Wireless Headphones', quantity: 1, price: 129.99 },
        { name: 'Phone Case', quantity: 2, price: 19.99 }
      ],
      total: 169.97,
      status: 'processing',
      date: '2024-01-15T10:30:00',
      address: '123 Main St, New York, NY 10001'
    },
    {
      id: '#ORD-12346',
      customer: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      products: [
        { name: 'Coffee Mug Set', quantity: 1, price: 34.99 }
      ],
      total: 34.99,
      status: 'shipped',
      date: '2024-01-14T14:20:00',
      address: '456 Oak Ave, Los Angeles, CA 90210'
    },
    {
      id: '#ORD-12347',
      customer: {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      products: [
        { name: 'T-Shirt', quantity: 3, price: 24.99 },
        { name: 'Leather Wallet', quantity: 1, price: 49.99 }
      ],
      total: 124.96,
      status: 'delivered',
      date: '2024-01-13T09:15:00',
      address: '789 Pine St, Chicago, IL 60601'
    },
    {
      id: '#ORD-12348',
      customer: {
        name: 'Sarah Wilson',
        email: 'sarah@example.com',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      products: [
        { name: 'Smartphone Stand', quantity: 2, price: 19.99 }
      ],
      total: 39.98,
      status: 'pending',
      date: '2024-01-12T16:45:00',
      address: '321 Elm St, Miami, FL 33101'
    },
    {
      id: '#ORD-12349',
      customer: {
        name: 'David Brown',
        email: 'david@example.com',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      products: [
        { name: 'Gaming Mouse', quantity: 1, price: 79.99 },
        { name: 'Mouse Pad', quantity: 1, price: 15.99 }
      ],
      total: 95.98,
      status: 'cancelled',
      date: '2024-01-11T11:30:00',
      address: '654 Maple Dr, Seattle, WA 98101'
    }
  ];

  const statusConfig = {
    pending: { 
      color: 'bg-yellow-100 text-yellow-800', 
      icon: Clock,
      label: 'Pending'
    },
    processing: { 
      color: 'bg-blue-100 text-blue-800', 
      icon: Package,
      label: 'Processing'
    },
    shipped: { 
      color: 'bg-purple-100 text-purple-800', 
      icon: Truck,
      label: 'Shipped'
    },
    delivered: { 
      color: 'bg-green-100 text-green-800', 
      icon: CheckCircle,
      label: 'Delivered'
    },
    cancelled: { 
      color: 'bg-red-100 text-red-800', 
      icon: AlertCircle,
      label: 'Cancelled'
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track all your customer orders</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
          <Download className="w-5 h-5" />
          <span>Export Orders</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(statusConfig).map(([status, config]) => {
          const Icon = config.icon;
          const count = orders.filter(order => order.status === status).length;
          
          return (
            <div key={status} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-6 h-6 text-gray-600" />
                <span className="text-2xl font-bold text-gray-800">{count}</span>
              </div>
              <p className="text-sm text-gray-600">{config.label}</p>
            </div>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              {Object.entries(statusConfig).map(([status, config]) => (
                <option key={status} value={status}>{config.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const StatusIcon = statusConfig[order.status].icon;
          
          return (
            <div key={order.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={order.customer.avatar}
                      alt={order.customer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.customer.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[order.status].color}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span>{statusConfig[order.status].label}</span>
                    </span>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-3">Order Items</h4>
                    <div className="space-y-2">
                      {order.products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{product.name}</p>
                            <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
                          </div>
                          <p className="font-semibold text-gray-800">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Order Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="text-gray-800">{formatDate(order.date)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total:</span>
                          <span className="font-semibold text-gray-800">${order.total.toFixed(2)}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-200">
                          <p className="text-gray-600 text-xs">Shipping Address:</p>
                          <p className="text-gray-800 text-xs mt-1">{order.address}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">View</span>
                      </button>
                      {order.status === 'pending' && (
                        <button className="flex-1 py-2 px-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                          <span className="text-sm">Process</span>
                        </button>
                      )}
                      {order.status === 'processing' && (
                        <button className="flex-1 py-2 px-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                          <span className="text-sm">Ship</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Orders;