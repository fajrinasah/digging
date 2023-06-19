import { createSlice } from "@reduxjs/toolkit";

// created AsyncThunks
import {
  getArticles,
  getCarouselArticles,
  getCategories,
  doConserveArticle,
  getConservedArticles,
  getMostConserved,
} from "./slices";
import { isErrorOccured } from "../Authorization";

const INITIAL_STATE = {
  categories: [],
  carouselArticles: [],
  mostConservedArticles: [],
  articles: [],
  totalPage: 1,
  currentPage: 1,
  isLoading: false,
};

// make a global success handler, define when is the authorization success
const isBlogsSucceed = (action) => {
  return [
    getArticles.fulfilled.type,
    getConservedArticles.fulfilled.type,
  ].includes(action.type);
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // GET ARTICLES
    builder.addCase(getArticles.pending, (state, action) => {
      state.isLoading = true;
    });

    // GET CAROUSEL ARTICLES
    builder.addCase(getCarouselArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCarouselArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carouselArticles = action.payload;
    });

    // GET CATEGORIES
    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });

    // DO CONSERVE ARTICLE
    builder.addCase(doConserveArticle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(doConserveArticle.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET CONSERVED ARTICLES
    builder.addCase(getConservedArticles.pending, (state, action) => {
      state.isLoading = true;
    });

    // GET MOST CONSERVED ARTICLES
    builder.addCase(getMostConserved.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMostConserved.fulfilled, (state, action) => {
      state.mostConservedArticles = action.payload?.result;
    });

    // success handler
    builder.addMatcher(isBlogsSucceed, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        articles: action.payload?.result,
        totalPage: action.payload?.page,
        currentPage: action.payload?.blogPage,
      });
    });

    // if there's any error from auth:
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default blogsSlice.reducer;
