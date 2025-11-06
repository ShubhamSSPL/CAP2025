/**
 * Registration Entity Models
 * Converted from PH2025 C# EntityModel classes
 */

// Registration Details - Core registration information
export interface RegistrationDetails {
  PID: number;
  CandidateName: string;
  FatherName: string;
  MotherName: string;
  GenderCode: string;
  DOB: Date | string;
  ReligionID: number;
  RegionCode: string;
  MotherTongueID: number;
  AnnualFamilyIncomeID: number;
  AadhaarNumber?: string;
  NationalityID: number;
  CAddressLine1: string;
  CAddressLine2: string;
  CAddressLine3?: string;
  CAddress?: string;
  CStateID: number;
  CDistrictID: number;
  CTalukaID: number;
  CVillageID: number;
  CPincode: string;
  STDCode?: string;
  PhoneNo?: string;
  MobileNo: string;
  EMailID: string;
  HasBankAccount?: string;
  AccountNumber?: string;
  IFSCCode?: string;
}

// Personal Information - Extended profile with all details
export interface PersonalInformation {
  PID: number;
  ApplicationID: string;
  CandidateName: string;
  FatherName: string;
  MotherName: string;
  Gender: string;
  DOB: string;
  Religion: string;
  Region: string;
  MotherTongue: string;
  AnnualFamilyIncome: string;
  AadhaarNumber?: string;
  Nationality: string;

  // Communication Address
  CAddressLine1: string;
  CAddressLine2: string;
  CAddressLine3?: string;
  CAddress?: string;
  CState: string;
  CDistrict: string;
  CTaluka: string;
  CVillage: string;
  CPincode: string;
  STDCode?: string;
  PhoneNo?: string;
  MobileNo: string;
  EMailID: string;

  // Bank Details
  HasBankAccount?: string;
  AccountNumber?: string;
  IFSCCode?: string;

  // Candidature & Category
  CandidatureType?: string;
  FinalCandidatureType?: string;
  DocumentOf?: string;
  MothersName?: string;
  SSCDistrict?: string;
  HSCDistrict?: string;
  HSCTaluka?: string;
  HomeUniversity?: string;
  FinalHomeUniversity?: string;
  Category?: string;
  FinalCategory?: string;
  CasteNameForOpen?: string;
  AppliedForEWS?: string;
  FinalAppliedForEWS?: string;
  CasteName?: string;

  // Special Reservations
  PHType?: string;
  FinalPHType?: string;
  DefenceType?: string;
  FinalDefenceType?: string;
  IsOrphan?: string;
  FinalIsOrphan?: string;
  OrphanRegistrationNo?: string;
  OrphanHasRelative?: string;
  AppliedForMinoritySeats?: string;
  LinguisticMinorityDetails?: string;
  FinalLinguisticMinorityDetails?: string;
  ReligiousMinorityDetails?: string;
  FinalReligiousMinorityDetails?: string;

  // SSC Details
  SSCBoard?: string;
  SSCPassingYear?: string;
  SSCSeatNo?: string;
  SSCMathMarksObtained?: number;
  SSCMathMarksOutOf?: number;
  SSCMathPercentage?: number;
  SSCScienceMarksObtained?: number;
  SSCScienceMarksOutOf?: number;
  SSCSciencePercentage?: number;
  SSCEnglishMarksObtained?: number;
  SSCEnglishMarksOutOf?: number;
  SSCEnglishPercentage?: number;
  SSCTotalMarksObtained?: number;
  SSCTotalMarksOutOf?: number;
  SSCTotalPercentage?: number;

  // HSC Details
  QualifyingExam?: string;
  QualifyingExamPlace?: string;
  HSCBoard?: string;
  HSCPassingYear?: string;
  HSCSeatNo?: string;
  HSCPassingStatus?: string;
  HSCPhysicsMarksObtained?: number;
  HSCPhysicsMarksOutOf?: number;
  HSCPhysicsPercentage?: number;
  HSCChemistryMarksObtained?: number;
  HSCChemistryMarksOutOf?: number;
  HSCChemistryPercentage?: number;
  HSCMathMarksObtained?: number;
  HSCMathMarksOutOf?: number;
  HSCMathPercentage?: number;
  HSCSubject?: string;
  HSCSubjectMarksObtained?: number;
  HSCSubjectMarksOutOf?: number;
  HSCSubjectPercentage?: number;
  HSCEnglishMarksObtained?: number;
  HSCEnglishMarksOutOf?: number;
  HSCEnglishPercentage?: number;
  HSCTotalMarksObtained?: number;
  HSCTotalMarksOutOf?: number;
  HSCTotalPercentage?: number;
  HSCPCMPercentage?: number;
  HSCPMSPercentage?: number;
  HSCPlace?: string;
  HSCBioTechnologyMarksObtained?: number;
  HSCBioTechnologyMarksOutOf?: number;
  HSCBioTechnologyPercentage?: number;
  HSCPCSPercentage?: number;
  HSCVillage?: string;
  NameAsPerHSCResult?: string;

  // Diploma Details
  DiplomaMarksType?: string;
  AppearedForDiploma?: string;
  DiplomaTotalMarksObtained?: number;
  DiplomaTotalMarksOutOf?: number;
  DiplomaTotalPercentage?: number;

  // JEE Details
  AppearedForJEE?: string;
  JEERollNo?: string;
  JEEPhysicsScore?: number;
  JEEChemistryScore?: number;
  JEEMathScore?: number;
  JEETotalScore?: number;
  JEEPassingMonthYear?: string;

