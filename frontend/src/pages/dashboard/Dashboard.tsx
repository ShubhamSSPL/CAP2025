/**
 * Dashboard Page - Unified UI with shadcn/ui
 * Post-login dashboard for candidates
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { UserOutlined, CheckCircleOutlined, FileTextOutlined, LogoutOutlined, RocketOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.login);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated && !localStorage.getItem('authToken')) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center justify-center w-24 h-24 rounded-3xl shadow-lg animate-float"
              style={{ background: `linear-gradient(to bottom right, var(--color-success), var(--color-primary))` }}
            >
              <CheckCircleOutlined className="text-5xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
            Welcome to Your Dashboard!
          </h1>
          <p className="text-xl" style={{ color: 'var(--color-muted-foreground)' }}>
            You've successfully logged in. Your application journey begins here.
          </p>
        </div>

        {/* User Info Card */}
        <Card className="mb-8" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <UserOutlined className="text-3xl text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-foreground)' }}>
                  {user?.name || 'Test Candidate'}
                </h2>
                <div className="space-y-2" style={{ color: 'var(--color-muted-foreground)' }}>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Application ID:</span>
                    <span
                      className="px-3 py-1 font-mono font-bold rounded-lg"
                      style={{
                        backgroundColor: 'var(--color-muted)',
                        color: 'var(--color-primary)'
                      }}
                    >
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
              <Button onClick={handleLogout} size="sm">
                <LogoutOutlined className="mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <Card className="mb-8" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-primary)' }}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <RocketOutlined className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-foreground)' }}>
                  Demo Mode - Login Successful!
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  You've successfully completed the demo flow: <strong>Registration → OTP Verification → Login</strong>.
                  In production, this dashboard would show the 10-step application form, document upload, fee payment, and application status tracking.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <FileTextOutlined className="text-2xl" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-foreground)' }}>Personal Details</h3>
                  <span
                    className="inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: 'var(--color-muted)',
                      color: 'var(--color-warning)'
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
                Complete your personal information, family details, and category information.
              </p>
              <Button
                onClick={() => navigate('/candidate/application')}
                variant="outline"
                className="w-full"
              >
                Start Application
              </Button>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="opacity-60" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <FileTextOutlined className="text-2xl" style={{ color: 'var(--color-muted-foreground)' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-foreground)' }}>Academic Details</h3>
                  <span
                    className="inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: 'var(--color-muted)',
                      color: 'var(--color-muted-foreground)'
                    }}
                  >
                    Locked
                  </span>
                </div>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
                Enter your HSC, SSC, and other educational qualifications.
              </p>
              <Button disabled variant="outline" className="w-full">
                Complete Step 1 First
              </Button>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="opacity-60" style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <FileTextOutlined className="text-2xl" style={{ color: 'var(--color-muted-foreground)' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-foreground)' }}>Document Upload</h3>
                  <span
                    className="inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: 'var(--color-muted)',
                      color: 'var(--color-muted-foreground)'
                    }}
                  >
                    Locked
                  </span>
                </div>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
                Upload required documents (Photo, Signature, Certificates).
              </p>
              <Button disabled variant="outline" className="w-full">
                Complete Previous Steps
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card style={{ backgroundColor: 'var(--color-background)', borderColor: 'var(--color-border)' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Need Help?
            </h3>
            <p className="mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
              Contact our support team for any assistance with your application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a href="tel:+919175108612" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                📞 +91-9175108612
              </a>
              <span className="hidden sm:inline" style={{ color: 'var(--color-border)' }}>|</span>
              <a href="mailto:cetcell.technicaledu@gmail.com" className="font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
                ✉️ cetcell.technicaledu@gmail.com
              </a>
            </div>
            <p className="text-xs mt-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Available: Monday - Saturday, 10:00 AM - 6:00 PM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
