/**
 * Header Component - PH2025 Design
 * Exact header from original project
 */

import React from 'react';
import { Row, Col, Typography } from 'antd';
import './Header.css';

const { Title, Text } = Typography;

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Row className="header-content" align="middle" gutter={[16, 16]}>
          <Col xs={4} sm={3} md={2} className="logo-col">
            <img
              src="/WebsiteLogo.png"
              alt="Maharashtra Logo"
              className="header-logo"
            />
          </Col>

          <Col xs={16} sm={18} md={20} className="title-col">
            <Title level={4} className="header-title">
              State Common Entrance Test Cell, Government of Maharashtra
            </Title>
            <Text className="header-subtitle">
              First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D Admissions 2025
            </Text>
          </Col>

          <Col xs={4} sm={3} md={2} className="logo-col">
            <img
              src="/ARAFINAL.png"
              alt="ARA Logo"
              className="header-logo"
            />
          </Col>
        </Row>

        <div className="helpline-section">
          <Text className="helpline-text">
            <strong>Helpline Number (10:00 AM to 06:00 PM)</strong><br />
            <span className="helpline-numbers">+91-9322083443, +91-9326394907</span>
          </Text>
        </div>
      </div>
    </header>
  );
};
