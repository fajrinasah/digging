import { createSlice } from "@reduxjs/toolkit";

// created AsyncThunks
import { getArticles, likedArticles } from "./slices";
import { isErrorOccured } from "../Authorization";
import { buildQueries } from "@testing-library/react";

const INITIAL_STATE = {
  articles: [],
  totalPage: 1,
  currentPage: 1,
  isLoading: false,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload?.result;
      state.totalPage = action.payload?.page;
      state.currentPage = action.payload?.blogPage;
    });

    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default blogsSlice.reducer;
