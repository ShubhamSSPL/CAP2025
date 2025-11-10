/**
 * Sidebar Component - Modern Professional Design
 * Elegant navigation with glassmorphism and organized sections
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
  DashboardOutlined,
  FileTextOutlined,
  PrinterOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuSections: MenuSection[] = [
    {
      title: 'Main',
      items: [
        {
          key: '/',
          icon: <HomeOutlined />,
          label: 'Home',
          description: 'Dashboard home',
        },
        {
          key: '/exam-validation',
          icon: <UserAddOutlined />,
          label: 'New Registration',
          description: 'Register for admission',
        },
        {
          key: '/login',
          icon: <LoginOutlined />,
          label: 'Login',
          description: 'Already registered',
        },
      ],
    },
    {
      title: 'Candidate',
      items: [
        {
          key: '/candidate/dashboard',
          icon: <DashboardOutlined />,
          label: 'Dashboard',
          description: 'Your profile',
        },
        {
          key: '/candidate/application',
          icon: <FileTextOutlined />,
          label: 'Application Form',
          description: 'Complete form',
        },
        {
          key: '/candidate/print-application',
          icon: <PrinterOutlined />,
          label: 'Print Application',
          description: 'Download form',
        },
      ],
    },
    {
      title: 'Information',
      items: [
        {
          key: '/important-dates',
          icon: <CalendarOutlined />,
          label: 'Important Dates',
          badge: 'New',
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
      ],
    },
    {
      title: 'Support',
      items: [
        {
          key: '/helpline',
          icon: <CustomerServiceOutlined />,
          label: 'Helpline',
        },
        {
          key: '/grievance',
          icon: <SafetyOutlined />,
          label: 'Grievance',
        },
        {
          key: '/tickets',
          icon: <MessageOutlined />,
          label: 'My Tickets',
        },
      ],
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        background: 'var(--gradient-card)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius)',
        border: '1px solid hsl(var(--border))',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Sidebar Header */}
      <div
        className="px-4 py-4"
        style={{
          borderBottom: '1px solid hsl(var(--border))',
          background: 'var(--gradient-primary)',
        }}
      >
        <div>
          <h2 className="text-sm font-bold text-white mb-0.5">
            CAP 2025
          </h2>
          <p className="text-xs text-white/80">
            Pharmacy Admissions
          </p>
        </div>
      </div>

      {/* Scrollable Menu Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>
            {/* Section Title */}
            <div className="px-3 mb-2">
              <h3
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {section.title}
              </h3>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleMenuClick(item.key)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group relative overflow-hidden"
                    style={{
                      background: isActive
                        ? 'var(--gradient-primary)'
                        : 'transparent',
                      color: isActive
                        ? 'white'
                        : 'hsl(var(--foreground))',
                      boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                      transform: isActive ? 'translateX(2px)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor =
                          'hsl(var(--muted))';
                        e.currentTarget.style.transform = 'translateX(2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }
                    }}
                  >
                    {/* Icon */}
                    <span
                      className={`text-lg flex-shrink-0 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{
                        transition: 'transform 0.2s',
                      }}
                    >
                      {item.icon}
                    </span>

                    {/* Label & Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium truncate">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{
                              backgroundColor: isActive
                                ? 'rgba(255,255,255,0.2)'
                                : 'hsl(var(--primary))',
                              color: isActive
                                ? 'white'
                                : 'hsl(var(--primary-foreground))',
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p
                          className="text-xs mt-0.5 truncate"
                          style={{
                            color: isActive
                              ? 'rgba(255,255,255,0.8)'
                              : 'hsl(var(--muted-foreground))',
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                        style={{
                          background: 'white',
                          boxShadow: '0 0 8px rgba(255,255,255,0.5)',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Theme Switcher */}
      <div
        className="px-4 py-3"
        style={{ borderTop: '1px solid hsl(var(--border))' }}
      >
        <ThemeSwitcher />
      </div>

      {/* Helpline Footer */}
      <div
        className="px-4 py-3"
        style={{
          borderTop: '1px solid hsl(var(--border))',
          background: 'hsl(var(--muted) / 0.5)',
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <PhoneOutlined
              style={{ color: 'hsl(var(--primary))', fontSize: '16px' }}
            />
            <span
              className="text-xs font-semibold"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              24/7 Helpline
            </span>
          </div>
          <div className="space-y-1">
            <a
              href="tel:+919322083443"
              className="text-xs font-medium block transition-colors"
              style={{ color: 'hsl(var(--primary))' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = 'underline')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = 'none')
              }
            >
              +91-9322083443
            </a>
            <a
              href="tel:+919326394907"
              className="text-xs font-medium block transition-colors"
              style={{ color: 'hsl(var(--primary))' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration = 'underline')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = 'none')
              }
            >
              +91-9326394907
            </a>
            <p
              className="text-xs mt-2"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Mon-Sat: 10 AM - 6 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
