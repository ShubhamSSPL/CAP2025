/**
 * Footer Component - Modern Glass Design
 * Professional footer with glassmorphism
 */

import React from 'react';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Organization Info */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-foreground font-bold text-base mb-3">
                State Common Entrance Test Cell
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Government of Maharashtra
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full text-xs font-semibold border border-success/20">
                🎓 Admissions 2025
              </div>
            </div>

            {/* Contact Details */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-foreground font-semibold text-sm mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PhoneOutlined className="text-primary" />
                </div>
                Contact Us
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <PhoneOutlined className="text-xs text-primary mt-1" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919322083443" className="hover:text-primary transition-colors font-medium">
                      +91-9322083443
                    </a>
                    <a href="tel:+919326394907" className="hover:text-primary transition-colors font-medium">
                      +91-9326394907
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MailOutlined className="text-xs text-primary" />
                  <a href="mailto:cetcell.technicaledu@gmail.com" className="hover:text-primary transition-colors font-medium">
                    cetcell.technicaledu@gmail.com
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">⏰ 10:00 AM - 6:00 PM (Mon-Sat)</p>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-foreground font-semibold text-sm mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <EnvironmentOutlined className="text-primary" />
                </div>
                Office Address
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                8th Floor, New Excelsior Building,<br />
                A.K. Nayak Marg, Fort,<br />
                Mumbai - 400001, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Maharashtra CET Cell. All Rights Reserved.</p>
            <p className="text-xs">
              Best viewed in Chrome, Firefox, or Edge | Resolution: 1366x768 or higher
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 gradient-primary"></div>
    </footer>
  );
};
