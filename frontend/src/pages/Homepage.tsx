/**
 * Homepage Component
 * Modern landing page with unique design
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, LoginOutlined, RocketOutlined, SafetyOutlined, ThunderboltOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/Button';

export const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Modern Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              CAP 2025
              <span className="block text-yellow-300 mt-2">Admission Portal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Centralized Admission Process for B.Pharmacy & Pharm.D Courses
            </p>
            <p className="text-lg text-indigo-200 mb-12">
              Academic Year 2025 | Maharashtra State
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/registration')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  <UserAddOutlined className="text-xl" />
                  New Registration
                </span>
              </button>

              <button
                onClick={() => navigate('/login')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  <LoginOutlined className="text-xl" />
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose CAP 2025?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, secure, and hassle-free admission process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <RocketOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Process</h3>
            <p className="text-gray-600">Complete registration in just 3 easy steps</p>
          </div>

          {/* Feature Card 2 */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <SafetyOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Secure</h3>
            <p className="text-gray-600">Your data is protected with advanced encryption</p>
          </div>

          {/* Feature Card 3 */}
          <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-green-500">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ThunderboltOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Verification</h3>
            <p className="text-gray-600">OTP-based verification in seconds</p>
          </div>

          {/* Feature Card 4 */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <StarOutlined className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical assistance</p>
          </div>
        </div>
      </div>

      {/* Registration Process Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{ top: '4rem', zIndex: 0 }}></div>

            {/* Step 1 */}
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">Fill your personal details</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verify OTP</h3>
              <p className="text-gray-600">Confirm via mobile & email</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Login</h3>
              <p className="text-gray-600">Access your dashboard</p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete</h3>
              <p className="text-gray-600">Fill application form</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/registration')}
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-2xl transition-all duration-300 hover:shadow-indigo-500/50 hover:scale-105"
            >
              Start Your Journey Today
              <RocketOutlined className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of students securing their future in pharmacy education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/registration')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-white/50 hover:scale-105"
            >
              <UserAddOutlined className="mr-2 text-xl" />
              Create Account
            </button>
            <button
              onClick={() => navigate('/instructions')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full shadow-2xl transition-all duration-300 hover:bg-white hover:text-indigo-600 hover:scale-105"
            >
              Read Instructions
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
