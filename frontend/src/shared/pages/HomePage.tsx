/**
 * Home Page - PH2025 Design
 * Landing page with registration options
 */

import React from 'react';
import { Card, Button, Alert, Row, Col, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import './HomePage.css';

const { Title, Text } = Typography;

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Card className="home-card">
        {/* Important Notice */}
        <Alert
          message="IMPORTANT"
          description={
            <marquee direction="alternate" scrollamount={2} scrolldelay={20}>
              Admissions Open for First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D 2025
            </marquee>
          }
          type="error"
          showIcon
          className="important-notice"
        />

        {/* Main Action Buttons */}
        <div className="action-buttons-section">
          <Title level={3}>Maharashtra Pharmacy Admissions 2025</Title>

          <Space size="large" className="action-buttons">
            <Button
              type="primary"
              size="large"
              icon={<UserAddOutlined />}
              onClick={() => navigate('/registration')}
              className="primary-action-btn"
            >
              New Registration
            </Button>

            <Button
              size="large"
              icon={<LoginOutlined />}
              onClick={() => navigate('/login')}
              className="secondary-action-btn"
            >
              Already Registered
            </Button>
          </Space>

          <Text type="secondary" className="action-help-text">
            New candidates should click "New Registration" to start the application process.<br/>
            If you have already registered, click "Already Registered" to login and continue.
          </Text>
        </div>

        {/* Information Sections */}
        <Row gutter={[16, 16]} className="info-cards-section">
          <Col xs={24} md={8}>
            <Card className="info-card" title="Latest Updates" size="small">
              <ul className="info-list">
                <li>Registration window opened</li>
                <li>Document verification schedule announced</li>
                <li>Merit list dates published</li>
              </ul>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card className="info-card" title="Important Links" size="small">
              <ul className="info-list">
                <li><a href="#" target="_blank">Important Dates</a></li>
                <li><a href="#" target="_blank">Application Instructions</a></li>
                <li><a href="#" target="_blank">Previous Year Cutoffs</a></li>
              </ul>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card className="info-card" title="Help & Support" size="small">
              <ul className="info-list">
                <li>Helpline: +91-9322083443</li>
                <li>Helpline: +91-9326394907</li>
                <li>Timings: 10:00 AM to 06:00 PM</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Process Flow */}
        <div className="process-section">
          <Title level={4}>Application Process</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card className="process-card" size="small">
                <div className="process-number">1</div>
                <Text strong>Registration</Text>
                <Text type="secondary" className="process-desc">
                  Create your account with basic details
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card className="process-card" size="small">
                <div className="process-number">2</div>
                <Text strong>Fill Application</Text>
                <Text type="secondary" className="process-desc">
                  Complete 10-step application form
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card className="process-card" size="small">
                <div className="process-number">3</div>
                <Text strong>Upload Documents</Text>
                <Text type="secondary" className="process-desc">
                  Upload required certificates
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card className="process-card" size="small">
                <div className="process-number">4</div>
                <Text strong>Pay Fee & Submit</Text>
                <Text type="secondary" className="process-desc">
                  Pay application fee and submit
                </Text>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};
