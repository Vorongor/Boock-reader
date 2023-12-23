import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  googleSignIn,
} from './operations';

const initialState = {
  accessToken: '...',
  refreshToken: '...',
  name: '',
  email: '',
  startDay: '',
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  userExist: false,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogIn: state => {
      state.userExist = true;
    },
    setRegIn: state => {
      state.userExist = false;
    },
    setTestIn: state => {
      state.isLoggedIn = true;
    },
    setLogOut: state => {
      state.name = null;
      state.email = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
      state.userExist = false;
    },
  },
  extraReducers: builder => {
    builder
      // fulfilled
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.startDay = action.payload.createdAt;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.startDay = action.payload.createdAt;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.startDay = action.payload.createdAt;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      //  pending
      .addCase(refreshUser.pending, handlePending)
      // rejected
      .addCase(logIn.rejected, handleRejected)
      .addCase(register.rejected, handleRejected)
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(googleSignIn.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.error.message;
      });
  },
});
export const { setLogIn, setRegIn, setTestIn, setLogOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
