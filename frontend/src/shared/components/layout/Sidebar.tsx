/**
 * Sidebar Component - Modern Professional Design
 * Navigation menu with glassmorphism and modern UI
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
  CalendarOutlined,
  MessageOutlined,
  CustomerServiceOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuSections = [
    {
      title: 'Main Menu',
      items: [
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
      ]
    },
    {
      title: 'Information',
      items: [
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
      ]
    },
    {
      title: 'Support',
      items: [
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
      ]
    }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 shadow-sm">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-primary-100">
        <h3 className="text-sm font-bold text-primary-700 uppercase tracking-wide">
          Navigation
        </h3>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-3 space-y-6 overflow-y-auto scrollbar-thin">
        {menuSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-1">
            {/* Section Title */}
            <div className="px-3 py-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.title}
              </h4>
            </div>

            {/* Menu Items */}
            {section.items.map((item) => {
              const active = isActive(item.key);
              return (
                <button
                  key={item.key}
                  onClick={() => handleMenuClick(item.key)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                    transition-all duration-200 text-left group
                    ${active
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                    }
                  `}
                >
                  <span className={`
                    text-lg transition-transform duration-200
                    ${active ? 'text-white' : 'text-primary-600'}
                    group-hover:scale-110
                  `}>
                    {item.icon}
                  </span>
                  <span className={`
                    text-sm font-medium
                    ${active ? 'text-white' : ''}
                  `}>
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer - Quick Help */}
      <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white border-t border-primary-700">
        <div className="text-xs font-semibold mb-1">Need Help?</div>
        <div className="text-xs opacity-90">Call: +91-9322083443</div>
      </div>
    </div>
  );
};
