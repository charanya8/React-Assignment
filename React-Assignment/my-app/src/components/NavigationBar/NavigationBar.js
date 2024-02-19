import React from 'react';

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>Pending</li>
        <li>Accepted</li>
        <li>AWB Created</li>
        <li>Ready To Ship</li>
        <li>Shipped</li>
        <li>Completed</li>
        <li>Cancelled</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;