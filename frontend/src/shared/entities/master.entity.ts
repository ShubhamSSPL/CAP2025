/**
 * Master Data Entity Models
 * Converted from PH2025 C# EntityModel Master classes
 */

// Master District
export interface Master_District {
  DistrictID: number;
  DistrictName: string;
  StateID: number;
  StateName?: string;
  IsActive: boolean;
}

// Master Taluka
export interface Master_Taluka {
  TalukaID: number;
  TalukaName: string;
  DistrictID: number;
  DistrictName?: string;
  IsActive: boolean;
}

// Master Village
export interface Master_Village {
  VillageID: number;
  VillageName: string;
  TalukaID: number;
  TalukaName?: string;
  DistrictID?: number;
  DistrictName?: string;
  IsActive: boolean;
}

// Master Course
export interface Master_Course {
  CourseID: number;
  CourseName: string;
  CourseCode: string;
  DegreeType: string; // Pharmacy, Engineering, Medical
  Duration: number; // Years
  IsActive: boolean;
}

// Master Institute
export interface Master_Institute {
  InstituteID: number;
  InstituteName: string;
  InstituteCode: string;
  InstituteType: string; // Government, Private, Aided
  Address: string;
  City: string;
  DistrictID: number;
  District?: string;
  StateID: number;
  State?: string;
  Pincode: string;
  ContactNo: string;
  EmailID: string;
  IsActive: boolean;
}

// Master Home University
export interface Master_HomeUniversity {
  HomeUniversityID: number;
  HomeUniversityName: string;
  HomeUniversityCode: string;
  IsActive: boolean;
}

// Master Choice Code
export interface Master_ChoiceCode {
  ChoiceCodeID: number;
  ChoiceCode: string;
  InstituteID: number;
  InstituteName: string;
  CourseID: number;
  CourseName: string;
  Year: string;
  Intake: number;
  IsActive: boolean;
}

// Gender Master
export interface Gender {
  GenderID: number;
  GenderCode: string;
  GenderName: string;
  IsActive: boolean;
}

// Caste List
export interface CasteList {
  CasteID: number;
  CasteName: string;
  CategoryID: number;
  CategoryName?: string;
  IsActive: boolean;
}

// Dropdown Option Generic Type
export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
