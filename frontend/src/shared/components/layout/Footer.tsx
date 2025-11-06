/**
 * Footer Component - PH2025 Design
 * Exact footer from original project
 */

import React from 'react';
import { Typography } from 'antd';
import './Footer.css';

const { Text } = Typography;

export const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <Text className="footer-title">
          STATE COMMON ENTRANCE TEST CELL, MAHARASHTRA STATE
        </Text>
        <br />
        <Text className="footer-address">
          8th Floor, New Excelsior Building, A.K.Nayak Marg, Fort, Mumbai-400001. (M.S.)
        </Text>
      </div>
    </footer>
  );
};
