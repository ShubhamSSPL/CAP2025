/**
 * Login Page
 * Modern login interface with demo mode support
 */

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Alert } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined, InfoCircleOutlined, RocketOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '@/shared/components/forms/FormInput';
import { Button } from '@/shared/components/ui/Button';
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

  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-glow">
              <LoginOutlined className="text-4xl text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-dark-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-dark-500">
            Sign in to continue your application
          </p>
        </div>

        {/* Demo Mode Notice */}
        <Alert
          message={
            <div className="flex items-start gap-2">
              <InfoCircleOutlined className="text-primary-600 text-lg mt-0.5" />
              <div>
                <div className="font-semibold text-dark-900 mb-1">Demo Mode Active</div>
                <div className="text-sm text-dark-600">
                  This is a demo version. Use the Application ID and password from your registration to login.
                  If you haven't registered yet, click "Register Now" below.
                </div>
              </div>
            </div>
          }
          type="info"
          className="border-primary-200 bg-primary-50"
        />

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-medium p-8 border border-dark-100">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Application ID Field */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Application ID
                </label>
                <FormInput
                  name="applicationId"
                  placeholder="Enter your Application ID (e.g., APP-123456)"
                  prefix={<UserOutlined className="text-dark-400" />}
                  size="large"
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Password
                </label>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined className="text-dark-400" />}
                  size="large"
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

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-dark-500">New to CAP 2025?</span>
            </div>
          </div>

          {/* Register Link */}
          <button
            type="button"
            onClick={() => navigate('/registration')}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
          >
            <RocketOutlined />
            <span>Create New Account</span>
          </button>
        </div>

        {/* Support Info */}
        <div className="text-center p-6 bg-dark-50 rounded-xl border border-dark-100">
          <p className="text-sm text-dark-600 mb-2">
            Need help? Contact our support team
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
          <p className="text-xs text-dark-500 mt-2">
            Available: 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
