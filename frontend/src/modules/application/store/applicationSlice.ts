/**
 * Application Form Redux Slice
 * State management for the 10-step application form
 */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  ApplicationFormState,
  PersonalDetailsForm,
  FamilyDetailsForm,
  CategoryDetailsForm,
  QualifyingExamDetailsForm,
  HSCDetailsForm,
  SSCDetailsForm,
  AdditionalDetailsForm,
  AddressDetailsForm,
  DocumentUploadForm,
} from '../types/application.types';

const initialState: ApplicationFormState = {
  currentStep: 1,
  personalDetails: {},
  familyDetails: {},
  categoryDetails: {},
  qualifyingExamDetails: {},
  hscDetails: {},
  sscDetails: {},
  additionalDetails: {},
  addressDetails: {},
  documentUpload: {},
  isCompleted: false,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    // Navigation
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 10) {
        state.currentStep += 1;
      }
    },
    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },

    // Step-wise form data updates
    updatePersonalDetails: (state, action: PayloadAction<Partial<PersonalDetailsForm>>) => {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    updateFamilyDetails: (state, action: PayloadAction<Partial<FamilyDetailsForm>>) => {
      state.familyDetails = { ...state.familyDetails, ...action.payload };
    },
    updateCategoryDetails: (state, action: PayloadAction<Partial<CategoryDetailsForm>>) => {
      state.categoryDetails = { ...state.categoryDetails, ...action.payload };
    },
    updateQualifyingExamDetails: (state, action: PayloadAction<Partial<QualifyingExamDetailsForm>>) => {
      state.qualifyingExamDetails = { ...state.qualifyingExamDetails, ...action.payload };
    },
    updateHSCDetails: (state, action: PayloadAction<Partial<HSCDetailsForm>>) => {
      state.hscDetails = { ...state.hscDetails, ...action.payload };
    },
    updateSSCDetails: (state, action: PayloadAction<Partial<SSCDetailsForm>>) => {
      state.sscDetails = { ...state.sscDetails, ...action.payload };
    },
    updateAdditionalDetails: (state, action: PayloadAction<Partial<AdditionalDetailsForm>>) => {
      state.additionalDetails = { ...state.additionalDetails, ...action.payload };
    },
    updateAddressDetails: (state, action: PayloadAction<Partial<AddressDetailsForm>>) => {
      state.addressDetails = { ...state.addressDetails, ...action.payload };
    },
    updateDocumentUpload: (state, action: PayloadAction<Partial<DocumentUploadForm>>) => {
      state.documentUpload = { ...state.documentUpload, ...action.payload };
    },

    // Application submission
    markApplicationComplete: (state, action: PayloadAction<{ applicationId: string }>) => {
      state.isCompleted = true;
      state.applicationId = action.payload.applicationId;
      state.submittedAt = new Date().toISOString();
    },

    // Reset form
    resetApplication: () => initialState,

    // Load saved application (for edit mode)
    loadApplication: (_state, action: PayloadAction<ApplicationFormState>) => {
      return { ...action.payload };
    },
  },
});

export const {
  setCurrentStep,
  nextStep,
  previousStep,
  updatePersonalDetails,
  updateFamilyDetails,
  updateCategoryDetails,
  updateQualifyingExamDetails,
  updateHSCDetails,
  updateSSCDetails,
  updateAdditionalDetails,
  updateAddressDetails,
  updateDocumentUpload,
  markApplicationComplete,
  resetApplication,
  loadApplication,
} = applicationSlice.actions;

export default applicationSlice.reducer;
