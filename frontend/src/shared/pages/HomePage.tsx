/**
 * Home Page - Professional Government Design
 * Clean landing page with minimal colors
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined, CheckCircleOutlined, FileTextOutlined, SafetyCertificateOutlined, CreditCardOutlined } from '@ant-design/icons';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <FileTextOutlined />, title: 'Easy Application', desc: 'Simple online registration process' },
    { icon: <SafetyCertificateOutlined />, title: 'Secure Platform', desc: 'Your data is safe with us' },
    { icon: <CheckCircleOutlined />, title: 'Quick Verification', desc: 'Fast OTP & document verification' },
    { icon: <CreditCardOutlined />, title: 'Online Payment', desc: 'Multiple payment options' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-green-800">Admissions Open for 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Maharashtra Pharmacy Admissions 2025
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Official admission portal for B.Pharmacy & Pharm.D programs.
              Secure your future in pharmaceutical sciences with our streamlined application process.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => navigate('/exam-validation')}
                className="px-8 py-4 gradient-primary hover-glow text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-3"
              >
                <UserAddOutlined className="text-xl" />
                <span>New Registration</span>
              </button>

              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 glass hover-lift text-foreground font-semibold rounded-lg shadow-sm transition-all duration-200 flex items-center gap-3"
              >
                <LoginOutlined className="text-xl" />
                <span>Login to Continue</span>
              </button>
            </div>
          </div>

          {/* Notice Banner */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <p className="text-yellow-900 font-medium text-sm md:text-base">
                Admissions Open for First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-600 text-lg">Fast, secure, and hassle-free admission process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <div className="text-3xl text-primary-600">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Steps */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Application Process</h2>
            <p className="text-gray-600 text-lg">Complete your application in just 4 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Register', desc: 'Fill the online form', icon: <UserAddOutlined /> },
              { num: '2', title: 'Verify', desc: 'Complete OTP verification', icon: <SafetyCertificateOutlined /> },
              { num: '3', title: 'Upload', desc: 'Submit documents', icon: <FileTextOutlined /> },
              { num: '4', title: 'Pay', desc: 'Complete fee payment', icon: <CreditCardOutlined /> },
            ].map((step, index) => (
              <div key={index} className="relative bg-gray-50 rounded-lg p-6 border border-gray-200">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow">
                    {step.num}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-primary-600 text-2xl border border-gray-200">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-100">Join thousands of students pursuing their pharmacy dreams</p>
          <button
            onClick={() => navigate('/exam-validation')}
            className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <UserAddOutlined className="text-2xl" />
            <span>Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
