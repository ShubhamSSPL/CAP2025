/**
 * Header Component
 * Main navigation header for the application
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneOutlined, MailOutlined, HomeOutlined, InfoCircleOutlined, FileTextOutlined, QuestionCircleOutlined, ContactsOutlined, LoginOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="font-semibold mb-1 sm:mb-0">
              STATE COMMON ENTRANCE TEST CELL, GOVERNMENT OF MAHARASHTRA
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <PhoneOutlined />
                <span className="hidden sm:inline">+91-9175108612, 18002660160</span>
                <span className="sm:hidden">+91-9175108612</span>
              </span>
              <span className="hidden md:flex items-center gap-1">
                <MailOutlined />
                cetcell.technicaledu@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              First Year UG Technical Course in B.Pharmacy & PG Pharm.D
            </h1>
            <p className="text-xs sm:text-sm text-secondary font-medium mt-1">
              Admissions A.Y. 2025 | Technical Helpline: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 py-2 text-xs sm:text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 text-white no-underline"
            >
              <HomeOutlined />
              <span>Home</span>
            </Link>
            <Link
              to="/instructions"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 text-white no-underline"
            >
              <InfoCircleOutlined />
              <span>Instructions</span>
            </Link>
            <Link
              to="/important-dates"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 text-white no-underline"
            >
              <FileTextOutlined />
              <span className="hidden sm:inline">Important Dates</span>
              <span className="sm:hidden">Dates</span>
            </Link>
            <Link
              to="/faqs"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 text-white no-underline"
            >
              <QuestionCircleOutlined />
              <span>FAQs</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 text-white no-underline"
            >
              <ContactsOutlined />
              <span>Contact</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors px-2 py-1 bg-accent rounded px-3 text-white no-underline"
            >
              <LoginOutlined />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
