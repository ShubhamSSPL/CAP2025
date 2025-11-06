/**
 * Admission & Merit List Entity Models
 * Converted from PH2025 C# EntityModel classes
 */

// Choice Code Entry
export interface ChoiceCodeResult {
  PID: number;
  ApplicationID: string;
  ChoiceCode: string;
  PreferenceNo: number;
  InstituteName: string;
  CourseName: string;
  Year: string;
  IsLocked?: boolean;
}

// Merit List Verification
export interface MeritListVerification {
  PID: number;
  ApplicationID: string;
  CandidateName: string;
  MeritRank: number;
  Category: string;
  TotalMarks: number;
  Percentage: number;
  AllotmentRound: number;
  AllotedInstituteCode: string;
  AllotedInstituteName: string;
  AllotedCourseCode: string;
  AllotedCourseName: string;
  AllotmentStatus: string;
  VerificationStatus: string;
  VerifiedBy?: string;
  VerifiedOn?: Date | string;
  Remarks?: string;
}

// Course Information
export interface CourseInformation {
  CourseID: number;
  CourseCode: string;
  CourseName: string;
  DegreeType: string;
  Duration: number;
  TotalSeats: number;
  OpenSeats: number;
  OBCSeats: number;
  SCSeats: number;
  STSeats: number;
  VJNTSeats: number;
  NTSeats: number;
  SBCSeats: number;
  EWSSeats: number;
  TFWSSeats: number;
  MinoritySeats: number;
  PHSeats: number;
  DefenceSeats: number;
}

// Institute Summary
export interface InstituteSummary {
  InstituteID: number;
  InstituteCode: string;
  InstituteName: string;
  TotalCourses: number;
  TotalSeats: number;
  FilledSeats: number;
  VacantSeats: number;
  RegistrationCount: number;
  AllotmentCount: number;
  AdmissionCount: number;
}

// Seat Acceptance Fee Details
export interface SeatAcceptanceFeeDetails {
  TransactionID: number;
  ApplicationID: string;
  AllotmentRound: number;
  FeeAmount: number;
  TransactionDate: Date | string;
  PaymentMode: string;
  TransactionStatus: string;
  PaymentGatewayResponse?: string;
  ReceiptNo?: string;
}

// Admission Approval Fee Details
export interface AdmissionApprovalFeeDetails {
  TransactionID: number;
  ApplicationID: string;
  InstituteCode: string;
  CourseCode: string;
  FeeAmount: number;
  TransactionDate: Date | string;
  PaymentMode: string;
  TransactionStatus: string;
  PaymentGatewayResponse?: string;
  ReceiptNo?: string;
}

// Institute Fee Details
export interface InstituteFeeDetails {
  FeeID: number;
  InstituteID: number;
  CourseID: number;
  Year: string;
  TuitionFee: number;
  DevelopmentFee: number;
  OtherFee: number;
  TotalFee: number;
  IsActive: boolean;
}
