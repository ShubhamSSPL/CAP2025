/**
 * Login Service
 * Handles login API calls
 */

import { apiService } from '@/shared/services/api/base.service';
import { LoginFormData, LoginResponse } from '../types/login.types';

export class LoginService {
  /**
   * Login with application ID and password
   */
  static async login(data: LoginFormData): Promise<LoginResponse> {
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
