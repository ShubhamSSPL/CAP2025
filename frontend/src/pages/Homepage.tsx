/**
 * Homepage Component - Modern Glass Design
 * Professional landing page with government-appropriate styling
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined, RocketOutlined, SafetyOutlined, ThunderboltOutlined, StarOutlined } from '@ant-design/icons';

export const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Modern Glass */}
      <div className="relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-32">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-sm font-semibold">🎓 Admissions Open for 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
              CAP 2025
              <span className="block text-primary mt-2">Admission Portal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Centralized Admission Process for B.Pharmacy & Pharm.D Courses
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Academic Year 2025 | Maharashtra State
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/registration')}
                className="group gradient-primary text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <UserAddOutlined className="text-xl" />
                New Registration
              </button>

              <button
                onClick={() => navigate('/login')}
                className="group glass text-foreground px-8 py-4 text-lg font-bold rounded-full shadow-lg hover-lift transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <LoginOutlined className="text-xl" />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Why Choose CAP 2025?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and hassle-free admission process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Feature Card 1 */}
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <RocketOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Quick Process</h3>
            <p className="text-muted-foreground">Complete registration in just 3 easy steps</p>
          </div>

          {/* Feature Card 2 */}
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <SafetyOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">100% Secure</h3>
            <p className="text-muted-foreground">Your data is protected with advanced encryption</p>
          </div>

          {/* Feature Card 3 */}
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <ThunderboltOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Instant Verification</h3>
            <p className="text-muted-foreground">OTP-based verification in seconds</p>
          </div>

          {/* Feature Card 4 */}
          <div className="glass-card p-8 hover-lift">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <StarOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">24/7 Support</h3>
            <p className="text-muted-foreground">Round-the-clock technical assistance</p>
          </div>
        </div>
      </div>

      {/* Registration Process Section */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-hero"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Register</h3>
              <p className="text-muted-foreground">Fill your personal details</p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Verify OTP</h3>
              <p className="text-muted-foreground">Confirm via mobile & email</p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Login</h3>
              <p className="text-muted-foreground">Access your dashboard</p>
            </div>

            {/* Step 4 */}
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Complete</h3>
              <p className="text-muted-foreground">Fill application form</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/registration')}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white gradient-primary rounded-full shadow-lg hover-glow transition-all duration-300 hover:scale-105"
            >
              Start Your Journey Today
              <RocketOutlined className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-8">
        <div className="absolute inset-0 gradient-primary"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students securing their future in pharmacy education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/registration')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full shadow-lg hover-lift transition-all duration-300 hover:scale-105"
            >
              <UserAddOutlined className="mr-2 text-xl" />
              Create Account
            </button>
            <button
              onClick={() => navigate('/instructions')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
            >
              Read Instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
