/**
 * useLogin Hook
 * Custom hook for login functionality
 */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { LoginService } from '../services/login.service';
import { loginStart, loginSuccess, loginFailure } from '../store/loginSlice';
import { LoginFormData } from '../types/login.types';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      dispatch(loginStart());

      const response = await LoginService.login(data);

      if (response.success) {
        dispatch(loginSuccess(response));
        message.success('Login successful!');

        // Navigate to candidate dashboard after successful login
        navigate('/candidate/dashboard');
      } else {
        const errorMessage = response.message || 'Login failed';
        dispatch(loginFailure(errorMessage));
        message.error(errorMessage);
      }
    } catch (error: any) {
      const errorMessage = error.message || 'An error occurred during login';
      dispatch(loginFailure(errorMessage));
      message.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await LoginService.logout();
      message.success('Logged out successfully');
      navigate('/login');
    } catch (error: any) {
      message.error(error.message || 'Logout failed');
    }
  };

  return {
    handleLogin,
    handleLogout,
    isLoading,
  };
};
