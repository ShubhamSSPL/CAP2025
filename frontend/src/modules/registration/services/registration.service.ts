/**
 * Registration Service
 * Handles all API calls for registration module
 * Currently using Mock API for development
 */

import { MockAPIService } from '@/shared/services/api/mock.service';
import {
  RegistrationFormData,
  RegistrationResponse,
  OTPVerificationRequest,
  OTPVerificationResponse,
  ResendOTPRequest,
  ResendOTPResponse,
} from '../types/registration.types';

export class RegistrationService {
  /**
   * Register new candidate
   */
  static async register(
    data: RegistrationFormData
  ): Promise<RegistrationResponse> {
    try {
      const response = await MockAPIService.register(data);
      return {
        success: response.success,
        applicationId: response.applicationId,
        message: response.message,
        mobileNumber: response.mobileNumber,
        email: response.email
      };
    } catch (error: any) {
      throw new Error(error.message || 'Registration failed');
    }
  }

  /**
   * Verify OTP sent to mobile/email
   */
  static async verifyOTP(
    data: OTPVerificationRequest
  ): Promise<OTPVerificationResponse> {
    try {
      const response = await MockAPIService.verifyOTP(data.applicationId, data.otp);
      return {
        success: response.success,
        message: response.message,
        verified: response.verified
      };
    } catch (error: any) {
      throw new Error(error.message || 'OTP verification failed');
    }
  }

  /**
   * Resend OTP
   */
  static async resendOTP(
    data: ResendOTPRequest
  ): Promise<ResendOTPResponse> {
    try {
      const response = await MockAPIService.resendOTP(data.applicationId, data.mobileNo);
      return {
        success: response.success,
        message: response.message,
        otpSent: true
      };
    } catch (error: any) {
      throw new Error(error.message || 'Resend OTP failed');
    }
  }

  /**
   * Login (for future use)
   */
  static async login(applicationId: string, password: string): Promise<any> {
    try {
      return await MockAPIService.login(applicationId, password);
    } catch (error: any) {
      throw new Error(error.message || 'Login failed');
    }
  }
}
