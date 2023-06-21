import { createSlice } from "@reduxjs/toolkit";
import { toastBlank } from "../../../Components/01-Atoms/CustomToasts";

// import created AsyncThunks
import {
  register,
  verifyAccount,
  forgotPassword,
  resetPassword,
  login,
  keepLogin,
  changePassword,
  changeUsername,
  changePhone,
  changeEmail,
  changePhotoProfile,
  logout,
} from "./slices";

// make initial state
const INITIAL_STATE = {
  isRegisterLoading: false,
  isForgotPasswordLoading: false,
  isResetPasswordLoading: false,
  isLoginLoading: false,
  isKeepLoginLoading: false,
  isChangePasswordLoading: false,
  isChangeUsernameLoading: false,
  isChangPhoneLoading: false,
  isChangeEmailLoading: false,
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
    // REGISTER
    builder.addCase(register.pending, (state, action) => {
      state.isRegisterLoading = true;
      toastBlank("Loading...");
    });

    // VERIFY ACCOUNT
    builder.addCase(verifyAccount.pending, (state, action) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isVerified = true;
    });

    // FORGOT PASSSWORD
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.isForgotPasswordLoading = true;
      toastBlank("Loading...");
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isForgotPasswordLoading = false;
    });

    // RESET PASSSWORD
    builder.addCase(resetPassword.pending, (state, action) => {
      state.isResetPasswordLoading = true;
      toastBlank("Loading...");
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isResetPasswordLoading = false;
    });

    // LOGIN
    builder.addCase(login.pending, (state, action) => {
      state.isLoginLoading = true;
    });

    // KEEP LOGIN
    builder.addCase(keepLogin.pending, (state, action) => {
      state.isKeepLoginLoading = true;
    });

    // CHANGE PASSWORD
    builder.addCase(changePassword.pending, (state, action) => {
      state.isChangePasswordLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isChangePasswordLoading = false;
    });

    // CHANGE USERNAME
    builder.addCase(changeUsername.pending, (state, action) => {
      state.isChangeUsernameLoading = true;
    });
    builder.addCase(changeUsername.fulfilled, (state, action) => {
      state.isChangeUsernameLoading = false;
      state.username = action.payload;
    });

    // CHANGE PHONE NUMBER
    builder.addCase(changePhone.pending, (state, action) => {
      state.isChangPhoneLoading = true;
    });
    builder.addCase(changePhone.fulfilled, (state, action) => {
      state.isChangPhoneLoading = false;
      state.phone = action.payload;
    });

    // CHANGE EMAIL
    builder.addCase(changeEmail.pending, (state, action) => {
      state.isChangeEmailLoading = true;
    });
    builder.addCase(changeEmail.fulfilled, (state, action) => {
      state.isChangeEmailLoading = false;
      state.email = action.payload;
    });

    // CHANGE PHOTO PROFILE
    builder.addCase(changePhotoProfile.pending, (state, action) => {
      state.isUploadPhotoProfileLoading = true;
    });
    builder.addCase(changePhotoProfile.fulfilled, (state, action) => {
      state.isUploadPhotoProfileLoading = false;
      state.imgProfile = action.payload;
    });

    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.isLogoutLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state = Object.assign(state, INITIAL_STATE);
    });

    /*===================================================*/

    // error handler
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isRegisterLoading = false;
      state.isForgotPasswordLoading = false;
      state.isLoginLoading = false;
      state.isKeepLoginLoading = false;
      state.isChangePasswordLoading = false;
      state.isChangeUsernameLoading = false;
      state.isChangPhoneLoading = false;
      state.isChangeEmailLoading = false;
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
        imgProfile: action.payload?.imgProfile,
        isVerified: action.payload?.isVerified,
        role: action.payload?.role,
      });
    });
  },
});

export default authSlice.reducer;
