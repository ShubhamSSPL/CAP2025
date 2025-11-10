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

        {/* Main Header with Logos - Matching PH2024 Structure */}
        <div className="bg-white/90 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-start justify-between gap-4">
              {/* Left Section: Logos and Center Heading (66.67% width) */}
              <div className="flex-1 min-w-0 md:w-2/3">
                <div className="flex items-start gap-2 md:gap-4">
                  {/* Left Logo (8.33% of container) */}
                  <div className="flex-shrink-0 w-12 md:w-16 hover-lift">
                    <img
                      src="/WebsiteLogo.png"
                      alt="Maharashtra Government"
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Center Title (83.33% of container) */}
                  <div className="flex-1 text-center animate-fade-in px-2 mt-2">
                    <h5 className="text-sm md:text-base font-bold text-foreground leading-tight mb-1">
                      State Common Entrance Test Cell, Government of Maharashtra
                    </h5>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                      First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D Admissions A.Y. 2025-26
                    </p>
                  </div>

                  {/* Right Logo (8.33% of container) */}
                  <div className="flex-shrink-0 w-12 md:w-16 hover-lift">
                    <img
                      src="/ARAFINAL.png"
                      alt="ARA Logo"
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Section: Helpline (33.33% width) */}
              <div className="w-full md:w-1/3 md:text-right mt-2">
                <div className="text-xs md:text-sm text-primary leading-relaxed">
                  <div className="font-semibold mb-1">Technical Helpline Number</div>
                  <div className="text-xs">(10:00 AM to 06:00 PM)</div>
                  <div className="mt-1">
                    <img src="/baseline_call_black_18dp.png" alt="phone" style={{ width: '17px', verticalAlign: 'middle', display: 'inline' }} className="mr-1" />
                    +91-9175108612, 18002660160
                  </div>
                  <div className="mt-2">
                    <b className="text-xs">If any admission regarding Query</b>
                    <br />
                    <a href="mailto:cetcell.technicaledu@gmail.com" className="text-primary hover:underline text-xs">
                      cetcell.technicaledu@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden absolute top-4 right-4 p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors z-10"
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
