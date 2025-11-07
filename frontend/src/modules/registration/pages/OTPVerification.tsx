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
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 texture-dots">
      <div className="max-w-lg w-full space-y-6">
        {/* Header - Compact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-1">
            Verify Your Identity
          </h2>
          <p className="text-sm text-dark-500">
            Enter the OTP sent to your registered contact details
          </p>
        </div>

        {/* Demo Mode Notice - Compact */}
        <Alert
          message={
            <div className="flex items-start gap-2">
              <InfoCircleOutlined className="text-success-600 text-sm mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-dark-900 mb-0.5">Demo Mode - Easy Testing!</div>
                <div className="text-xs text-dark-600">
                  <strong>For testing:</strong> Enter ANY 6-digit number (e.g., 123456, 111111, 000000).
                  All OTP codes work in demo mode. No actual SMS or email is sent.
                </div>
              </div>
            </div>
          }
          type="success"
          className="border-success-200 bg-success-50"
        />

        {/* Contact Info Card - Compact */}
        <div className="bg-white rounded-xl shadow-medium p-4 border border-dark-100">
          <div className="space-y-3">
            {/* Application ID */}
            <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg border border-primary-100">
              <span className="text-xs font-medium text-dark-700">Application ID</span>
              <span className="text-sm font-bold text-primary-700">{applicationId || 'APP-XXXXXX'}</span>
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-dark-50 rounded-lg">
                <MobileOutlined className="text-base text-primary-600" />
                <div>
                  <div className="text-xs text-dark-500 mb-0.5">Mobile</div>
                  <div className="text-xs font-medium text-dark-900">{maskMobile(mobileNumber)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-dark-50 rounded-lg">
                <MailOutlined className="text-base text-primary-600" />
                <div>
                  <div className="text-xs text-dark-500 mb-0.5">Email</div>
                  <div className="text-xs font-medium text-dark-900">{maskEmail(email)}</div>
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

        {/* OTP Input Card - Compact */}
        <div className="bg-white rounded-xl shadow-medium p-4 md:p-6 border border-dark-100">
          <div className="space-y-4">
            {/* OTP Input */}
            <div>
              <label className="block text-xs font-medium text-dark-700 mb-2 text-center">
                Enter 6-Digit OTP
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                disabled={isVerifyingOTP}
                className="w-full text-center text-2xl md:text-3xl font-bold tracking-widest px-3 py-3 border-2 border-dark-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-dark-50 disabled:cursor-not-allowed"
                style={{ letterSpacing: '0.75rem' }}
              />
              <p className="text-xs text-dark-500 text-center mt-1.5">
                Enter the 6-digit code
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="button"
              onClick={handleVerify}
              disabled={otp.length !== 6 || isVerifyingOTP}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-700 hover:to-primary-700 rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifyingOTP ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            <div className="text-center pt-2 border-t border-dark-100">
              {otpResendTimer > 0 ? (
                <p className="text-xs text-dark-500">
                  Resend OTP in <span className="font-semibold text-primary-600">{otpResendTimer}</span> seconds
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={!canResend || maxAttemptsReached || isResendingOTP}
                  className="text-xs font-medium text-primary-600 hover:text-primary-700 disabled:text-dark-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isResendingOTP ? 'Sending...' : "Didn't receive OTP? Resend"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help Text - Compact */}
        <div className="text-center p-3 bg-dark-50 rounded-xl border border-dark-100">
          <p className="text-xs text-dark-600 mb-1">
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
