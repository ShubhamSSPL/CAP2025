/**
 * OTP Verification Page
 * Modern OTP verification interface with demo mode
 */

import React, { useState } from 'react';
import { Alert } from 'antd';
import { MailOutlined, MobileOutlined, SafetyCertificateOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button } from '@/shared/components/ui/Button';
import { useOTPVerification } from '../hooks/useOTPVerification';

export const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState('');

  const {
    applicationId,
    mobileNumber,
    email,
    isVerifyingOTP,
    isResendingOTP,
    otpError,
    otpResendTimer,
    canResend,
    maxAttemptsReached,
    verifyOTP,
    resendOTP,
  } = useOTPVerification();

  const handleVerify = async () => {
    if (otp.length !== 6) {
      return;
    }

    const result = await verifyOTP(otp);

    if (result.success) {
      console.log('OTP verified successfully!');
    }
  };

  const handleResend = async () => {
    const result = await resendOTP();

    if (result.success) {
      setOtp('');
    }
  };

  const maskMobile = (mobile: string | null) => {
    if (!mobile) return '**********';
    return `******${mobile.slice(-4)}`;
  };

  const maskEmail = (email: string | null) => {
    if (!email) return '****@****.com';
    const [user, domain] = email.split('@');
    return `${user.slice(0, 2)}****@${domain}`;
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 texture-dots">
      <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-success-500 to-primary-500 shadow-glow">
              <SafetyCertificateOutlined className="text-4xl text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-dark-900 mb-2">
            Verify Your Identity
          </h2>
          <p className="text-dark-500">
            Enter the OTP sent to your registered contact details
          </p>
        </div>

        {/* Demo Mode Notice - Prominent */}
        <Alert
          message={
            <div className="flex items-start gap-2">
              <InfoCircleOutlined className="text-success-600 text-lg mt-0.5" />
              <div>
                <div className="font-semibold text-dark-900 mb-1">Demo Mode - Easy Testing!</div>
                <div className="text-sm text-dark-600">
                  <strong>For testing purposes:</strong> Enter ANY 6-digit number (e.g., 123456, 111111, 000000).
                  All OTP codes work in demo mode. No actual SMS or email is sent.
                </div>
              </div>
            </div>
          }
          type="success"
          className="border-success-200 bg-success-50"
        />

        {/* Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-medium p-6 border border-dark-100">
          <div className="space-y-4">
            {/* Application ID */}
            <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-100">
              <span className="text-sm font-medium text-dark-700">Application ID</span>
              <span className="text-lg font-bold text-primary-700">{applicationId || 'APP-XXXXXX'}</span>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-lg">
                <MobileOutlined className="text-xl text-primary-600" />
                <div>
                  <div className="text-xs text-dark-500 mb-1">Mobile</div>
                  <div className="text-sm font-medium text-dark-900">{maskMobile(mobileNumber)}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-lg">
                <MailOutlined className="text-xl text-primary-600" />
                <div>
                  <div className="text-xs text-dark-500 mb-1">Email</div>
                  <div className="text-sm font-medium text-dark-900">{maskEmail(email)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {otpError && (
          <Alert
            message="Verification Failed"
            description={otpError}
            type="error"
            showIcon
            closable
          />
        )}

        {/* Max Attempts Alert */}
        {maxAttemptsReached && (
          <Alert
            message="Maximum Attempts Reached"
            description="You have exceeded the maximum number of OTP resend attempts. Please try again after some time or contact support."
            type="warning"
            showIcon
          />
        )}

        {/* OTP Input Card */}
        <div className="bg-white rounded-2xl shadow-medium p-8 border border-dark-100">
          <div className="space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-3 text-center">
                Enter 6-Digit OTP
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                disabled={isVerifyingOTP}
                className="w-full text-center text-4xl font-bold tracking-widest px-4 py-5 border-2 border-dark-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-dark-50 disabled:cursor-not-allowed"
                style={{ letterSpacing: '1rem' }}
              />
              <p className="text-xs text-dark-500 text-center mt-2">
                Enter the 6-digit code
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="button"
              onClick={handleVerify}
              disabled={otp.length !== 6 || isVerifyingOTP}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-700 hover:to-primary-700 rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifyingOTP ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <SafetyCertificateOutlined />
                  <span>Verify OTP</span>
                </>
              )}
            </button>

            {/* Resend OTP */}
            <div className="text-center pt-4 border-t border-dark-100">
              {otpResendTimer > 0 ? (
                <p className="text-sm text-dark-500">
                  Resend OTP in <span className="font-semibold text-primary-600">{otpResendTimer}</span> seconds
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={!canResend || maxAttemptsReached || isResendingOTP}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 disabled:text-dark-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isResendingOTP ? 'Sending...' : "Didn't receive OTP? Resend"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center p-6 bg-dark-50 rounded-xl border border-dark-100">
          <p className="text-sm text-dark-600 mb-2">
            💡 <strong>Demo Tip:</strong> Use any 6 digits like 123456
          </p>
          <p className="text-xs text-dark-500">
            OTP is valid for 10 minutes. Check spam folder if you don't receive the email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
