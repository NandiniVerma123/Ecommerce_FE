import { useState, useEffect } from 'react';
import { adminStore } from '../store/adminStore';

export const useAdminStore = () => {
  const [state, setState] = useState(adminStore.getState());

  useEffect(() => {
    const unsubscribe = adminStore.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    setCurrentSection: adminStore.setCurrentSection.bind(adminStore),
    toggleSidebar: adminStore.toggleSidebar.bind(adminStore),
    updateOrderStatus: adminStore.updateOrderStatus.bind(adminStore),
    addProduct: adminStore.addProduct.bind(adminStore),
    updateProduct: adminStore.updateProduct.bind(adminStore),
    deleteProduct: adminStore.deleteProduct.bind(adminStore)
  };
};