  // NEET Details
  AppearedForNEET?: string;
  NEETRollNo?: number;
  NEETPhysicsScore?: number;
  NEETChemistryScore?: number;
  NEETBiologyScore?: number;
  NEETTotalScore?: number;
  NEETCName?: string;

  // CET Details
  CETApplicationFormNo?: number;
  CETRollNo?: string;
  CETCandidateName?: string;
  CETPhysicsMarks?: string;
  CETChemistryMarks?: string;
  CETMathMarks?: string;
  CETBiologyMarks?: string;
  CETPCMTotalMarks?: string;
  CETPCBTotalMarks?: string;
  CETPCMBMAX?: string;

  // Fees & Other
  CETApplicationFee?: number;
  OnlineApplicationFee?: number;
  AppliedForTFWS?: string;
  FinalAppliedForTFWS?: string;

  // Metadata
  VersionNo?: number;
  LastModifiedOn?: Date | string;
  LastModifiedBy?: string;
  LastModifiedByIPAddress?: string;
  Comments?: string;
  FCRApplicationID?: string;
  DisplayFinalCategory?: string;
  DisplayFinalAppliedForEWS?: string;
}

// Qualification Details - Educational qualifications
export interface QualificationDetails {
  PID: number;

  // SSC Details
  SSCBoardID: number;
  OtherSSCBoard?: string;
  SSCPassingYear: string;
  SSCSeatNo: string;
  SSCMathMarksObtained: number;
  SSCMathMarksOutOf: number;
  SSCMathPercentage: number;
  SSCTotalMarksObtained: number;
  SSCTotalMarksOutOf: number;
  SSCTotalPercentage: number;

  // Qualifying Exam
  QualifyingExam: string;
  QualifyingExamPlace: string;

  // HSC Details
  HSCBoardID: number;
  OtherHSCBoard?: string;
  HSCPassingYear: string;
  HSCSeatNo: string;
  HSCPassingStatus: string;
  HSCPlace: string;

  // HSC Subject-wise Marks
  HSCPhysicsMarksObtained: number;
  HSCPhysicsMarksOutOf: number;
  HSCPhysicsPercentage: number;
  HSCChemistryMarksObtained: number;
  HSCChemistryMarksOutOf: number;
  HSCChemistryPercentage: number;
  HSCMathMarksObtained: number;
  HSCMathMarksOutOf: number;
  HSCMathPercentage: number;
  HSCSubjectID: number;
  HSCSubjectMarksObtained: number;
  HSCSubjectMarksOutOf: number;
  HSCSubjectPercentage: number;
  HSCBioTechnologyMarksObtained: number;
  HSCBioTechnologyMarksOutOf: number;
  HSCBioTechnologyPercentage: number;
  HSCEnglishMarksObtained: number;
  HSCEnglishMarksOutOf: number;
  HSCEnglishPercentage: number;

  // HSC Total & Combinations
  HSCTotalMarksObtained: number;
  HSCTotalMarksOutOf: number;
  HSCTotalPercentage: number;
  HSCPCSPercentage: number;
  HSCPMSPercentage: number;

  // Diploma
  AppearedForDiploma: string;
  DiplomaMarksType: string;
  DiplomaTotalMarksObtained: number;
  DiplomaTotalMarksOutOf: number;
  DiplomaTotalPercentage: number;

  // Name Matching
  NameAsPerHSCResult: string;
  IsResultFetched?: string;
  HSCQDDOB?: Date | string | null;
  HSCMotherName?: string;
}

// Document Details - Uploaded documents tracking
export interface DocumentDetails {
  DocumentID: string;
  DocumentName: string;
  IsSubmittedAtFC?: string;
  IsSubmittedAtARC?: string;
  IsUploaded?: string;
  AbsoluteFilePath?: string;
}

// Special Reservation Details - PH, Defence, Orphan, Minority
export interface SpecialReservationDetails {
  PID: number;
  PHTypeID: number;
  DefenceTypeID: number;
  IsOrphan: string;
  AppliedForTFWS: string;
  OrphanRegistrationNo?: string;
  OrphanHasRelative?: string;
  AppliedForMinoritySeats: string;
  LinguisticMinorityID: number;
  ReligiousMinorityID: number;
}

// Home University and Category Details
export interface HomeUniversityAndCategoryDetails {
  PID: number;
  DocumentForTypeACode: string;
  DocumentOfCode: string;
  MothersName: string;
  SSCDistrictID: number;
  HSCDistrictID: number;
  HSCTalukaID: number;
  HomeUniversityID: number;
  CategoryID: number;
  CasteNameForOpen?: string;
  CasteID: number;
  AppliedForEWS: string;

  // Caste Validity Certificate
  CasteValidityStatus: string;
  CVCApplicationNo?: string;
  CVCApplicationDate?: string;
  CVCAuthority?: string;
  CVCName?: string;
  CCNumber?: string;
  CVCDistrict?: string;

  // Non-Creamy Layer Certificate
  NCLStatus: string;
  NCLApplicationNo?: string;
  NCLApplicationDate?: string;
  NCLAuthority?: string;

  // EWS Certificate
  EWSStatus: string;
  EWSApplicationNo?: string;
  EWSApplicationDate?: string;
  EWSDistrict?: number;
  EWSTaluka?: number;
  HSCVillageID?: number;
}

// NEET Details - For medical/pharmacy admissions
export interface NEETDetails {
  PID: number;
  AppearedForNEET: string;
  NEETRollNo: number;
  NEETPhysicsScore: number;
  NEETChemistryScore: number;
  NEETBiologyScore: number;
  NEETTotalScore: number;
  NameAsPerNEET: string;
  NameMatchingFlag?: string;
}
