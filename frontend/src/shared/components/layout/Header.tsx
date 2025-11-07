/**
 * Header Component - Professional Government Design
 * Clean header with official logos and minimal colors
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined, CloseOutlined, HomeOutlined, UserAddOutlined, LoginOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './Header.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/', icon: <HomeOutlined /> },
    { label: 'Register', path: '/registration', icon: <UserAddOutlined /> },
    { label: 'Login', path: '/login', icon: <LoginOutlined /> },
    { label: 'Important Dates', path: '/important-dates', icon: <InfoCircleOutlined /> },
    { label: 'Contact', path: '/contact', icon: <PhoneOutlined /> },
  ];

  return (
    <>
      <header className="relative bg-white shadow-sm">
        {/* Top Blue Stripe - Government Standard */}
        <div className="h-1 bg-primary-600"></div>

        {/* Top Info Bar - Professional - Compact */}
        <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <PhoneOutlined className="text-primary-600 text-xs" />
                  <span className="font-medium">Helpline:</span>
                  <span>+91-9322083443, +91-9326394907</span>
                </div>
                <div>
                  <span className="font-medium">Timing:</span> 10:00 AM - 6:00 PM
                </div>
              </div>
              <div className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-semibold border border-green-200">
                Admissions Open 2025
              </div>
            </div>
          </div>
        </div>

        {/* Main Header with Logos - Compact */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between gap-4">
              {/* Left Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/WebsiteLogo.png"
                  alt="Maharashtra Government"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Center Title */}
              <div className="flex-1 text-center">
                <h1 className="text-xs md:text-sm font-bold text-gray-900 leading-tight mb-0.5">
                  GOVERNMENT OF MAHARASHTRA
                </h1>
                <h2 className="text-sm md:text-base font-bold text-gray-900 leading-tight mb-1">
                  State Common Entrance Test Cell
                </h2>
                <p className="text-xs text-gray-700 leading-tight">
                  First Year UG Technical Course in B.Pharmacy & PG Pharm.D Admissions A.Y. 2025-26
                </p>
              </div>

              {/* Right Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/ARAFINAL.png"
                  alt="ARA Logo"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Professional - Compact */}
        <div className="bg-primary-700 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="hidden md:flex items-center justify-center gap-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="text-primary-600">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              {/* Mobile Helpline */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 font-medium mb-2">HELPLINE</div>
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+919322083443" className="text-primary-600 font-medium">+91-9322083443</a>
                  <a href="tel:+919326394907" className="text-primary-600 font-medium">+91-9326394907</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
