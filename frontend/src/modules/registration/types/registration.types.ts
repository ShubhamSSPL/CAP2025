/**
 * Registration Module Types
 * Exact field names from PH2025 Registration Form
 */

// Registration Form Data - Exact field names from PH2025
export interface RegistrationFormData {
  // Personal Details
  txtCandidateName: string; // Candidate's Full Name (As appeared on HSC Marksheet)
  txtFatherName: string; // Father's Name
  txtMotherName: string; // Mother's Name
  ddlGender: string; // Gender
  ddlGenderre: string; // Confirm Gender
  txtDOB: string; // Date of Birth (DD/MM/YYYY)
  txtDOBC: string; // Confirm Date of Birth
  ddlReligion: string; // Religion
  ddlRegion: string; // Region
  ddlAnnualFamilyIncome: string; // Annual Family Income
  ddlMotherTongue: string; // Mother Tongue
  ddlNationality: string; // Nationality

  // Communication Details
  txtCAdressLine1: string; // Address Line 1
  txtCAdressLine2: string; // Address Line 2
  txtCAdressLine3?: string; // Address Line 3 (optional)
  ddlCState: string; // State
  ddlCDistrict: string; // District
  ddlCTaluka: string; // Taluka
  ddlCVillage: string; // Village
  txtCPincode: string; // PIN Code (6 digits)
  txtSTDCode?: string; // STD Code (optional, 5 digits)
  txtPhoneNo?: string; // Phone Number (optional, 8 digits)
  txtMobileNo: string; // Mobile No (10 digits, required for OTP)
  txtEMailID: string; // E-Mail ID

  // Password
  txtPassword: string; // Password (8-13 chars, special rules)
  txtConfirmPassword: string; // Confirm Password
  txtSecurityPin: string; // Captcha
}

// Dropdown Options
export interface DropdownOption {
  value: string;
  label: string;
}

// API Response Types
export interface RegistrationResponse {
  success: boolean;
  message: string;
  applicationId?: string;
  candidateId?: string;
}

export interface OTPVerificationRequest {
  applicationId: string;
  otp: string;
}

export interface OTPVerificationResponse {
  success: boolean;
  message: string;
  verified: boolean;
}

export interface ResendOTPRequest {
  applicationId: string;
  mobileNo: string;
}

export interface ResendOTPResponse {
  success: boolean;
  message: string;
}

// Redux State
export interface RegistrationState {
  formData: Partial<RegistrationFormData>;
  applicationId: string | null;
  currentStep: 'form' | 'otp' | 'success';

  // Loading states
  isRegistering: boolean;
  isVerifyingOTP: boolean;
  isResendingOTP: boolean;

  // Error states
  registrationError: string | null;
  otpError: string | null;

  // OTP management
  otpSent: boolean;
  otpResendTimer: number; // seconds remaining
  otpResendCount: number; // max 3 attempts

  // Success data
  mobileNumber: string | null;
  email: string | null;
}

// Dropdown data for form (these would come from API in real implementation)
export interface FormDropdownData {
  genderOptions: DropdownOption[];
  religionOptions: DropdownOption[];
  regionOptions: DropdownOption[];
  annualIncomeOptions: DropdownOption[];
  motherTongueOptions: DropdownOption[];
  nationalityOptions: DropdownOption[];
  stateOptions: DropdownOption[];
  districtOptions: DropdownOption[];
  talukaOptions: DropdownOption[];
  villageOptions: DropdownOption[];
}

// Master Data Types
export interface State {
  id: string;
  name: string;
  code: string;
}

export interface District {
  id: string;
  stateId: string;
  name: string;
  code: string;
}

export interface Taluka {
  id: string;
  districtId: string;
  name: string;
  code: string;
}

export interface Village {
  id: string;
  talukaId: string;
  name: string;
  code: string;
}
