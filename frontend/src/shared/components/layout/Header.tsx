/**
 * Header Component - Modern Glass Design
 * Professional header with glassmorphism effects
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
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-sm">
        {/* Top Info Bar - Glass Effect */}
        <div className="hidden lg:block glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <PhoneOutlined className="text-primary text-xs" />
                  <span className="font-medium">Helpline:</span>
                  <span>+91-9322083443, +91-9326394907</span>
                </div>
                <div>
                  <span className="font-medium">Timing:</span> 10:00 AM - 6:00 PM
                </div>
              </div>
              <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-semibold border border-success/20">
                🎓 Admissions Open 2025
              </div>
            </div>
          </div>
        </div>

        {/* Main Header with Logos */}
        <div className="bg-white/90 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left Logo */}
              <div className="flex-shrink-0 hover-lift">
                <img
                  src="/WebsiteLogo.png"
                  alt="Maharashtra Government"
                  className="h-14 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Center Title */}
              <div className="flex-1 text-center animate-fade-in">
                <h1 className="text-xs md:text-sm font-bold text-foreground leading-tight mb-0.5 tracking-wide">
                  GOVERNMENT OF MAHARASHTRA
                </h1>
                <h2 className="text-sm md:text-base font-bold text-primary leading-tight mb-1">
                  State Common Entrance Test Cell
                </h2>
                <p className="text-xs text-muted-foreground leading-tight">
                  First Year UG Technical Course in B.Pharmacy & PG Pharm.D Admissions A.Y. 2025-26
                </p>
              </div>

              {/* Right Logo */}
              <div className="flex-shrink-0 hover-lift">
                <img
                  src="/ARAFINAL.png"
                  alt="ARA Logo"
                  className="h-14 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Modern Glass */}
        <div className="glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="hidden md:flex items-center justify-center gap-2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 flex items-center gap-2 hover-lift"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/20 animate-slide-up">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all hover-lift"
                >
                  <div className="text-primary">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}

              {/* Mobile Helpline */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground font-medium mb-2">HELPLINE</div>
                <div className="flex flex-col gap-1.5 text-sm">
                  <a href="tel:+919322083443" className="text-primary hover:text-primary-glow font-medium transition-colors">
                    📞 +91-9322083443
                  </a>
                  <a href="tel:+919326394907" className="text-primary hover:text-primary-glow font-medium transition-colors">
                    📞 +91-9326394907
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
