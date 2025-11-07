/**
 * Home Page - Unique Creative Design
 * Landing page with unique visual elements
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined, CheckCircleOutlined, FileTextOutlined, SafetyCertificateOutlined, CreditCardOutlined, RocketOutlined, StarFilled } from '@ant-design/icons';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <FileTextOutlined />, title: 'Easy Application', desc: 'Simple online registration process', color: 'primary' },
    { icon: <SafetyCertificateOutlined />, title: 'Secure Platform', desc: 'Your data is safe with us', color: 'secondary' },
    { icon: <CheckCircleOutlined />, title: 'Quick Verification', desc: 'Fast OTP & document verification', color: 'success' },
    { icon: <CreditCardOutlined />, title: 'Online Payment', desc: 'Multiple payment options', color: 'accent' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section - Unique Diagonal Split Design */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center mb-12">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-success-100 to-primary-100 border-2 border-success-300 mb-8 animate-float">
              <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-success-800">Admissions Open for 2025</span>
              <StarFilled className="text-success-600 text-xs" />
            </div>

            {/* Hero Title - Unique Typography */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-dark-900">Your Journey to</span>
              <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Pharmacy Excellence
              </span>
              <span className="block text-dark-900">Starts Here</span>
            </h1>

            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Maharashtra's premier admission portal for B.Pharmacy & Pharm.D programs.
              Secure your future in pharmaceutical sciences with our streamlined application process.
            </p>

            {/* CTA Buttons - Unique 3D Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                onClick={() => navigate('/registration')}
                className="group relative px-8 py-4 rounded-xl"
              >
                {/* 3D Effect Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl transform transition group-hover:translate-y-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-xl transform translate-y-2 transition group-hover:translate-y-3"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3 text-white font-bold text-lg">
                  <RocketOutlined className="text-xl" />
                  <span>Start New Application</span>
                </div>
              </button>

              <button
                onClick={() => navigate('/login')}
                className="group px-8 py-4 rounded-xl border-2 border-dark-300 bg-white hover:bg-dark-50 hover:border-primary-500 transition-all duration-200 shadow-medium hover:shadow-large"
              >
                <div className="flex items-center gap-3 text-dark-700 group-hover:text-primary-600 font-semibold text-lg">
                  <LoginOutlined className="text-xl" />
                  <span>Continue Application</span>
                </div>
              </button>
            </div>
          </div>

          {/* Marquee Notice - Unique Diagonal Banner */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-2xl border-2 border-accent-200 shadow-large px-6 py-4 transform rotate-0 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center animate-pulse">
                  <span className="text-white font-black text-lg">!</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-accent-900 font-semibold text-sm md:text-base animate-marquee whitespace-nowrap">
                    🎓 Admissions Open for First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D 2025 🎓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Unique Card Grid */}
      <div className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-dark-600 text-lg">Fast, secure, and hassle-free admission process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-dark-100 shadow-medium group-hover:shadow-large transition-all duration-300 transform group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-4 shadow-glow transform group-hover:scale-110 transition-transform`}>
                    <div className="text-3xl text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h3>
                  <p className="text-dark-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Steps - Unique Timeline Design */}
      <div className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">Simple Application Process</h2>
            <p className="text-dark-600 text-lg">Complete your application in just 4 easy steps</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '1', title: 'Register', desc: 'Fill the online form', icon: <UserAddOutlined /> },
                { num: '2', title: 'Verify', desc: 'Complete OTP verification', icon: <SafetyCertificateOutlined /> },
                { num: '3', title: 'Upload', desc: 'Submit documents', icon: <FileTextOutlined /> },
                { num: '4', title: 'Pay', desc: 'Complete fee payment', icon: <CreditCardOutlined /> },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-dark-100 shadow-large hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-black text-xl shadow-glow border-4 border-white">
                        {step.num}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-4 flex justify-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-dark-50 to-dark-100 flex items-center justify-center text-primary-600 text-3xl">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-dark-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-dark-600 text-sm text-center">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA - Unique Floating Design */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl opacity-20 blur-2xl"></div>

            {/* Card */}
            <div className="relative bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 shadow-2xl">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
                <p className="text-xl mb-8 text-white/90">Join thousands of students pursuing their pharmacy dreams</p>
                <button
                  onClick={() => navigate('/registration')}
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <RocketOutlined className="text-2xl" />
                  <span>Register Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
