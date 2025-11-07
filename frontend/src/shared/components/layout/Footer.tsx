/**
 * Footer Component - Unique Creative Design
 * Non-standard creative footer with wave patterns and unique layout
 */

import React from 'react';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined, HeartFilled } from '@ant-design/icons';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20">
      {/* Unique Wave Pattern */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z" fill="url(#waveGradient1)" opacity="0.5"></path>
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient1)" opacity="0.3"></path>
          <path d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 L0,120 Z" fill="#0f172a"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-dark-900 pt-16 pb-8">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Creative Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Organization Info - Unique Tilted Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-dark-800 to-dark-850 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-black text-white">MH</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                      State Common Entrance Test Cell
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      Government of Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Unique Badge Style */}
            <div className="group">
              <div className="bg-gradient-to-br from-dark-800 to-dark-850 rounded-2xl p-6 border border-dark-700 hover:border-secondary-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <PhoneOutlined className="text-primary-400" />
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <PhoneOutlined className="text-primary-400 text-xs" />
                    </div>
                    <div>
                      <a href="tel:+919322083443" className="hover:underline">+91-9322083443</a>
                      <span className="mx-2 text-dark-600">|</span>
                      <a href="tel:+919326394907" className="hover:underline">+91-9326394907</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-dark-300 hover:text-secondary-400 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <MailOutlined className="text-secondary-400 text-xs" />
                    </div>
                    <a href="mailto:cetcell.technicaledu@gmail.com" className="hover:underline">
                      cetcell.technicaledu@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-dark-300">
                    <div className="w-8 h-8 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <ClockCircleOutlined className="text-success-400 text-xs" />
                    </div>
                    <span>10:00 AM - 6:00 PM (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Address - Unique Location Card */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-dark-800 to-dark-850 rounded-2xl p-6 border border-dark-700 hover:border-accent-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl h-full">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <EnvironmentOutlined className="text-accent-400" />
                  Office Address
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <EnvironmentOutlined className="text-accent-400 text-lg" />
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    8th Floor, New Excelsior Building,<br />
                    A.K. Nayak Marg, Fort,<br />
                    Mumbai - 400001, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider with Decorative Elements */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2 bg-dark-900 px-6">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Creative Flex Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-dark-400 text-sm text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <span>© 2025 Maharashtra CET Cell</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">All Rights Reserved</span>
              </p>
            </div>

            {/* Made with Love Badge */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-dark-500">Crafted with</span>
              <HeartFilled className="text-accent-500 animate-pulse" />
              <span className="text-dark-500">for Students</span>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-success-500/10 to-success-600/10 border border-success-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse"></div>
                  <span className="text-success-400 font-medium">System Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Info */}
          <div className="mt-8 pt-6 border-t border-dark-800">
            <div className="text-center">
              <p className="text-dark-500 text-xs leading-relaxed">
                For best experience, use latest version of Chrome, Firefox, or Edge browser.
                <span className="mx-2">•</span>
                Screen resolution 1366x768 or higher recommended.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500"></div>
    </footer>
  );
};
