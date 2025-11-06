/**
 * Login Service
 * Handles login API calls
 */

import { BaseService } from '@/shared/services/base.service';
import { LoginFormData, LoginResponse } from '../types/login.types';

class LoginServiceClass extends BaseService {
  constructor() {
    super('/auth');
  }

  /**
   * Login with application ID and password
   */
  async login(data: LoginFormData): Promise<LoginResponse> {
    try {
      const response = await this.post<LoginResponse>('/login', data);

      // Store token in localStorage if remember me is checked
      if (response.token && data.rememberMe) {
        localStorage.setItem('authToken', response.token);
      } else if (response.token) {
        sessionStorage.setItem('authToken', response.token);
      }

      return response;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await this.post('/logout', {});
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  }

  /**
   * Verify token validity
   */
  async verifyToken(token: string): Promise<boolean> {
    try {
      const response = await this.post<{ valid: boolean }>('/verify-token', {
        token,
      });
      return response.valid;
    } catch (error) {
      return false;
    }
  }
}

export const LoginService = new LoginServiceClass();
