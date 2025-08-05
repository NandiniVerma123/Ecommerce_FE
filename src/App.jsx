import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AddProduct from './vendor/AddProduct';
import Dashboard from './vendor/Dashboard';
import Orders from './vendor/Orders';
import Payouts from './vendor/Payouts';
import Settings from './vendor/Settings';
import Product from './vendor/Products';
import VendorLayout from './vendor/VendorLayout';
import Analytics from "./admin/analytics/Analytics";
import DashboardView from "./admin/Dashboard/DashboardView";
import OrdersView from './admin/Order/OrdersView';
import ProductsView from './admin/Products/ProductsView';
import SettingsView from './admin/Settings/SettingsView';
import UsersView from './admin/Users/UsersView';
import AdminLayout from './admin/AdminLayout';
import LoginForm from './admin/login/LoginForm';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<HomePage />} />
             <Route path="login" element={<LoginForm />} />

          {/* Vendor routes */}
          <Route path="/vendor" element={<VendorLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<Product />} />
            <Route path="orders" element={<Orders />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          { /* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
          
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="orders" element={<OrdersView />} />
            <Route path="products" element={<ProductsView />} />
            <Route path="settings" element={<SettingsView />} />
            <Route path="users" element={<UsersView />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
