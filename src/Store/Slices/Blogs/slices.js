import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../utils/api.instance";

/*==========================================
AsyncThunk: Get Articles
===========================================*/
export const getArticles = createAsyncThunk(
  "getArticles",
  async (payload, { rejectWithValue }) => {
    try {
      // parameter
      const { id_cat, page, sort } = payload;
      const PARAMETER = `id_cat=${id_cat}&sort=${sort}&page=${page}`;

      // GET articles
      const { data } = await api.get("/blog?" + encodeURI(PARAMETER));

      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Liked Articles
===========================================*/

export const likedArticles = createAsyncThunk(
  "blogs/likedArticles",
  async (payload, { rejectWithValue }) => {
    try {
      await api.post("/blog/like", payload);

      return null;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
