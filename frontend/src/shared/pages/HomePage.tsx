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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-slide-up">
          <div className="text-center mb-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4"
              style={{
                backgroundColor: 'var(--color-muted)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-success)' }}></div>
              <span className="text-xs font-semibold" style={{ color: 'var(--color-success)' }}>Admissions Open for 2025</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight" style={{ color: 'var(--color-foreground)' }}>
              Maharashtra Pharmacy Admissions 2025
            </h1>

            <p className="text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              Official admission portal for B.Pharmacy & Pharm.D programs.
              Secure your future in pharmaceutical sciences with our streamlined application process.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <button
                onClick={() => navigate('/exam-validation')}
                className="px-6 py-3 hover-glow font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 text-sm"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--color-primary-foreground)'
                }}
              >
                <UserAddOutlined className="text-lg" />
                <span>New Registration</span>
              </button>

              <button
                onClick={() => navigate('/login')}
                className="px-6 py-3 glass hover-lift font-semibold rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2 text-sm"
                style={{ color: 'var(--color-foreground)' }}
              >
                <LoginOutlined className="text-lg" />
                <span>Login to Continue</span>
              </button>
            </div>
          </div>

          {/* Notice Banner */}
          <div
            className="border-l-4 p-4 rounded-r-lg"
            style={{
              backgroundColor: 'var(--color-muted)',
              borderColor: 'var(--color-warning)'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-warning)' }}
              >
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <p className="font-medium text-sm md:text-base" style={{ color: 'var(--color-foreground)' }}>
                Admissions Open for First Year Under Graduate Technical Course in B.Pharmacy & Post Graduate Pharm.D 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>Why Choose Our Platform?</h2>
            <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Fast, secure, and hassle-free admission process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg p-4 border shadow-sm hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <div className="text-2xl" style={{ color: 'var(--color-primary)' }}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>{feature.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Steps */}
      <div className="py-8" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>Simple Application Process</h2>
            <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>Complete your application in just 4 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'Register', desc: 'Fill the online form', icon: <UserAddOutlined /> },
              { num: '2', title: 'Verify', desc: 'Complete OTP verification', icon: <SafetyCertificateOutlined /> },
              { num: '3', title: 'Upload', desc: 'Submit documents', icon: <FileTextOutlined /> },
              { num: '4', title: 'Pay', desc: 'Complete fee payment', icon: <CreditCardOutlined /> },
            ].map((step, index) => (
              <div
                key={index}
                className="relative rounded-lg p-4 border"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderColor: 'var(--color-border)'
                }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 shadow"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-primary-foreground)',
                      borderColor: 'var(--color-background)'
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-3 flex justify-center">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl border"
                    style={{
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--color-primary)',
                      borderColor: 'var(--color-border)'
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-1 text-center" style={{ color: 'var(--color-foreground)' }}>{step.title}</h3>
                <p className="text-xs text-center" style={{ color: 'var(--color-muted-foreground)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div
        className="py-10"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ color: 'var(--color-primary-foreground)' }}>
          <h2 className="text-2xl font-bold mb-3">Ready to Begin Your Journey?</h2>
          <p className="text-base mb-6 opacity-90">Join thousands of students pursuing their pharmacy dreams</p>
          <button
            onClick={() => navigate('/exam-validation')}
            className="px-6 py-3 rounded-lg font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-primary)'
            }}
          >
            <UserAddOutlined className="text-xl" />
            <span>Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
