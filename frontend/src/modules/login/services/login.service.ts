/**
 * Login Service
 * Handles login API calls
 * MOCK MODE: Works with dummy data when API is not available
 */

import { apiService } from '@/shared/services/api/base.service';
import { LoginFormData, LoginResponse } from '../types/login.types';

// Mock mode - set to true to use dummy data without backend
const MOCK_MODE = true;

// Helper to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class LoginService {
  /**
   * Login with application ID and password
   */
  static async login(data: LoginFormData): Promise<LoginResponse> {
    if (MOCK_MODE) {
      await delay(1200);

      // Check if user has registered (stored in localStorage)
      const mockAppId = localStorage.getItem('mockApplicationId');
      const mockPassword = localStorage.getItem('mockPassword');
      const mockMobile = localStorage.getItem('mockMobileNumber');
      const mockEmail = localStorage.getItem('mockEmail');

      // Validate credentials
      if (mockAppId && mockPassword && data.applicationId === mockAppId && data.password === mockPassword) {
        const mockToken = 'mock-jwt-token-' + Date.now();

        // Store token
        if (data.rememberMe) {
          localStorage.setItem('authToken', mockToken);
          localStorage.setItem('token', mockToken);
        } else {
          sessionStorage.setItem('authToken', mockToken);
          localStorage.setItem('token', mockToken);
        }

        return {
          success: true,
          token: mockToken,
          message: 'Login successful!',
          user: {
            applicationId: mockAppId,
            email: mockEmail || 'user@example.com',
            mobileNumber: mockMobile || '9876543210',
            name: 'Test Candidate',
          },
        };
      } else {
        throw new Error('Invalid Application ID or Password. Please check your credentials.');
      }
    }

    try {
      const response = await apiService.post<LoginResponse>(
        '/api/auth/login',
        data
      );

      // Store token in localStorage if remember me is checked
      if (response.token && data.rememberMe) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('token', response.token);
      } else if (response.token) {
        sessionStorage.setItem('authToken', response.token);
        localStorage.setItem('token', response.token);
      }

      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    if (MOCK_MODE) {
      await delay(500);
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      localStorage.removeItem('token');
      return;
    }

    try {
      await apiService.post('/api/auth/logout', {});
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      localStorage.removeItem('token');
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  }

  /**
   * Verify token validity
   */
  static async verifyToken(token: string): Promise<boolean> {
    if (MOCK_MODE) {
      await delay(300);
      return token.startsWith('mock-jwt-token-');
    }

    try {
      const response = await apiService.post<{ valid: boolean }>(
        '/api/auth/verify-token',
        { token }
      );
      return response.valid;
    } catch (error) {
      return false;
    }
  }
}
