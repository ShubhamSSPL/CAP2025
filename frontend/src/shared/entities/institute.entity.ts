/**
 * Institute & Profile Entity Models
 * Converted from PH2025 C# EntityModel classes
 */

// Institute Profile - Complete institute details
export interface InstituteProfile {
  InstituteID: number;
  InstituteCode: string;
  InstituteName: string;
  InstituteNameMarathi: string;
  InstituteType: string; // Government, Private, Aided
  UniversityID: number;
  UniversityName?: string;

  // Address Details
  AddressLine1: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City: string;
  DistrictID: number;
  District?: string;
  StateID: number;
  State?: string;
  Pincode: string;

  // Contact Details
  ContactNo: string;
  AlternateContactNo?: string;
  EmailID: string;
  WebsiteURL?: string;

  // Registration Details
  EstablishmentYear: number;
  RegistrationNo: string;
  AITECode?: string; // For Engineering
  PCICode?: string; // For Pharmacy
  MCICode?: string; // For Medical

  // Infrastructure
  TotalArea: number; // in sq.ft
  BuildingArea: number;
  LibraryArea: number;
  LabArea: number;

  // Facilities
  HasHostel: boolean;
  BoysHostelCapacity?: number;
  GirlsHostelCapacity?: number;
  HasLibrary: boolean;
  LibraryBooks?: number;
  HasLabs: boolean;
  NumberOfLabs?: number;
  HasPlayground: boolean;

  // Bank Details
  BankName: string;
  BranchName: string;
  AccountNo: string;
  IFSCCode: string;

  // Status
  IsActive: boolean;
  IsVerified: boolean;
  VerifiedBy?: string;
  VerifiedOn?: Date | string;

  // Login Credentials
  Username: string;
  Password?: string; // Hashed
  LastLogin?: Date | string;

  // Metadata
  CreatedBy: string;
  CreatedOn: Date | string;
  ModifiedBy?: string;
  ModifiedOn?: Date | string;
}

// ARC Profile - Admission Regulating Committee member
export interface ARCProfile {
  ARCID: number;
  ARCCode: string;
  Name: string;
  Designation: string;
  Department: string;

  // Contact Details
  MobileNo: string;
  AlternateNo?: string;
  EmailID: string;

  // Address
  AddressLine1: string;
  AddressLine2?: string;
  City: string;
  DistrictID: number;
  District?: string;
  StateID: number;
  State?: string;
  Pincode: string;

  // Role & Permissions
  Role: string; // Chairman, Member, Coordinator
  Permissions: string; // JSON string of permissions
  AssignedRegion?: string;
  AssignedDistricts?: string; // Comma-separated district IDs

  // Login Credentials
  Username: string;
  Password?: string; // Hashed
  LastLogin?: Date | string;

  // Status
  IsActive: boolean;

  // Metadata
  CreatedBy: string;
  CreatedOn: Date | string;
  ModifiedBy?: string;
  ModifiedOn?: Date | string;
}

// AFC Profile - Admission Facilitation Center
export interface AFCProfile {
  AFCID: number;
  AFCCode: string;
  AFCName: string;

  // Location
  AddressLine1: string;
  AddressLine2?: string;
  City: string;
  DistrictID: number;
  District?: string;
  StateID: number;
  State?: string;
  Pincode: string;

  // Contact Details
  ContactNo: string;
  AlternateContactNo?: string;
  EmailID: string;

  // Coordinator Details
  CoordinatorName: string;
  CoordinatorMobile: string;
  CoordinatorEmail: string;

  // Capacity
  MaxCandidatesPerDay: number;
  OperatingHours: string; // e.g., "9:00 AM - 6:00 PM"

  // Status
  IsActive: boolean;
  IsOperational: boolean;

  // Login Credentials
  Username: string;
  Password?: string; // Hashed
  LastLogin?: Date | string;

  // Metadata
  CreatedBy: string;
  CreatedOn: Date | string;
  ModifiedBy?: string;
  ModifiedOn?: Date | string;
}

// MVSO Profile - Maharashtra Vikas Shakha Officer
export interface MVSOProfile {
  MVSOID: number;
  MVSOCode: string;
  Name: string;
  Designation: string;

  // Contact Details
  MobileNo: string;
  AlternateNo?: string;
  EmailID: string;

  // Office Details
  OfficeName: string;
  OfficeAddress: string;
  City: string;
  DistrictID: number;
  District?: string;
  StateID: number;
  State?: string;
  Pincode: string;

  // Jurisdiction
  AssignedRegion: string;
  AssignedDistricts: string; // Comma-separated district IDs

  // Login Credentials
  Username: string;
  Password?: string; // Hashed
  LastLogin?: Date | string;

  // Status
  IsActive: boolean;

  // Metadata
  CreatedBy: string;
  CreatedOn: Date | string;
  ModifiedBy?: string;
  ModifiedOn?: Date | string;
}

// Update Institute From Portal
export interface UpdateInstituteFormPortal {
  InstituteID: number;
  UpdateType: string; // CourseUpdate, SeatUpdate, FeeUpdate
  UpdateData: string; // JSON string
  RequestedBy: string;
  RequestedOn: Date | string;
  Status: string; // Pending, Approved, Rejected
  ApprovedBy?: string;
  ApprovedOn?: Date | string;
  Remarks?: string;
}

// Dashboard RO Admin Institute - Regional Officer dashboard data
export interface DashboardROAdminInstitute {
  DistrictID: number;
  DistrictName: string;
  TotalInstitutes: number;
  ActiveInstitutes: number;
  InactiveInstitutes: number;
  TotalSeats: number;
  FilledSeats: number;
  VacantSeats: number;
  TotalApplications: number;
  PendingVerifications: number;
  ApprovedApplications: number;
  RejectedApplications: number;
}
