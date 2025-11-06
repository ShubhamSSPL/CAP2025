/**
 * Registration Module - Barrel Export
 * Central export point for the registration module
 */

// Routes
export { registrationRoutes } from './routes';

// Types
export * from './types/registration.types';

// Hooks
export { useRegistration } from './hooks/useRegistration';
export { useOTPVerification } from './hooks/useOTPVerification';

// Redux
export * from './store/registrationSlice';

// Services
export { RegistrationService } from './services/registration.service';
