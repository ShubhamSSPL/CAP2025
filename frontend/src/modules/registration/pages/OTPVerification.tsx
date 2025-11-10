/**
 * OTP Verification Component - Modern UI
 * Verify mobile number with OTP after registration
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Alert, Input, Space } from 'antd';
import { SafetyOutlined, MobileOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/Button';
import './OTPVerification.css';

interface LocationState {
  applicationId?: string;
  mobile?: string;
  email?: string;
}

const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(60);

  // Redirect if no application ID
  useEffect(() => {
    if (!state?.applicationId) {
      navigate('/registration');
    }
  }, [state, navigate]);

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [countdown]);

  const handleVerify = async () => {
    setError('');

    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await verifyOTP(state.applicationId, otp);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // On success, navigate to success page
      navigate('/registration/success', {
        state: {
          applicationId: state?.applicationId,
          mobile: state?.mobile,
          email: state?.email,
        }
      });
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError('');
    setLoading(true);

    try {
      // TODO: Replace with actual API call
      // await resendOTP(state.applicationId);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setCountdown(60);
      setResendDisabled(true);
      setError('');
      Alert.info({
        content: 'OTP has been resent successfully!',
      });
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/registration');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 texture-dots">
      <div className="otp-container">
        <Card className="otp-card shadow-lg rounded-xl border-0">
          {/* Header */}
          <div className="otp-header">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <SafetyOutlined className="text-3xl text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">OTP Verification</h2>
            <p className="text-sm text-gray-600">
              Enter the 6-digit OTP sent to your registered mobile number and email
            </p>
          </div>

          {/* Application ID and Contact Info */}
          {state?.applicationId && (
            <div className="contact-info">
              <div className="info-item">
                <UserOutlined className="mr-2 text-primary-600" />
                <span className="text-sm text-gray-600">Application ID: </span>
                <span className="app-id text-sm">{state.applicationId}</span>
              </div>
              {state?.mobile && (
                <div className="info-item">
                  <MobileOutlined className="mr-2 text-primary-600" />
                  <span className="text-sm text-gray-600">Mobile: </span>
                  <span className="text-sm font-medium">+91 {state.mobile.slice(0, 2)}******{state.mobile.slice(-2)}</span>
                </div>
              )}
              {state?.email && (
                <div className="info-item">
                  <MailOutlined className="mr-2 text-primary-600" />
                  <span className="text-sm text-gray-600">Email: </span>
                  <span className="text-sm font-medium">{state.email.slice(0, 3)}***@{state.email.split('@')[1]}</span>
                </div>
              )}
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              closable
              onClose={() => setError('')}
              className="mb-4"
            />
          )}

          {/* OTP Input */}
          <div className="otp-input-section">
            <label className="otp-label text-gray-700">Enter OTP</label>
            <Input
              className="otp-input"
              placeholder="000000"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              onPressEnter={handleVerify}
              disabled={loading}
              size="large"
            />
          </div>

          {/* Action Buttons */}
          <div className="otp-actions">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button
                type="primary"
                size="large"
                onClick={handleVerify}
                loading={loading}
                disabled={!otp || otp.length !== 6}
                className="w-full"
              >
                Verify OTP
              </Button>
              <Button
                size="large"
                onClick={handleCancel}
                disabled={loading}
                className="w-full"
              >
                Cancel
              </Button>
            </Space>
          </div>

          {/* Resend OTP */}
          <div className="resend-section">
            <p className="text-sm text-gray-600 mb-2">Didn't receive OTP?</p>
            {resendDisabled ? (
              <p className="text-sm text-gray-500">
                Resend available in <span className="font-semibold text-primary-600">{countdown}s</span>
              </p>
            ) : (
              <Button
                type="link"
                onClick={handleResend}
                loading={loading}
                className="p-0 h-auto"
              >
                Resend OTP
              </Button>
            )}
          </div>

          {/* Footer Note */}
          <div className="otp-footer">
            <p className="note text-gray-500">
              <SafetyOutlined className="mr-1" />
              Please do not share your OTP with anyone.
              Valid for 10 minutes.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OTPVerification;
