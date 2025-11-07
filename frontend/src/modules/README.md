# CAP 2025 Modules

This directory contains all the application modules for the Centralised Admission Process (CAP) 2025 system.

## Module Structure

### ✅ Implemented Modules:

1. **registration** - New candidate registration with exam validation
   - Exam details validation (MHT-CET/NEET)
   - Registration form
   - OTP verification
   - Success confirmation

2. **login** - Authentication system
   - Application ID + Password login
   - Redux state management
   - Token management

3. **application** - 10-Step application form
   - Personal details
   - Family details
   - Category details
   - Educational qualifications (SSC/HSC)
   - Document upload
   - Preview & submit

### 📋 Planned Modules (To Be Implemented):

4. **admin** - Admin panel for CET Cell staff
   - Dashboard
   - Candidate management
   - Reports & analytics

5. **verification** (E-Scrutiny) - Document verification
   - E-Scrutiny allocation
   - Document review
   - Approve/Reject applications
   - Deficiency management

6. **merit-list** - Merit list generation
   - Calculate merit based on 21 parameters
   - Category-wise lists (OPEN, OBC, SC, ST, etc.)
   - Tie-breaker rules
   - Publish merit lists

7. **option-form** - Seat preference selection
   - Select up to 300 institute/course preferences
   - Drag-and-drop ordering
   - Search & filter institutes
   - Lock/unlock option form

8. **payment** - Fee payment integration
   - Razorpay gateway integration
   - Fee calculation
   - Payment status tracking
   - Receipt generation

9. **cap-rounds** - CAP round allotments
   - round1/
   - round2/
   - round3/
   - Seat allotment
   - Acceptance/rejection
   - Reporting to institutes

10. **candidate-account-recovery** - Password/ID recovery
    - Forgot password
    - Forgot application ID
    - Security questions

11. **e-scrutiny** - E-Scrutiny center management
    - Center allocation
    - Document verification slots
    - Physical verification booking

12. **institute** - Institute management
    - Institute login
    - Seat matrix
    - Admitted candidate management
    - Reporting

## Flow Sequence

```
1. Homepage
   ↓
2. Exam Validation (MHT-CET/NEET details)
   ↓
3. Registration Form
   ↓
4. OTP Verification
   ↓
5. Registration Success
   ↓
6. Login
   ↓
7. Dashboard
   ↓
8. Fill Application Form (10 steps)
   ↓
9. Upload Documents
   ↓
10. Submit Application
    ↓
11. E-Scrutiny / Document Verification
    ↓
12. Merit List Generation
    ↓
13. Fill Option Form (Preferences)
    ↓
14. Pay Fees
    ↓
15. CAP Round 1 Allotment
    ↓
16. Accept/Reject Seat
    ↓
17. CAP Round 2, 3... (if needed)
    ↓
18. Report to Institute
```

## Module Guidelines

### Creating a New Module:

```
modules/
└── module-name/
    ├── components/       # Reusable UI components
    ├── hooks/           # Custom React hooks
    ├── pages/           # Page components
    ├── services/        # API services
    ├── store/           # Redux slices
    ├── types/           # TypeScript types
    ├── utils/           # Utility functions
    ├── index.ts         # Module exports
    └── README.md        # Module documentation
```

### Naming Conventions:

- **Folders**: kebab-case (e.g., `merit-list`, `option-form`)
- **Components**: PascalCase (e.g., `MeritListTable.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useMeritList.ts`)
- **Types**: PascalCase with `.types.ts` suffix
- **Services**: camelCase with `.service.ts` suffix

### State Management:

- Use Redux Toolkit for global state
- Use React hooks for local state
- Create a dedicated slice for each module

### Styling:

- Use Tailwind CSS utility classes
- Follow glassmorphism design pattern
- Use CSS variables from `index.css`
- Maintain responsive design (mobile-first)

## Reference Project

This structure is based on the PH2024 (Pharmacy 2024) admission system developed by the State CET Cell, Maharashtra. The original project uses ASP.NET WebForms, and this is a modernized React implementation.

---

**Last Updated**: November 2025
**Maintained By**: Development Team
