/**
 * Application Form Types
 * Type definitions for the 10-step application form
 */

export interface PersonalDetailsForm {
  fullName: string;
  nameMarathi: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  placeOfBirth: string;
  religion: string;
  caste: string;
  subCaste: string;
  nationality: string;
  domicile: string;
  aadharNumber: string;
  panNumber?: string;
  mobileNumber: string;
  alternateNumber?: string;
  email: string;
  alternateEmail?: string;
}

export interface FamilyDetailsForm {
  fatherName: string;
  fatherNameMarathi: string;
  fatherOccupation: string;
  fatherIncome: string;
  motherName: string;
  motherNameMarathi: string;
  motherOccupation: string;
  motherIncome: string;
  guardianName?: string;
  guardianRelation?: string;
  guardianMobile?: string;
  annualFamilyIncome: string;
  incomeCertificateNumber?: string;
}

export interface CategoryDetailsForm {
  category: 'OPEN' | 'OBC' | 'SC' | 'ST' | 'NT-A' | 'NT-B' | 'NT-C' | 'NT-D' | 'SBC' | 'VJ/DT-A' | 'EWS';
  casteCertificateNumber?: string;
  casteCertificateIssueDate?: string;
  casteCertificateIssuingAuthority?: string;
  validityCertificateNumber?: string;
  nonCreamyLayerCertificate?: string;
  isMinority: boolean;
  minorityType?: string;
  isDifferentlyAbled: boolean;
  disabilityType?: string;
  disabilityPercentage?: string;
  isDefencePersonDependant: boolean;
  defenceCategory?: string;
  isOrphan: boolean;
  isSportsQuota: boolean;
  sportsType?: string;
}

export interface QualifyingExamDetailsForm {
  examName: 'MHT-CET' | 'JEE-Main' | 'NEET' | 'Other';
  examRollNumber: string;
  examYear: string;
  physicsMarks?: string;
  chemistryMarks?: string;
  mathematicsMarks?: string;
  biologyMarks?: string;
  totalMarks: string;
  percentile?: string;
  rank?: string;
  allIndiaRank?: string;
  stateRank?: string;
}

export interface HSCDetailsForm {
  boardName: string;
  schoolName: string;
  schoolAddress: string;
  passingYear: string;
  seatNumber: string;
  monthOfPassing: string;
  physicsMarks: string;
  chemistryMarks: string;
  mathematicsMarks: string;
  biologyMarks?: string;
  totalMarks: string;
  percentage: string;
  gradeObtained?: string;
  attemptNumber: string;
}

export interface SSCDetailsForm {
  boardName: string;
  schoolName: string;
  schoolAddress: string;
  passingYear: string;
  seatNumber: string;
  monthOfPassing: string;
  totalMarks: string;
  percentage: string;
  gradeObtained?: string;
}

export interface AdditionalDetailsForm {
  hasGapInEducation: boolean;
  gapYears?: string;
  gapReason?: string;
  isHostelRequired: boolean;
  hasScholarship: boolean;
  scholarshipName?: string;
  scholarshipAmount?: string;
  extraCurricularActivities?: string;
  achievements?: string;
  languagesKnown: string[];
  bloodGroup?: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  emergencyContactRelation: string;
}

export interface AddressDetailsForm {
  // Permanent Address
  permanentAddressLine1: string;
  permanentAddressLine2?: string;
  permanentCity: string;
  permanentDistrict: string;
  permanentState: string;
  permanentPincode: string;
  permanentTaluka: string;

  // Correspondence Address
  isSameAsPermanent: boolean;
  correspondenceAddressLine1?: string;
  correspondenceAddressLine2?: string;
  correspondenceCity?: string;
  correspondenceDistrict?: string;
  correspondenceState?: string;
  correspondencePincode?: string;
  correspondenceTaluka?: string;
}

export interface DocumentUploadForm {
  // Photo and Signature
  photograph?: File | string;
  signature?: File | string;

  // Educational Documents
  sscMarksheet?: File | string;
  hscMarksheet?: File | string;
  leavingCertificate?: File | string;

  // Entrance Exam
  cetScorecard?: File | string;

  // Category Documents
  casteCertificate?: File | string;
  casteValidityCertificate?: File | string;
  nonCreamyLayerCertificate?: File | string;
  ewsCertificate?: File | string;

  // Other Documents
  domicileCertificate?: File | string;
  incomeCertificate?: File | string;
  aadharCard?: File | string;
  disabilityCertificate?: File | string;
  gapCertificate?: File | string;
}

export interface ApplicationFormState {
  currentStep: number;
  personalDetails: Partial<PersonalDetailsForm>;
  familyDetails: Partial<FamilyDetailsForm>;
  categoryDetails: Partial<CategoryDetailsForm>;
  qualifyingExamDetails: Partial<QualifyingExamDetailsForm>;
  hscDetails: Partial<HSCDetailsForm>;
  sscDetails: Partial<SSCDetailsForm>;
  additionalDetails: Partial<AdditionalDetailsForm>;
  addressDetails: Partial<AddressDetailsForm>;
  documentUpload: Partial<DocumentUploadForm>;
  isCompleted: boolean;
  applicationId?: string;
  submittedAt?: string;
}

export interface StepConfig {
  id: number;
  title: string;
  description: string;
  icon: string;
  isCompleted: boolean;
  isActive: boolean;
}
