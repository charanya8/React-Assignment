import React from 'react';

import './OrdersTab.css'

const OrdersTab = ({ activeTab, onTabChange }) => {
  return (
    <div className="orders-tab">
      <button className={activeTab === 'All' ? 'active' : ''} onClick={() => onTabChange('All')}>All Orders</button>
      <button className={activeTab === 'Pending' ? 'active' : ''} onClick={() => onTabChange('Pending')}>Pending Orders</button>
      <button className={activeTab === 'Completed' ? 'active' : ''} onClick={() => onTabChange('Completed')}>Completed Orders</button>
    </div>
  );
}

export default OrdersTab;
