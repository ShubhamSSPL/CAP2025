/**
 * Login Redux Slice
 * Manages login state
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState, LoginResponse } from '../types/login.types';

const initialState: LoginState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  user: null,
  token: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user || null;
      state.token = action.payload.token || null;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  clearError,
} = loginSlice.actions;

export default loginSlice.reducer;
