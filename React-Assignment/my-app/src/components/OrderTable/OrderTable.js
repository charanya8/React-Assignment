import React from 'react';

import './OrderTable.css'

const OrderTable = ({ orders }) => {
  return (
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;