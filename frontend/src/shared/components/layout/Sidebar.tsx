/**
 * Sidebar Component - Modern Glass Design with Theme Switcher
 * Navigation menu with glassmorphism and appearance settings
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
  QuestionCircleOutlined,
  CalendarOutlined,
  MessageOutlined,
  CustomerServiceOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';
import { ThemeSwitcher } from '../ThemeSwitcher';

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
      icon: <CalendarOutlined />,
      label: 'Important Dates',
    },
    {
      key: '/instructions',
      icon: <InfoCircleOutlined />,
      label: 'Instructions',
    },
    {
      key: '/faqs',
      icon: <QuestionCircleOutlined />,
      label: 'FAQs',
    },
    {
      key: '/grievance',
      icon: <FileProtectOutlined />,
      label: 'Submit Grievance',
    },
    {
      key: '/tickets',
      icon: <MessageOutlined />,
      label: 'My Tickets',
    },
    {
      key: '/helpline',
      icon: <CustomerServiceOutlined />,
      label: 'Helpline',
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
  };

  return (
    <div
      className="h-full rounded-2xl p-4 space-y-2 shadow-lg"
      style={{
        backgroundColor: 'var(--color-glass)',
        backdropFilter: 'blur(20px)',
        border: `1px solid var(--color-border)`,
      }}
    >
      {/* Sidebar Header */}
      <div className="mb-6 pb-4" style={{ borderBottom: `1px solid var(--color-border)` }}>
        <h2 className="text-sm font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>
          Navigation
        </h2>
        <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
          Quick access menu
        </p>
      </div>

      {/* Menu Items */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200"
              style={{
                background: isActive ? 'var(--gradient-primary)' : 'transparent',
                color: isActive ? 'var(--color-primary-foreground)' : 'var(--color-foreground)',
                boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--color-muted)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-foreground)';
                }
              }}
            >
              <span className="text-lg">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Appearance Settings */}
      <div className="pt-4" style={{ borderTop: `1px solid var(--color-border)` }}>
        <ThemeSwitcher />
      </div>

      {/* Sidebar Footer - Helpline */}
      <div className="pt-4" style={{ borderTop: `1px solid var(--color-border)` }}>
        <div
          className="rounded-lg p-3"
          style={{
            backgroundColor: 'var(--color-muted)',
            border: `1px solid var(--color-border)`,
          }}
        >
          <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-foreground)' }}>
            📞 Helpline
          </p>
          <div className="space-y-1">
            <a
              href="tel:+919322083443"
              className="text-xs font-medium block transition-colors hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              +91-9322083443
            </a>
            <a
              href="tel:+919326394907"
              className="text-xs font-medium block transition-colors hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              +91-9326394907
            </a>
            <p className="text-xs mt-2" style={{ color: 'var(--color-muted-foreground)' }}>
              Mon-Sat: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
