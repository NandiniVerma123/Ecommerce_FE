// Simple store implementation without Context API
class AdminStore {
  constructor() {
    this.state = {
      currentSection: 'dashboard',
      sidebarCollapsed: false,
      // Dashboard data
      stats: {
        totalOrders: 1234,
        totalProducts: 567,
        totalUsers: 890,
        revenue: 123456
      },
      // Orders data
      orders: [
        { id: 1, customer: 'John Doe', total: 299.99, status: 'pending', date: '2025-01-15' },
        { id: 2, customer: 'Jane Smith', total: 159.99, status: 'completed', date: '2025-01-14' },
        { id: 3, customer: 'Bob Johnson', total: 449.99, status: 'processing', date: '2025-01-13' }
      ],
      // Products data
      products: [
        { id: 1, name: 'Premium Headphones', price: 299.99, stock: 45, category: 'Electronics' },
        { id: 2, name: 'Wireless Mouse', price: 59.99, stock: 120, category: 'Electronics' },
        { id: 3, name: 'Gaming Keyboard', price: 149.99, stock: 30, category: 'Electronics' }
      ],
      // Users data
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'customer', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'vendor', status: 'active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'customer', status: 'inactive' }
      ],
      // Analytics data
      analytics: {
        orderTrends: [
          { month: 'Jan', orders: 120 },
          { month: 'Feb', orders: 150 },
          { month: 'Mar', orders: 200 },
          { month: 'Apr', orders: 180 }
        ],
        topProducts: [
          { name: 'Premium Headphones', sales: 45 },
          { name: 'Gaming Keyboard', sales: 32 },
          { name: 'Wireless Mouse', sales: 28 }
        ]
      }
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  setCurrentSection(section) {
    this.setState({ currentSection: section });
  }

  toggleSidebar() {
    this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
  }

  updateOrderStatus(orderId, status) {
    const orders = this.state.orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    );
    this.setState({ orders });
  }

  addProduct(product) {
    const newProduct = {
      id: Date.now(),
      ...product
    };
    this.setState({
      products: [...this.state.products, newProduct]
    });
  }

  updateProduct(productId, updates) {
    const products = this.state.products.map(product =>
      product.id === productId ? { ...product, ...updates } : product
    );
    this.setState({ products });
  }

  deleteProduct(productId) {
    const products = this.state.products.filter(product => product.id !== productId);
    this.setState({ products });
  }
}

export const adminStore = new AdminStore();