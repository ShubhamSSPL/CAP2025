/**
 * Dashboard Page
 * Post-login dashboard for candidates
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { UserOutlined, CheckCircleOutlined, FileTextOutlined, LogoutOutlined, RocketOutlined } from '@ant-design/icons';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.login);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-success-500 to-primary-500 shadow-glow animate-float">
              <CheckCircleOutlined className="text-5xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-dark-900 mb-4">
            Welcome to Your Dashboard! 🎉
          </h1>
          <p className="text-xl text-dark-600">
            You've successfully logged in. Your application journey begins here.
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-large p-8 mb-8 border border-dark-100">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <UserOutlined className="text-3xl text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-dark-900 mb-2">
                {user?.name || 'Test Candidate'}
              </h2>
              <div className="space-y-2 text-dark-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Application ID:</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 font-mono font-bold rounded-lg">
                    {user?.applicationId || 'APP-XXXXXX'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <span>{user?.email || 'user@example.com'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Mobile:</span>
                  <span>{user?.mobileNumber || '+91-XXXXXXXXXX'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 rounded-lg shadow-soft transition-all duration-200"
            >
              <LogoutOutlined className="mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <RocketOutlined className="text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-dark-900 mb-2">
                🎉 Demo Mode - Login Successful!
              </h3>
              <p className="text-dark-700 leading-relaxed">
                You've successfully completed the demo flow: <strong>Registration → OTP Verification → Login</strong>.
                In production, this dashboard would show the 10-step application form, document upload, fee payment, and application status tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Application Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-medium p-6 border border-dark-100 hover:shadow-large transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <FileTextOutlined className="text-2xl text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-900">Personal Details</h3>
                <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Pending
                </span>
              </div>
            </div>
            <p className="text-sm text-dark-600 mb-4">
              Complete your personal information, family details, and category information.
            </p>
            <button className="w-full px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
              Start Application
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-medium p-6 border border-dark-100 opacity-60">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-dark-100 flex items-center justify-center flex-shrink-0">
                <FileTextOutlined className="text-2xl text-dark-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-900">Academic Details</h3>
                <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-dark-100 text-dark-600 rounded-full">
                  Locked
                </span>
              </div>
            </div>
            <p className="text-sm text-dark-600 mb-4">
              Enter your HSC, SSC, and other educational qualifications.
            </p>
            <button disabled className="w-full px-4 py-2 text-sm font-medium text-dark-400 bg-dark-50 rounded-lg cursor-not-allowed">
              Complete Step 1 First
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-medium p-6 border border-dark-100 opacity-60">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-dark-100 flex items-center justify-center flex-shrink-0">
                <FileTextOutlined className="text-2xl text-dark-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-900">Document Upload</h3>
                <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-dark-100 text-dark-600 rounded-full">
                  Locked
                </span>
              </div>
            </div>
            <p className="text-sm text-dark-600 mb-4">
              Upload required documents (Photo, Signature, Certificates).
            </p>
            <button disabled className="w-full px-4 py-2 text-sm font-medium text-dark-400 bg-dark-50 rounded-lg cursor-not-allowed">
              Complete Previous Steps
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center p-8 bg-white rounded-2xl shadow-medium border border-dark-100">
          <h3 className="text-xl font-bold text-dark-900 mb-4">
            Need Help?
          </h3>
          <p className="text-dark-600 mb-6">
            Contact our support team for any assistance with your application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:+919175108612" className="text-primary-600 hover:text-primary-700 font-medium">
              📞 +91-9175108612
            </a>
            <span className="hidden sm:inline text-dark-300">|</span>
            <a href="mailto:cetcell.technicaledu@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
              ✉️ cetcell.technicaledu@gmail.com
            </a>
          </div>
          <p className="text-xs text-dark-500 mt-4">
            Available: Monday - Saturday, 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
