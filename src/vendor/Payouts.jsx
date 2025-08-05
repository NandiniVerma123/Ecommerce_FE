import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Download,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Payouts = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const payoutStats = {
    totalEarnings: 24580.45,
    pendingPayouts: 3247.89,
    lastPayout: 8945.32,
    payoutMethod: 'Bank Account ****1234'
  };

  const payouts = [
    {
      id: 'PO-2024-001',
      amount: 8945.32,
      status: 'completed',
      date: '2024-01-15T10:00:00',
      type: 'automatic',
      fees: 268.36,
      net: 8676.96,
      method: 'Bank Transfer'
    },
    {
      id: 'PO-2024-002',
      amount: 5634.78,
      status: 'processing',
      date: '2024-01-10T14:30:00',
      type: 'automatic',
      fees: 169.04,
      net: 5465.74,
      method: 'Bank Transfer'
    },
    {
      id: 'PO-2024-003',
      amount: 12456.89,
      status: 'completed',
      date: '2024-01-08T09:15:00',
      type: 'manual',
      fees: 373.71,
      net: 12083.18,
      method: 'PayPal'
    },
    {
      id: 'PO-2024-004',
      amount: 3247.89,
      status: 'pending',
      date: '2024-01-05T16:45:00',
      type: 'automatic',
      fees: 97.44,
      net: 3150.45,
      method: 'Bank Transfer'
    },
    {
      id: 'PO-2024-005',
      amount: 7892.45,
      status: 'failed',
      date: '2024-01-03T11:20:00',
      type: 'automatic',
      fees: 236.77,
      net: 7655.68,
      method: 'Bank Transfer'
    }
  ];

  const transactions = [
    {
      id: 'TXN-001',
      type: 'sale',
      description: 'Order #12345 - Wireless Headphones',
      amount: 129.99,
      fee: 3.90,
      net: 126.09,
      date: '2024-01-15T14:30:00'
    },
    {
      id: 'TXN-002',
      type: 'sale',
      description: 'Order #12346 - Coffee Mug Set',
      amount: 34.99,
      fee: 1.05,
      net: 33.94,
      date: '2024-01-15T12:20:00'
    },
    {
      id: 'TXN-003',
      type: 'refund',
      description: 'Refund for Order #12340',
      amount: -89.99,
      fee: -2.70,
      net: -87.29,
      date: '2024-01-14T16:45:00'
    },
    {
      id: 'TXN-004',
      type: 'sale',
      description: 'Order #12347 - T-Shirt (3x)',
      amount: 74.97,
      fee: 2.25,
      net: 72.72,
      date: '2024-01-14T10:15:00'
    }
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
        return { color: 'bg-green-100 text-green-800', icon: CheckCircle };
      case 'processing':
        return { color: 'bg-blue-100 text-blue-800', icon: Clock };
      case 'pending':
        return { color: 'bg-yellow-100 text-yellow-800', icon: Clock };
      case 'failed':
        return { color: 'bg-red-100 text-red-800', icon: AlertCircle };
      default:
        return { color: 'bg-gray-100 text-gray-800', icon: Clock };
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-800">Payouts</h1>
          <p className="text-gray-600 mt-1">Track your earnings and payout history</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
          </select>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            ${payoutStats.totalEarnings.toLocaleString()}
          </h3>
          <p className="text-gray-600 text-sm">Total Earnings</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-1 text-blue-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Pending</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            ${payoutStats.pendingPayouts.toLocaleString()}
          </h3>
          <p className="text-gray-600 text-sm">Pending Payouts</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-1 text-purple-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Last</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            ${payoutStats.lastPayout.toLocaleString()}
          </h3>
          <p className="text-gray-600 text-sm">Last Payout</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-orange-600 text-sm font-medium">Method</div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Bank Transfer</h3>
          <p className="text-gray-600 text-sm">{payoutStats.payoutMethod}</p>
        </div>
      </div>

      {/* Earnings Chart Placeholder */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Earnings Overview</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg font-medium">Revenue</button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100">Payouts</button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <p className="text-gray-600">Earnings chart will be displayed here</p>
            <p className="text-sm text-gray-500 mt-1">Integration with chart library needed</p>
          </div>
        </div>
      </div>

      {/* Payout History and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payout History */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Payout History</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {payouts.slice(0, 5).map((payout) => {
              const statusConfig = getStatusConfig(payout.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div key={payout.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${statusConfig.color.replace('text-', 'bg-').replace('800', '100')}`}>
                        <StatusIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{payout.id}</p>
                        <p className="text-sm text-gray-600">{payout.method}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                      {payout.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-800">${payout.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Fee: ${payout.fees.toFixed(2)} • Net: ${payout.net.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-gray-600">{formatDate(payout.date)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${transaction.type === 'sale' ? 'bg-green-100' : 'bg-red-100'}`}>
                      {transaction.type === 'sale' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownLeft className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{transaction.description}</p>
                      <p className="text-xs text-gray-600">{formatDate(transaction.date)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-600">
                      Fee: ${Math.abs(transaction.fee).toFixed(2)} • Net: ${Math.abs(transaction.net).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;