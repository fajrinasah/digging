import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import api from "../../Utilities/api.instance";
import {
  toastSuccess,
  toastError,
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

      return;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
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
      toastError(error.response ? error.response.data : error);
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
AsyncThunk: Update Photo Profile
===========================================*/
export const updatePhotoProfile = createAsyncThunk(
  "auth/updatePhotoProfile",
  async (payload, { rejectWithValue }) => {
    try {
      // POST new uploaded photo profile
      const { data } = api.post("/profile/single-uploaded", payload);

      // show toast or snackbar if needed
      toastSuccess("Profile successfully updated");

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

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
