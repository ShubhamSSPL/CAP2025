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
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDI0djI0SDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        {/* Header with Government Branding */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1 text-foreground">
            Welcome Back
          </h2>
          <p className="text-sm text-muted-foreground">
            Maharashtra Pharmacy Admissions Portal
          </p>
        </div>

        {/* Demo Mode Notice - Compact */}
        <Alert
          message={
            <div className="flex items-start gap-2">
              <InfoCircleOutlined className="text-primary-600 text-sm mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-dark-900 mb-0.5">Demo Mode Active</div>
                <div className="text-xs text-dark-600">
                  This is a demo version. {showDemoCredentials ? 'Your registered credentials are shown below.' : 'Register first to get your credentials, then login here.'}
                </div>
              </div>
            </div>
          }
          type="info"
          className="border-primary-200 bg-primary-50"
        />

        {/* Demo Credentials Display - Compact */}
        {showDemoCredentials && (
          <div className="bg-gradient-to-br from-success-50 to-primary-50 rounded-xl p-4 border-2 border-success-200">
            <div className="flex items-start gap-2 mb-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-success-600 flex items-center justify-center">
                  <EyeOutlined className="text-base text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-dark-900 mb-0.5">Your Demo Credentials</h3>
                <p className="text-xs text-dark-600">Use these to login (stored from your registration)</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-white rounded-lg p-2 border border-success-200">
                <div className="text-xs text-dark-500 mb-1">Application ID</div>
                <div className="flex items-center justify-between">
                  <code className="text-xs font-bold text-dark-900">{demoCredentials.appId}</code>
                  <button
                    onClick={() => copyToClipboard(demoCredentials.appId!)}
                    className="p-1 text-primary-600 hover:bg-primary-50 rounded transition-colors text-xs"
                    title="Copy to clipboard"
                  >
                    <CopyOutlined />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-2 border border-success-200">
                <div className="text-xs text-dark-500 mb-1">Password</div>
                <div className="flex items-center justify-between">
                  <code className="text-xs font-bold text-dark-900">••••••••</code>
                  <span className="text-xs text-dark-500">(hidden for security)</span>
                </div>
              </div>

              <button
                onClick={autofillDemoCredentials}
                className="w-full px-3 py-2 text-xs font-semibold text-success-700 bg-success-100 hover:bg-success-200 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5"
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
                <label className="block text-xs font-medium text-dark-700 mb-1">
                  Application ID
                </label>
                <FormInput
                  name="applicationId"
                  placeholder="Enter your Application ID (e.g., APP-123456)"
                  prefix={<UserOutlined className="text-dark-400" />}
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-medium text-dark-700 mb-1">
                  Password
                </label>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined className="text-dark-400" />}
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
                    className="w-4 h-4 text-primary-600 border-dark-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-dark-700">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button - Gradient */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white gradient-primary hover-glow rounded-lg shadow-soft transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="w-full border-t border-dark-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-dark-500">New to CAP 2025?</span>
            </div>
          </div>

          {/* Register Link */}
          <button
            type="button"
            onClick={() => navigate('/registration')}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-primary bg-muted hover:bg-muted/80 rounded-lg transition-all duration-200 hover-lift"
          >
            <RocketOutlined />
            <span>Create New Account</span>
          </button>
        </div>

        {/* Support Info - Glass Effect */}
        <div className="text-center p-3 glass rounded-xl">
          <p className="text-xs text-muted-foreground mb-1.5">
            Need help? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
            <a href="tel:+919175108612" className="text-primary hover:text-primary-glow font-medium transition-colors">
              📞 +91-9175108612
            </a>
            <span className="hidden sm:inline text-muted-foreground/30">|</span>
            <a href="mailto:cetcell.technicaledu@gmail.com" className="text-primary hover:text-primary-glow font-medium transition-colors">
              ✉️ cetcell.technicaledu@gmail.com
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            Available: 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
