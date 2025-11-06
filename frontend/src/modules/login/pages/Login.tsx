/**
 * Login Page
 * User login with Application ID and Password
 */

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Typography, Space, Checkbox, Alert, Divider } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '@/shared/components/forms/FormInput';
import { Button } from '@/shared/components/ui/Button';
import { useLogin } from '../hooks/useLogin';
import type { LoginFormData } from '../types/login.types';
import './Login.css';

const { Title, Text, Paragraph } = Typography;

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
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="shadow-xl">
        <div className="text-center mb-6">
          <Title level={2} className="text-primary flex items-center justify-center gap-2">
            <LoginOutlined /> Login
          </Title>
          <Text type="secondary">
            Enter your Application ID and Password to access your account
          </Text>
        </div>

          <Divider />

          <Alert
            message="Important Note"
            description="Use the Application ID and password that you created during registration."
            type="info"
            showIcon
            style={{ marginBottom: 24 }}
          />

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <FormInput
                  name="applicationId"
                  label="Application ID"
                  placeholder="Enter your Application ID (e.g., APP-123456)"
                  prefix={<UserOutlined />}
                  size="large"
                  required
                  helpText="Enter the Application ID received after registration"
                />

                <FormInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  size="large"
                  required
                  helpText="Password must be 8-13 characters with uppercase, lowercase, number and special character"
                />

                <div className="login-options">
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setValue('rememberMe', e.target.checked)}
                  >
                    Remember me
                  </Checkbox>
                  <a href="#" className="forgot-password-link">
                    Forgot Password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  loading={isLoading}
                  block
                  icon={<LoginOutlined />}
                >
                  Login
                </Button>
              </Space>
            </form>
          </FormProvider>

          <Divider>OR</Divider>

          <div className="register-section">
            <Paragraph>
              Don't have an account?{' '}
              <Button
                variant="link"
                onClick={() => navigate('/registration')}
              >
                Register Now
              </Button>
            </Paragraph>
          </div>

        <div className="mt-6 p-4 bg-gray-50 rounded text-center">
          <Text type="secondary">
            For technical support, contact: <br />
            <strong>Helpline:</strong> +91-9175108612, 18002660160 <br />
            <strong>Email:</strong> cetcell.technicaledu@gmail.com <br />
            <strong>Timing:</strong> 10:00 AM to 06:00 PM
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Login;
