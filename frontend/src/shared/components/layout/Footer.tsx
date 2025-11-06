/**
 * Footer Component
 * Main footer for the application
 */

import React from 'react';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-blue-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <EnvironmentOutlined />
              Address
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>STATE COMMON ENTRANCE TEST CELL</strong><br />
              MAHARASHTRA STATE<br />
              8th Floor, New Excelsior Building,<br />
              A.K. Nayak Marg, Fort,<br />
              Mumbai - 400001 (M.S.)
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <PhoneOutlined />
              Contact Information
            </h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <PhoneOutlined className="mt-1" />
                <div>
                  <strong>Helpline:</strong><br />
                  +91-9175108612<br />
                  18002660160
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MailOutlined className="mt-1" />
                <div>
                  <strong>Email:</strong><br />
                  cetcell.technicaledu@gmail.com
                </div>
              </li>
              <li className="text-yellow-300">
                <strong>Timing:</strong> 10:00 AM to 06:00 PM
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <GlobalOutlined />
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-300 transition-colors text-white no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:text-yellow-300 transition-colors text-white no-underline">
                  New Registration
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-yellow-300 transition-colors text-white no-underline">
                  Login
                </a>
              </li>
              <li>
                <a href="/instructions" className="hover:text-yellow-300 transition-colors text-white no-underline">
                  Instructions
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-yellow-300 transition-colors text-white no-underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-600 mt-6 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} State Common Entrance Test Cell, Maharashtra. All Rights Reserved.
          </p>
          <p className="mt-1 text-xs text-gray-300">
            Developed & Maintained by CET Cell Technical Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
