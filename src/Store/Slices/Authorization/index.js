import { createSlice } from "@reduxjs/toolkit";

// import created AsyncThunks
import {
  register,
  verifyAccount,
  login,
  keepLogin,
  updatePhotoProfile,
  logout,
} from "./slices";

// make initial state
const INITIAL_STATE = {
  isRegisterLoading: false,
  isLoginLoading: false,
  isKeepLoginLoading: false,
  isUploadPhotoProfileLoading: false,
  isLogoutLoading: false,
  id: null,
  username: "",
  email: "",
  phone: "",
  imgProfile: null,
  isVerified: false,
  role: "",
};

// make a global error handler, it's basically gathering any "rejected" type and make it easier to handle them
export const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

// make a global success handler, define when is the authorization success
const isAuthSuccess = (action) => {
  return [
    register.fulfilled.type,
    login.fulfilled.type,
    keepLogin.fulfilled.type,
  ].includes(action.type);
};

// create authorization slice
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.isRegisterLoading = true;
    });

    builder.addCase(verifyAccount.pending, (state, action) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isVerified = true;
    });

    builder.addCase(login.pending, (state, action) => {
      state.isLoginLoading = true;
    });

    builder.addCase(keepLogin.pending, (state, action) => {
      state.isKeepLoginLoading = true;
    });

    builder.addCase(updatePhotoProfile.pending, (state, action) => {
      state.isUploadPhotoProfileLoading = true;
    });
    builder.addCase(updatePhotoProfile.fulfilled, (state, action) => {
      state.isUploadPhotoProfileLoading = false;
      state.imgProfile = action.payload;
    });

    builder.addCase(logout.pending, (state, action) => {
      state.isLogoutLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state = Object.assign(state, INITIAL_STATE);
    });

    // error handler
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isRegisterLoading = false;
      state.isLoginLoading = false;
      state.isKeepLoginLoading = false;
      state.isUploadPhotoProfileLoading = false;
      state.isLogoutLoading = false;

      console.error(action.payload);
      // show toast or snackbar if needed
      // ...
    });

    // success handler
    builder.addMatcher(isAuthSuccess, (state, action) => {
      state = Object.assign(state, {
        isRegisterLoading: false,
        isLoginLoading: false,
        isKeepLoginLoading: false,
        id: action.payload?.id,
        username: action.payload?.username,
        email: action.payload?.email,
        phone: action.payload?.phone,
        imgProfile: action.payload?.imageProfile,
        isVerified: action.payload?.isVerified,
        role: action.payload?.role,
      });
    });
  },
});

export default authSlice.reducer;
