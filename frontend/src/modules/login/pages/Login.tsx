/**
 * Login Page
 * Unified design with shadcn/ui components
 */

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginOutlined, RocketOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Label, Card, CardContent } from '@/shared/components/ui';
import FormContainer from '@/shared/components/FormContainer';
import { useLogin } from '../hooks/useLogin';
import type { LoginFormData } from '../types/login.types';

const loginSchema = yup.object().shape({
  applicationId: yup.string().required('Please enter your Application ID'),
  password: yup.string().required('Please enter your password'),
  rememberMe: yup.boolean(),
});

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { handleLogin, isLoading } = useLogin();
  const [demoCredentials, setDemoCredentials] = useState<{ appId: string | null; password: string | null }>({ appId: null, password: null });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      applicationId: '',
      password: '',
      rememberMe: false,
    },
  });

  useEffect(() => {
    const mockAppId = localStorage.getItem('mockApplicationId');
    const mockPassword = localStorage.getItem('mockPassword');
    if (mockAppId && mockPassword) {
      setDemoCredentials({ appId: mockAppId, password: mockPassword });
    }
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data);
  };

  const autofillDemo = () => {
    if (demoCredentials.appId && demoCredentials.password) {
      setValue('applicationId', demoCredentials.appId);
      setValue('password', demoCredentials.password);
    }
  };

  return (
    <FormContainer
      title="Welcome Back"
      description="Maharashtra Pharmacy Admissions Portal"
      icon={<LoginOutlined className="text-3xl text-white" />}
      maxWidth="md"
    >
      {/* Demo Notice */}
      {demoCredentials.appId && (
        <Card className="mb-6" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-border)' }}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-success)' }}>
                <RocketOutlined className="text-xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-foreground)' }}>Demo Credentials Available</h3>
                <p className="text-xs mb-3" style={{ color: 'var(--color-muted-foreground)' }}>
                  Application ID: <code className="font-mono font-semibold">{demoCredentials.appId}</code>
                </p>
                <Button size="sm" variant="outline" onClick={autofillDemo}>
                  Auto-fill Credentials
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="applicationId">Application ID</Label>
          <Input
            id="applicationId"
            placeholder="Enter your Application ID"
            {...register('applicationId')}
          />
          {errors.applicationId && (
            <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.applicationId.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-sm" style={{ color: 'var(--color-error)' }}>{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              {...register('rememberMe')}
              className="w-4 h-4 rounded"
              style={{ accentColor: 'var(--color-primary)' }}
            />
            <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>Remember me</span>
          </label>
          <button
            type="button"
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" style={{ borderColor: 'var(--color-border)' }}></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 text-sm" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-muted-foreground)' }}>
              New to CAP 2025?
            </span>
          </div>
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={() => navigate('/exam-validation')}>
          Create New Account
        </Button>
      </form>

      {/* Support */}
      <div className="mt-6 text-center text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
        <p>Need help? Contact: cetcell.technicaledu@gmail.com</p>
      </div>
    </FormContainer>
  );
};

export default Login;
