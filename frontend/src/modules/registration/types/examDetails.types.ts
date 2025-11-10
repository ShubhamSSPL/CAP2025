/**
 * Exam Details Validation Types
 * For MHT-CET, JEE, NEET validation before registration
 */

export interface ExamDetailsForm {
  // Exam selection
  appearedForMHTCET: 'yes' | 'no' | null;
  appearedForNEET: 'yes' | 'no' | null;
  appearedForJEE: 'yes' | 'no' | null;

  // Candidate type
  isForeignNationalNRI: 'yes' | 'no' | null;
  isNEUTJKSSSCandidate: 'yes' | 'no' | null;

  // Qualifying exam
  qualifyingExam: 'HSC' | 'Diploma' | 'BSc' | null;

  // CET Details
  cetApplicationNumber?: string;
  cetRollNumber?: string;
  cetDOB?: string;

  // NEET Details
  neetApplicationNumber?: string;
  neetRollNumber?: string;
  neetDOB?: string;

  // Validated details (from API)
  validatedCandidateName?: string;
  validatedPhysicsMarks?: string;
  validatedChemistryMarks?: string;
  validatedMathsMarks?: string;
  validatedBiologyMarks?: string;
  validatedTotalMarks?: string;
  validatedPercentile?: string;
}

export interface ExamValidationResponse {
  success: boolean;
  message: string;
  candidateName?: string;
  physicsMarks?: string;
  chemistryMarks?: string;
  mathsMarks?: string;
  biologyMarks?: string;
  totalMarks?: string;
  percentile?: string;
  eligible?: boolean;
}

export interface ExamDetailsState {
  examDetails: Partial<ExamDetailsForm>;
  isValidating: boolean;
  isValidated: boolean;
  validationError: string | null;
  canProceedToRegistration: boolean;
}
