import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../Utilities/api.instance";
import {
  toastSuccess,
  toastError,
} from "../../../Components/01-Atoms/CustomToasts";

/*==========================================
AsyncThunk: Get Articles
===========================================*/
export const getArticles = createAsyncThunk(
  "blogs/getArticles",
  async (payload, { rejectWithValue }) => {
    try {
      // parameter
      // const { id_cat, page, sort } = payload;
      // const PARAMETER = `?id_cat=${id_cat}&sort=${sort}&page=${page}`;
      // const PARAMETER = payload;

      // GET articles
      // const { data } = await api.get("/blog" + encodeURI(PARAMETER));
      const { data } = await api.get(`/blog${payload}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

// /*==========================================
// Get Filtered Articles
// ===========================================*/
// export const setFilteredArticles = (articles = []) => {
//   return {
//     type: "setFilteredArticles",
//     articles,
//   };
// };

// export const getArticles = createAsyncThunk(
//   "blogs/getArticles",
//   async (payload, { rejectWithValue }) => {
//     try {
//       // parameter
//       const { id_cat, page, sort } = payload;
//       const PARAMETER = `id_cat=${id_cat}&sort=${sort}&page=${page}`;

//       // GET articles
//       const { data } = await api.get("/blog?" + encodeURI(PARAMETER));

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error);
//     }
//   }
// );

/*==========================================
AsyncThunk: Get Carousel Articles
===========================================*/
export const getCarouselArticles = createAsyncThunk(
  "blogs/getCarouselArticles",
  async (payload, { rejectWithValue }) => {
    try {
      // GET articles
      const { data } = await api.get("/blog");

      // 5 most recent articles
      const carouselArticlesArray = data.result.slice(0, 5);

      return carouselArticlesArray;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Categories
===========================================*/

export const getCategories = createAsyncThunk(
  "blogs/getCategories",
  async (payload, { rejectWithValue }) => {
    try {
      // GET list of categories
      const { data } = await api.get("/blog/allCategory");

      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Conserve an Article (Liking an Article)
===========================================*/

export const doConserveArticle = createAsyncThunk(
  "blogs/doConserveArticle",
  async (payload, { rejectWithValue }) => {
    try {
      // POST data to conserve an article
      // payload: {BlogId: id}
      await api.post("/blog/like", payload);

      toastSuccess("Successfully conserved!");

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data.err : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Conserved Articles (Liked Articles)
===========================================*/

export const getConservedArticles = createAsyncThunk(
  "blogs/getConservedArticles",
  async (payload, { rejectWithValue }) => {
    try {
      // GET list of conserved articles
      const { data } = await api.get("/blog/pagLike");

      return data.result;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: Most Conserved Articles (Most Liked Articles)
===========================================*/

export const getMostConserved = createAsyncThunk(
  "blogs/getMostConserved",
  async (payload, { rejectWithValue }) => {
    try {
      // GET list of the most conserved articles
      const { data } = await api.get("/blog/pagFav?sort=ASC");

      return data.result.sort((a, b) => b.total_fav - a.total_fav);
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

// /*==========================================
// AsyncThunk: GET All Articles in Category
// ===========================================*/

// export const getAllArticlesInCategory = createAsyncThunk(
//   "blogs/getMostConservedInCategory",
//   async (payload, { rejectWithValue }) => {
//     try {
//       // GET list of the most conserved articles from all
//       const { data } = await api.get(`/blog/pagFav?id_cat=${payload}`);

//       console.log(data);
//       return data.result.sort((a, b) => b.total_fav - a.total_fav);
//     } catch (error) {
//       toastError(error.response ? error.response.data : error);
//       return rejectWithValue(error.response ? error.response.data : error);
//     }
//   }
// );

/*==========================================
AsyncThunk: COMPOSE A FINDING (ARTICLE)
===========================================*/
export const publishArticle = createAsyncThunk(
  "blogs/publishArticle",
  async (payload, { rejectWithValue }) => {
    try {
      // POST article's data
      // payload: formData that consist of data (stringified) and file (article's mainshot)
      const { data } = await api.post("/blog", payload);

      toastSuccess("Your finding was successfully published");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data.err : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

/*==========================================
AsyncThunk: DELETE ONE'S OWN FINDING (ARTICLE)
===========================================*/
export const deleteArticle = createAsyncThunk(
  "blogs/deleteArticle",
  async (payload, { rejectWithValue }) => {
    try {
      // PATCH
      // payload = id
      const { data } = await api.patch(`/blog/remove/${payload}`);

      toastSuccess("Successfully buried your finding");

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
