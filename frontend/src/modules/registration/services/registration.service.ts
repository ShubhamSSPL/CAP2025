/**
 * Registration Service
 * Handles all API calls for registration module
 * MOCK MODE: Works with dummy data when API is not available
 */

import { apiService } from '@/shared/services/api/base.service';
import {
  RegistrationFormData,
  RegistrationResponse,
  OTPVerificationRequest,
  OTPVerificationResponse,
  ResendOTPRequest,
  ResendOTPResponse,
  ExamValidationRequest,
  ExamValidationResponse,
} from '../types/registration.types';

// Mock mode - set to true to use dummy data without backend
const MOCK_MODE = true;

// Helper to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to generate random application ID
const generateAppId = () => {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `APP-${randomNum}`;
};

export class RegistrationService {
  /**
   * Validate exam details (NEET/MHT-CET)
   */
  static async validateExam(
    data: ExamValidationRequest
  ): Promise<ExamValidationResponse> {
    if (MOCK_MODE) {
      await delay(800);
      return {
        success: true,
        message: 'Exam details validated successfully',
        isValid: true,
      };
    }

    return apiService.post<ExamValidationResponse>(
      '/api/registration/validate-exam',
      data
    );
  }

  /**
   * Register new candidate
   */
  static async register(
    data: RegistrationFormData
  ): Promise<RegistrationResponse> {
    if (MOCK_MODE) {
      await delay(1500);

      const applicationId = generateAppId();

      // Store in localStorage for later use
      localStorage.setItem('mockApplicationId', applicationId);
      localStorage.setItem('mockMobileNumber', data.txtMobileNo);
      localStorage.setItem('mockEmail', data.txtEMailID);
      localStorage.setItem('mockPassword', data.txtPassword);

      return {
        success: true,
        message: 'Registration successful! OTP sent to your mobile and email.',
        applicationId,
        mobileNumber: data.txtMobileNo,
        email: data.txtEMailID,
      };
    }

    return apiService.post<RegistrationResponse>(
      '/api/registration/register',
      data
    );
  }

  /**
   * Verify OTP sent to mobile/email
   */
  static async verifyOTP(
    data: OTPVerificationRequest
  ): Promise<OTPVerificationResponse> {
    if (MOCK_MODE) {
      await delay(1000);

      // Accept any 6-digit OTP for demo
      if (data.otp.length === 6) {
        return {
          success: true,
          message: 'OTP verified successfully!',
          isVerified: true,
        };
      } else {
        throw new Error('Invalid OTP. Please enter a valid 6-digit OTP.');
      }
    }

    return apiService.post<OTPVerificationResponse>(
      '/api/registration/verify-otp',
      data
    );
  }

  /**
   * Resend OTP
   */
  static async resendOTP(
    data: ResendOTPRequest
  ): Promise<ResendOTPResponse> {
    if (MOCK_MODE) {
      await delay(800);

      return {
        success: true,
        message: 'OTP resent successfully to your mobile and email!',
        otpSent: true,
      };
    }

    return apiService.post<ResendOTPResponse>(
      '/api/registration/resend-otp',
      data
    );
  }

  /**
   * Check if mobile number already registered
   */
  static async checkDuplicate(mobileNo: string): Promise<boolean> {
    if (MOCK_MODE) {
      await delay(500);
      return false; // Always return false in mock mode
    }

    const response = await apiService.get<{ exists: boolean }>(
      `/api/registration/check-duplicate?mobile=${mobileNo}`
    );
    return response.exists;
  }

  /**
   * Check if email already registered
   */
  static async checkEmailDuplicate(email: string): Promise<boolean> {
    if (MOCK_MODE) {
      await delay(500);
      return false; // Always return false in mock mode
    }

    const response = await apiService.get<{ exists: boolean }>(
      `/api/registration/check-duplicate?email=${email}`
    );
    return response.exists;
  }
}
