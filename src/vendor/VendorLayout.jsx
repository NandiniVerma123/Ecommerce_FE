import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function VendorLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        style={{
          flex: 1,
          padding: '20px',
          marginLeft: isSidebarOpen ? '250px' : '80px',
          transition: 'margin-left 0.3s ease'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
