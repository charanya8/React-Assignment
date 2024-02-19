import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import OrdersTab from './OrdersTab';
import OrderTable from './OrderTable';

const OrderDashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [orders, setOrders] = useState([
    { id: 1, orderNo:TKN20203754, orderDate: '2024-02-19', city:'Pune', customerName: 'Kim Jung Yuu', operation:'Active' },
    { id: 2, orderNo:TKN20203753, orderDate: '2024-02-19', city:'Pune', customerName: 'Kim Jung Yuu', operation:'Active' },
    { id: 3, orderNo:TKN20203752, orderDate: '2024-02-19', city:'Pune', customerName: 'Kim Jung Yuu', operation:'Active' },
    
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
  }

  return (
    <div>
      <NavigationBar />
      <h1>Order Dashboard</h1>
      <OrdersTab activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === 'pending' ? (
        <OrderTable orders={orders} />
      ) : (
        <OrderTable orders={[]} />
      )}
    </div>
  );
}

export default OrderDashboard;