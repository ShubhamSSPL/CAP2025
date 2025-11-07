/**
 * Header Component - Unique Creative Design
 * Non-standard creative header with floating elements
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
      {/* Unique Floating Header */}
      <header className="relative">
        {/* Decorative Top Wave */}
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500"></div>

        {/* Main Header Container */}
        <div className="bg-white/95 backdrop-blur-xl border-b border-dark-100 shadow-soft">
          {/* Top Info Bar - Unique Angled Design */}
          <div className="hidden lg:block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-secondary-50 to-primary-50"></div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary-100 to-transparent transform skew-x-12"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-dark-700">
                    <PhoneOutlined className="text-primary-600" />
                    <span className="font-medium">Helpline:</span>
                    <span>+91-9322083443</span>
                    <span className="text-dark-400">|</span>
                    <span>+91-9326394907</span>
                  </div>
                  <div className="text-dark-600">
                    <span className="font-medium">Timing:</span> 10:00 AM - 6:00 PM
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-xs font-semibold animate-pulse">
                    🟢 Admissions Open 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav - Creative Floating Card Style */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo Section - Unique Badge Style */}
              <div className="flex items-center gap-4">
                <div className="relative group cursor-pointer" onClick={() => navigate('/')}>
                  {/* Animated Background Blob */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300 animate-pulse"></div>

                  {/* Logo Card */}
                  <div className="relative flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-large">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 shadow-medium">
                      <span className="text-2xl font-black text-white">MH</span>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-dark-900 leading-tight">Maharashtra</div>
                      <div className="text-xs text-dark-600 leading-tight">Pharmacy 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation - Unique Floating Pills */}
              <nav className="hidden md:flex items-center gap-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="group relative px-4 py-2 text-sm font-medium text-dark-700 hover:text-primary-600 transition-all duration-200"
                  >
                    {/* Animated Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-200"></div>
                  </button>
                ))}
              </nav>

              {/* CTA Button - Unique Glowing Style */}
              <div className="hidden lg:block">
                <button
                  onClick={() => navigate('/registration')}
                  className="relative group"
                >
                  {/* Glowing Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>

                  {/* Button */}
                  <div className="relative px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-white font-semibold text-sm shadow-medium hover:shadow-large transition-all duration-200">
                    <span className="flex items-center gap-2">
                      <UserAddOutlined />
                      Register Now
                    </span>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Toggle - Unique Animated Button */}
              <button
                className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-medium hover:shadow-large transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Creative Slide-in Panel */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-dark-100 bg-gradient-to-br from-gray-50 to-white">
              <div className="px-4 py-6 space-y-3">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-dark-700 hover:text-primary-600 bg-white hover:bg-primary-50 rounded-xl border border-dark-100 hover:border-primary-200 transition-all duration-200 shadow-soft hover:shadow-medium"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}

                {/* Mobile Helpline */}
                <div className="mt-6 pt-6 border-t border-dark-200">
                  <div className="text-xs text-dark-500 font-medium mb-2">HELPLINE</div>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href="tel:+919322083443" className="text-primary-600 font-medium">+91-9322083443</a>
                    <a href="tel:+919326394907" className="text-primary-600 font-medium">+91-9326394907</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Animated Title Banner - Unique Diagonal Design */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 py-4">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              Maharashtra Pharmacy Admissions 2025
            </h1>
            <p className="text-white/90 text-xs md:text-sm mt-1">
              B.Pharmacy & Pharm.D - State Common Entrance Test Cell
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
