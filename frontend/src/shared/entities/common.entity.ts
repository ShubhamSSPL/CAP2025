/**
 * Common Entity Models
 * Converted from PH2025 C# EntityModel classes
 */

// Session Data - User session information
export interface SessionData {
  PID: number;
  ApplicationID: string;
  CandidateName: string;
  MobileNo: string;
  EmailID: string;
  UserType: string; // Candidate, Institute, ARC, Admin
  SessionToken: string;
  LoginTime: Date | string;
  LastActivityTime: Date | string;
  IPAddress: string;
  IsActive: boolean;
}

// Response Common - Generic API response
export interface ResponseCommon<T = any> {
  Success: boolean;
  Message: string;
  Data?: T;
  ErrorCode?: string;
  ErrorDetails?: string;
}

// Notes - System notes/messages
export interface Notes {
  NoteID: number;
  NoteTitle: string;
  NoteContent: string;
  NoteType: string; // Information, Warning, Important
  IsMarquee: boolean;
  DisplayFrom: Date | string;
  DisplayTo: Date | string;
  IsActive: boolean;
  CreatedBy: string;
  CreatedOn: Date | string;
}

// SMS Template
export interface SMSTemplate {
  TemplateID: number;
  TemplateName: string;
  TemplateCode: string;
  TemplateContent: string;
  Placeholders: string; // Comma-separated list
  IsActive: boolean;
}

// Client Transaction - Payment gateway transactions
export interface ClientTransaction {
  TransactionID: number;
  ApplicationID: string;
  TransactionType: string; // Registration, SeatAcceptance, AdmissionApproval
  Amount: number;
  TransactionDate: Date | string;
  PaymentMode: string; // Online, DD, Cash
  PaymentGateway?: string;
  GatewayTransactionID?: string;
  GatewayResponse?: string;
  TransactionStatus: string; // Success, Failed, Pending
  ReceiptNo?: string;
  Remarks?: string;
}

// Razorpay Order
export interface RpOrder {
  OrderID: string;
  ApplicationID: string;
  Amount: number;
  Currency: string;
  OrderStatus: string;
  CreatedAt: Date | string;
  Receipt?: string;
  Notes?: string;
}

// Razorpay Payment
export interface RpPayment {
  PaymentID: string;
  OrderID: string;
  Amount: number;
  Currency: string;
  Status: string;
  Method: string;
  Captured: boolean;
  Email: string;
  Contact: string;
  CreatedAt: Date | string;
}

// Razorpay Settlement
export interface RpSettlement {
  SettlementID: string;
  Amount: number;
  Status: string;
  UTRNo: string;
  SettledAt: Date | string;
}

// Razorpay Refund
export interface RpRefund {
  RefundID: string;
  PaymentID: string;
  Amount: number;
  Currency: string;
  Status: string;
  CreatedAt: Date | string;
  ProcessedAt?: Date | string;
}

// Razorpay Refund Display
export interface RpRefundDisplay {
  RefundID: string;
  ApplicationID: string;
  CandidateName: string;
  Amount: number;
  Status: string;
  RefundReason: string;
  RefundDate: Date | string;
  ProcessedBy?: string;
}

// Discrepancy Details - Document/data verification issues
export interface DiscrepancyDetails {
  DiscrepancyID: number;
  ApplicationID: string;
  DiscrepancyType: string;
  DiscrepancyDescription: string;
  ReportedBy: string;
  ReportedOn: Date | string;
  Status: string; // Pending, Resolved, Rejected
  ResolvedBy?: string;
  ResolvedOn?: Date | string;
  Resolution?: string;
}

// Self Verification - Candidate self-declaration
export interface SelfVerification {
  PID: number;
  ApplicationID: string;
  IsSelfVerified: boolean;
  VerificationDate?: Date | string;
  IPAddress?: string;
  DeclarationText: string;
}

// API Response Types for Certificate Verification
export interface ResponseCasteCertificate {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  CasteName: string;
  IssueDate: string;
  IssuingAuthority: string;
  Message: string;
}

export interface ResponseNclCertificate {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  IssueDate: string;
  IssuingAuthority: string;
  ValidityDate: string;
  Message: string;
}

export interface ResponseIncome {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  AnnualIncome: number;
  IssueDate: string;
  IssuingAuthority: string;
  Message: string;
}

export interface ResponseAgeNationalityDomicile {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  DOB: string;
  Nationality: string;
  DomicileState: string;
  Message: string;
}

export interface ResponseDisabilityCertificate {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  DisabilityType: string;
  DisabilityPercentage: number;
  IssueDate: string;
  IssuingAuthority: string;
  Message: string;
}

export interface ResponseCasteValidity {
  IsValid: boolean;
  ApplicationNo: string;
  CandidateName: string;
  CasteName: string;
  ValidityStatus: string;
  Message: string;
}

// MSG Gateway - SMS/Email sending interface
export interface MSGGetway {
  MessageID: number;
  RecipientType: string; // Mobile, Email
  RecipientValue: string; // Mobile number or email address
  MessageContent: string;
  TemplateCode?: string;
  Status: string; // Sent, Failed, Pending
  SentOn?: Date | string;
  DeliveredOn?: Date | string;
  FailureReason?: string;
}
