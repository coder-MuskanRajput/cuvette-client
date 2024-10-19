import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuth :false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    loginSuccess(state, action) {
      console.log('inside login success', action.payload)
      state.user = action.payload;
      if(action.payload?.isEmailVerified && action.payload?.isMobileVerified){
        state.isAuth = true;
      }
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
      createAccountSuccess(state, action) {
        state.user = action.payload;
      },
      verifyOtpSuccess(state, action) {
        state.user = action.payload;
      },
    // Update Profile
    updateProfileSuccess(state, action) {
      state.user = action.payload;
    },
}
});

export const {
  loginSuccess,
  logout,
  createAccountSuccess,
  verifyOtpSuccess,
  updateProfileSuccess,
} = authSlice.actions;

export default authSlice.reducer;
