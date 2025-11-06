/**
 * Header Component
 * Modern, clean navigation header with Lovable-inspired design
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneOutlined, MailOutlined, HomeOutlined, InfoCircleOutlined, FileTextOutlined, QuestionCircleOutlined, ContactsOutlined, LoginOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-dark-100 shadow-soft">
      {/* Top Info Bar - Desktop Only */}
      <div className="hidden lg:block bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="font-medium">
              Maharashtra State Common Entrance Test Cell
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+919175108612" className="flex items-center gap-1.5 hover:text-primary-100 transition-colors text-white no-underline">
                <PhoneOutlined className="text-xs" />
                <span>+91-9175108612</span>
              </a>
              <a href="mailto:cetcell.technicaledu@gmail.com" className="flex items-center gap-1.5 hover:text-primary-100 transition-colors text-white no-underline">
                <MailOutlined className="text-xs" />
                <span className="hidden xl:inline">cetcell.technicaledu@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 group no-underline">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-dark-900 leading-tight">CAP 2025</h1>
              <p className="text-xs text-dark-500">B.Pharmacy & Pharm.D Admissions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" icon={<HomeOutlined />}>Home</NavLink>
            <NavLink to="/instructions" icon={<InfoCircleOutlined />}>Instructions</NavLink>
            <NavLink to="/important-dates" icon={<FileTextOutlined />}>Important Dates</NavLink>
            <NavLink to="/faqs" icon={<QuestionCircleOutlined />}>FAQs</NavLink>
            <NavLink to="/contact" icon={<ContactsOutlined />}>Contact</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-5 py-2.5 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
            >
              <LoginOutlined className="mr-2" />
              Login
            </button>
            <button
              onClick={() => navigate('/registration')}
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-dark-600 hover:text-dark-900 hover:bg-dark-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-dark-100 bg-white shadow-large">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <MobileNavLink to="/" icon={<HomeOutlined />} onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/instructions" icon={<InfoCircleOutlined />} onClick={() => setMobileMenuOpen(false)}>
              Instructions
            </MobileNavLink>
            <MobileNavLink to="/important-dates" icon={<FileTextOutlined />} onClick={() => setMobileMenuOpen(false)}>
              Important Dates
            </MobileNavLink>
            <MobileNavLink to="/faqs" icon={<QuestionCircleOutlined />} onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </MobileNavLink>
            <MobileNavLink to="/contact" icon={<ContactsOutlined />} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </MobileNavLink>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                className="w-full px-4 py-3 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
              >
                <LoginOutlined className="mr-2" />
                Login
              </button>
              <button
                onClick={() => { navigate('/registration'); setMobileMenuOpen(false); }}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg shadow-soft"
              >
                Register Now
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-dark-100 space-y-2 text-sm text-dark-600">
              <div className="flex items-center gap-2">
                <PhoneOutlined />
                <span>+91-9175108612, 18002660160</span>
              </div>
              <div className="flex items-center gap-2">
                <MailOutlined />
                <span className="text-xs">cetcell.technicaledu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Navigation Link Component
const NavLink: React.FC<{ to: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ to, icon, children }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 no-underline"
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink: React.FC<{ to: string; icon?: React.ReactNode; children: React.ReactNode; onClick: () => void }> = ({ to, icon, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 no-underline"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
};

export default Header;
