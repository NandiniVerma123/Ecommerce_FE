import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  userType: null, // 'user' or 'vendor'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.userType = action.payload.userType;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.userType = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;