import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

import api from "../../Utilities/api.instance";
import {
  toastSuccess,
  toastError,
  toastBlank,
} from "../../../Components/01-Atoms/CustomToasts";

/*==========================================
AsyncThunk: Register
===========================================*/
export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      // POST needed data for register
      // payload: {email, username, phone number, password}
      const { data } = await api.post("/auth", payload);

      // set token (from data) in local storage
      localStorage.setItem("token", data?.token);

      // show toast or snackbar if needed
      toastSuccess("Please check your email to verify your account");

      return data?.data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Verify Account
===========================================*/

export const verifyAccount = createAsyncThunk(
  "auth/verifyAccount",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH to verify
      await api.patch("/auth/verify");

      // show toast or snackbar if needed
      // ...

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data.err.message : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Forgot Password
===========================================*/
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      // PUT data to verify
      // payload: {email}
      const { data } = await api.put("/auth/forgotPass", payload);

      <Navigate to="/" replace />;

      // show toast or snackbar if needed
      toastSuccess("Please check your email to verify");

      return data?.message;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Reset Password
===========================================*/
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH data to reset password
      // payload: {password, confirmPassword}
      const { data } = await api.patch("/auth/resetPass", payload);

      // show toast or snackbar if needed
      toastSuccess("Password has been reset. Please login.");

      // //remove token from local storage
      // localStorage.removeItem("token");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data.err.message : error);
      // toastError("Something went wrong");
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Login
===========================================*/

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      // POST needed data for login
      // payload: {email || username || phoneNumber, password}
      const { data } = await api.post("/auth/login", payload);

      // set token in local storage
      localStorage.setItem("token", data?.token);

      // show toast or snackbar if needed
      toastSuccess("Welcome back!");

      return data?.isAccountExist;
      // return data;
    } catch (error) {
      toastError(error.response ? error.response.data.err : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Keep Login
===========================================*/

export const keepLogin = createAsyncThunk(
  "auth/keepLogin",
  async (payload, { rejectWithValue }) => {
    try {
      // GET data (token included)
      const { data } = await api.get("/auth");

      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Change Password
===========================================*/
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH data to change password
      // payload : {currentPassword, password, confirmPassword}
      const { data } = await api.patch("/auth/changePass", payload);

      // show toast or snackbar if needed
      toastSuccess("Password has been changed");

      return data?.message;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Change Username
===========================================*/
export const changeUsername = createAsyncThunk(
  "auth/changeUsername",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH data to change username
      // payload : {currentUsername, newUsername}
      const { data } = await api.patch("/auth/changeUsername", payload);

      // show toast or snackbar if needed
      toastSuccess("Username has been changed");
      toastBlank("Please check your email to re-verify your account");

      // return data;
      return data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Change Phone Number
===========================================*/
export const changePhone = createAsyncThunk(
  "auth/changePhone",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH data to change phone number
      // payload : {currentPhone, newPhone}
      const { data } = await api.patch("/auth/changePhone", payload);

      // show toast or snackbar if needed
      toastSuccess("Phone number has been changed");
      toastBlank("Please check your email to re-verify your account");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Change Email
===========================================*/
export const changeEmail = createAsyncThunk(
  "auth/changeEmail",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH data to change phone number
      // payload : {currentEmail, newEmail}
      const { data } = await api.patch("/auth/changeEmail", payload);

      // show toast or snackbar if needed
      toastSuccess("Email has been changed");
      toastBlank("Please check your email to re-verify your account");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Change Photo Profile
===========================================*/
export const changePhotoProfile = createAsyncThunk(
  "auth/changePhotoProfile",
  async (payload, { rejectWithValue }) => {
    try {
      // POST new uploaded photo profile
      const { data } = api.post("/profile/single-uploaded", payload);

      // show toast or snackbar if needed
      toastSuccess("Photo profile has been changed");

      return data?.imgProfile;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Logout
===========================================*/

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      //remove token from local storage
      localStorage.removeItem("token");

      toastSuccess("See you later!");

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
