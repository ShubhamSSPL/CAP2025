/**
 * Redux Store Configuration
 */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Import slices
import authReducer from './slices/authSlice';
import degreeConfigReducer from './slices/degreeConfigSlice';
import uiReducer from './slices/uiSlice';
import registrationReducer from '@/modules/registration/store/registrationSlice';
import applicationReducer from '@/modules/application/store/applicationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    degreeConfig: degreeConfigReducer,
    ui: uiReducer,
    registration: registrationReducer,
    application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: import.meta.env.VITE_APP_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
