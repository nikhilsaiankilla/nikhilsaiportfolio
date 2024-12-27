import { createSlice } from '@reduxjs/toolkit';

// Get the token from localStorage if it exists
const storedToken = localStorage.getItem('authToken');

const initialState = {
  isAuthenticated: !!storedToken,
  user: null,
  token: storedToken || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      // Store the token in localStorage
      localStorage.setItem('authToken', action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      // Remove the token from localStorage
      localStorage.removeItem('authToken');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
