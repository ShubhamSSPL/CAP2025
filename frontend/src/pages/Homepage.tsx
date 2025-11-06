/**
 * Homepage Component
 * Landing page for the application
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Alert } from 'antd';
import { UserAddOutlined, LoginOutlined, InfoCircleOutlined, BellOutlined, FileTextOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/Button';

export const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Welcome to CAP 2025
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-2">
              Centralized Admission Process for B.Pharmacy & Pharm.D Courses
            </p>
            <p className="text-sm sm:text-base text-blue-100">
              Academic Year 2025 | State Common Entrance Test Cell, Maharashtra
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Important Notice */}
        <Alert
          message="Important Announcement"
          description="Online registration for First Year B.Pharmacy and Pharm.D courses for Academic Year 2025 is now open. Candidates are advised to register before the deadline."
          type="warning"
          showIcon
          icon={<BellOutlined />}
          className="mb-8"
          closable
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card
            className="hover:shadow-xl transition-shadow duration-300 border-2 border-primary"
            title={
              <div className="flex items-center gap-2 text-primary">
                <UserAddOutlined className="text-2xl" />
                <span className="text-xl">New Candidate Registration</span>
              </div>
            }
          >
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              First time registration for B.Pharmacy & Pharm.D courses. Create your account and start the application process.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-1">
              <li>Fill personal and communication details</li>
              <li>Create your Application ID and password</li>
              <li>Verify your mobile number and email</li>
              <li>Complete registration in 3 easy steps</li>
            </ul>
            <Button
              variant="primary"
              size="large"
              block
              icon={<UserAddOutlined />}
              onClick={() => navigate('/registration')}
              className="h-12 text-lg font-semibold"
            >
              Register Now
            </Button>
          </Card>

          <Card
            className="hover:shadow-xl transition-shadow duration-300 border-2 border-secondary"
            title={
              <div className="flex items-center gap-2 text-secondary">
                <LoginOutlined className="text-2xl" />
                <span className="text-xl">Existing Candidate Login</span>
              </div>
            }
          >
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              Already registered? Login with your Application ID and password to continue your application.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-1">
              <li>Complete the 10-step application form</li>
              <li>Upload required documents</li>
              <li>Pay application fees online</li>
              <li>Submit application for verification</li>
            </ul>
            <Button
              variant="default"
              size="large"
              block
              icon={<LoginOutlined />}
              onClick={() => navigate('/login')}
              className="h-12 text-lg font-semibold bg-secondary text-white border-secondary hover:bg-orange-700"
            >
              Login to Continue
            </Button>
          </Card>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card
            className="hover:shadow-lg transition-shadow duration-300"
            hoverable
            onClick={() => navigate('/instructions')}
          >
            <div className="text-center">
              <InfoCircleOutlined className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-gray-600 text-sm">
                Read detailed instructions before starting the registration process
              </p>
            </div>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow duration-300"
            hoverable
            onClick={() => navigate('/important-dates')}
          >
            <div className="text-center">
              <FileTextOutlined className="text-5xl text-green-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Important Dates</h3>
              <p className="text-gray-600 text-sm">
                Check all important dates and deadlines for the admission process
              </p>
            </div>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow duration-300"
            hoverable
            onClick={() => navigate('/faqs')}
          >
            <div className="text-center">
              <SafetyCertificateOutlined className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">FAQs</h3>
              <p className="text-gray-600 text-sm">
                Find answers to frequently asked questions about the admission process
              </p>
            </div>
          </Card>
        </div>

        {/* Process Steps */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-sm text-gray-600">
                Create account with personal details
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Verify OTP</h3>
              <p className="text-sm text-gray-600">
                Verify mobile and email with OTP
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Login</h3>
              <p className="text-sm text-gray-600">
                Login with Application ID
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Complete Form</h3>
              <p className="text-sm text-gray-600">
                Fill 10-step application form
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Homepage;
