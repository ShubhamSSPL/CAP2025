/**
 * Login Module Types
 * Type definitions for login functionality
 */

export interface LoginFormData {
  applicationId: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
  user?: {
    applicationId: string;
    email: string;
    mobileNumber: string;
    name: string;
  };
}

export interface LoginState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  user: LoginResponse['user'] | null;
  token: string | null;
}
