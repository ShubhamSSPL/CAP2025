/**
 * Entity Models Index
 * Central export for all entity types
 */

// Registration Entities
export type {
  RegistrationDetails,
  PersonalInformation,
  QualificationDetails,
  DocumentDetails,
  SpecialReservationDetails,
  HomeUniversityAndCategoryDetails,
  NEETDetails,
} from './registration.entity';

// Master Data Entities
export type {
  Master_District,
  Master_Taluka,
  Master_Village,
  Master_Course,
  Master_Institute,
  Master_HomeUniversity,
  Master_ChoiceCode,
  Gender,
  CasteList,
  DropdownOption,
} from './master.entity';

// Admission Entities
export type {
  ChoiceCodeResult,
  MeritListVerification,
  CourseInformation,
  InstituteSummary,
  SeatAcceptanceFeeDetails,
  AdmissionApprovalFeeDetails,
  InstituteFeeDetails,
} from './admission.entity';

// Common Entities
export type {
  SessionData,
  ResponseCommon,
  Notes,
  SMSTemplate,
  ClientTransaction,
  RpOrder,
  RpPayment,
  RpSettlement,
  RpRefund,
  RpRefundDisplay,
  DiscrepancyDetails,
  SelfVerification,
  ResponseCasteCertificate,
  ResponseNclCertificate,
  ResponseIncome,
  ResponseAgeNationalityDomicile,
  ResponseDisabilityCertificate,
  ResponseCasteValidity,
  MSGGetway,
} from './common.entity';

// Institute & Profile Entities
export type {
  InstituteProfile,
  ARCProfile,
  AFCProfile,
  MVSOProfile,
  UpdateInstituteFormPortal,
  DashboardROAdminInstitute,
} from './institute.entity';
