/**
 * Sidebar Component - Modern Glass Design
 * Navigation menu with glassmorphism
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '/registration',
      icon: <UserAddOutlined />,
      label: 'New Registration',
    },
    {
      key: '/login',
      icon: <LoginOutlined />,
      label: 'Already Registered',
    },
    {
      key: '/important-dates',
      icon: <FileTextOutlined />,
      label: 'Important Dates',
    },
    {
      key: '/instructions',
      icon: <InfoCircleOutlined />,
      label: 'Instructions',
    },
    {
      key: '/helpline',
      icon: <PhoneOutlined />,
      label: 'Helpline',
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
  };

  return (
    <div className="h-full glass-card p-4 space-y-2">
      {/* Sidebar Header */}
      <div className="mb-6 pb-4 border-b border-border">
        <h2 className="text-sm font-bold text-foreground mb-1">Navigation</h2>
        <p className="text-xs text-muted-foreground">Quick access menu</p>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                ${isActive
                  ? 'gradient-primary text-white shadow-md hover-glow'
                  : 'text-foreground hover:bg-muted hover:text-primary hover-lift'
                }
              `}
            >
              <span className={`text-lg ${isActive ? 'text-white' : 'text-primary'}`}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="mt-8 pt-4 border-t border-border">
        <div className="glass rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-2">
            <span className="font-semibold">📞 Helpline</span>
          </p>
          <div className="space-y-1">
            <a
              href="tel:+919322083443"
              className="text-xs text-primary hover:text-primary-glow font-medium block transition-colors"
            >
              +91-9322083443
            </a>
            <a
              href="tel:+919326394907"
              className="text-xs text-primary hover:text-primary-glow font-medium block transition-colors"
            >
              +91-9326394907
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};
