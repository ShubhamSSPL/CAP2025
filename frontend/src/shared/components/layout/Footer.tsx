/**
 * Footer Component - Professional Government Design
 * Clean footer with minimal colors
 */

import React from 'react';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Organization Info */}
            <div>
              <h3 className="text-white font-bold text-base mb-3">
                State Common Entrance Test Cell
              </h3>
              <p className="text-gray-400 text-sm">
                Government of Maharashtra
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <PhoneOutlined />
                Contact Us
              </h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <PhoneOutlined className="text-xs" />
                  <div>
                    <a href="tel:+919322083443" className="hover:text-white transition-colors">+91-9322083443</a>
                    <span className="mx-1">|</span>
                    <a href="tel:+919326394907" className="hover:text-white transition-colors">+91-9326394907</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MailOutlined className="text-xs" />
                  <a href="mailto:cetcell.technicaledu@gmail.com" className="hover:text-white transition-colors">
                    cetcell.technicaledu@gmail.com
                  </a>
                </div>
                <p className="text-xs">Timing: 10:00 AM - 6:00 PM (Mon-Sat)</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <EnvironmentOutlined />
                Office Address
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                8th Floor, New Excelsior Building,<br />
                A.K. Nayak Marg, Fort,<br />
                Mumbai - 400001, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2025 Maharashtra CET Cell. All Rights Reserved.</p>
            <p className="text-xs">
              Best viewed in Chrome, Firefox, or Edge | Resolution: 1366x768 or higher
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="h-1 bg-primary-600"></div>
    </footer>
  );
};
