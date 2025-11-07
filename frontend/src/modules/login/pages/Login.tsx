/**
 * Login Page
 * Complete login implementation with demo mode support
 */

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Alert } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined, InfoCircleOutlined, RocketOutlined, EyeOutlined, CopyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '@/shared/components/forms/FormInput';
import { useLogin } from '../hooks/useLogin';
import type { LoginFormData } from '../types/login.types';

// Validation Schema
const loginSchema = yup.object().shape({
  applicationId: yup
    .string()
    .required('Please enter your Application ID'),
  password: yup
    .string()
    .required('Please enter your password'),
  rememberMe: yup.boolean(),
});

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { handleLogin, isLoading } = useLogin();
  const [showDemoCredentials, setShowDemoCredentials] = useState(false);
  const [demoCredentials, setDemoCredentials] = useState<{ appId: string | null; password: string | null }>({ appId: null, password: null });

  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      applicationId: '',
      password: '',
      rememberMe: false,
    },
  });

  const { handleSubmit, setValue, watch } = methods;
  const rememberMe = watch('rememberMe');

  // Check if demo credentials exist in localStorage
  useEffect(() => {
    const mockAppId = localStorage.getItem('mockApplicationId');
    const mockPassword = localStorage.getItem('mockPassword');

    if (mockAppId && mockPassword) {
      setDemoCredentials({ appId: mockAppId, password: mockPassword });
      setShowDemoCredentials(true);
    }
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data);
  };

  const autofillDemoCredentials = () => {
    if (demoCredentials.appId && demoCredentials.password) {
      setValue('applicationId', demoCredentials.appId);
      setValue('password', demoCredentials.password);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background - Professional gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        {/* Header with Government Branding */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>
            Welcome Back
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
            Maharashtra Pharmacy Admissions Portal
          </p>
        </div>

        {/* Demo Mode Notice - Compact */}
        <Alert
          message={
            <div className="flex items-start gap-2">
              <InfoCircleOutlined className="text-sm mt-0.5" style={{ color: 'var(--color-primary)' }} />
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: 'var(--color-foreground)' }}>Demo Mode Active</div>
                <div className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
                  This is a demo version. {showDemoCredentials ? 'Your registered credentials are shown below.' : 'Register first to get your credentials, then login here.'}
                </div>
              </div>
            </div>
          }
          type="info"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-muted)'
          }}
        />

        {/* Demo Credentials Display - Compact */}
        {showDemoCredentials && (
          <div
            className="rounded-xl p-4 border-2"
            style={{
              background: 'linear-gradient(to bottom right, var(--color-muted), var(--color-glass))',
              borderColor: 'var(--color-border)'
            }}
          >
            <div className="flex items-start gap-2 mb-3">
              <div className="flex-shrink-0">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-success)' }}
                >
                  <EyeOutlined className="text-base text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-0.5" style={{ color: 'var(--color-foreground)' }}>Your Demo Credentials</h3>
                <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>Use these to login (stored from your registration)</p>
              </div>
            </div>

            <div className="space-y-2">
              <div
                className="rounded-lg p-2 border"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <div className="text-xs mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Application ID</div>
                <div className="flex items-center justify-between">
                  <code className="text-xs font-bold" style={{ color: 'var(--color-foreground)' }}>{demoCredentials.appId}</code>
                  <button
                    onClick={() => copyToClipboard(demoCredentials.appId!)}
                    className="p-1 rounded transition-colors text-xs"
                    style={{ color: 'var(--color-primary)' }}
                    title="Copy to clipboard"
                  >
                    <CopyOutlined />
                  </button>
                </div>
              </div>

              <div
                className="rounded-lg p-2 border"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <div className="text-xs mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Password</div>
                <div className="flex items-center justify-between">
                  <code className="text-xs font-bold" style={{ color: 'var(--color-foreground)' }}>••••••••</code>
                  <span className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>(hidden for security)</span>
                </div>
              </div>

              <button
                onClick={autofillDemoCredentials}
                className="w-full px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5"
                style={{
                  color: 'var(--color-success)',
                  backgroundColor: 'var(--color-muted)'
                }}
              >
                <RocketOutlined />
                Auto-fill Credentials
              </button>
            </div>
          </div>
        )}

        {/* Login Form - Glass Card */}
        <div className="glass-card hover-glow p-4 md:p-6">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Application ID Field */}
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>
                  Application ID
                </label>
                <FormInput
                  name="applicationId"
                  placeholder="Enter your Application ID (e.g., APP-123456)"
                  prefix={<UserOutlined style={{ color: 'var(--color-muted-foreground)' }} />}
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>
                  Password
                </label>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined style={{ color: 'var(--color-muted-foreground)' }} />}
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setValue('rememberMe', e.target.checked)}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <span className="ml-2 text-sm" style={{ color: 'var(--color-foreground)' }}>Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button - Gradient */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg shadow-soft transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--color-primary-foreground)'
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <LoginOutlined />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>
          </FormProvider>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: 'var(--color-border)' }}></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span
                className="px-3"
                style={{
                  backgroundColor: 'var(--color-background)',
                  color: 'var(--color-muted-foreground)'
                }}
              >
                New to CAP 2025?
              </span>
            </div>
          </div>

          {/* Register Link */}
          <button
            type="button"
            onClick={() => navigate('/registration')}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover-lift"
            style={{
              color: 'var(--color-primary)',
              backgroundColor: 'var(--color-muted)'
            }}
          >
            <RocketOutlined />
            <span>Create New Account</span>
          </button>
        </div>

        {/* Support Info - Glass Effect */}
        <div
          className="text-center p-3 rounded-xl"
          style={{
            backgroundColor: 'var(--color-glass)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p className="text-xs mb-1.5" style={{ color: 'var(--color-muted-foreground)' }}>
            Need help? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
            <a
              href="tel:+919175108612"
              className="font-medium transition-colors"
              style={{ color: 'var(--color-primary)' }}
            >
              📞 +91-9175108612
            </a>
            <span className="hidden sm:inline" style={{ color: 'var(--color-muted-foreground)', opacity: 0.3 }}>|</span>
            <a
              href="mailto:cetcell.technicaledu@gmail.com"
              className="font-medium transition-colors"
              style={{ color: 'var(--color-primary)' }}
            >
              ✉️ cetcell.technicaledu@gmail.com
            </a>
          </div>
          <p className="text-xs mt-1.5" style={{ color: 'var(--color-muted-foreground)' }}>
            Available: 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
