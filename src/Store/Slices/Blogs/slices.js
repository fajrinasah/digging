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

/*==========================================
AsyncThunk: GET the Most Conserved Article in Each Category
===========================================*/

export const getMostConservedInEachCategory = createAsyncThunk(
  "blogs/getMostConservedInEachCategory",
  async (payload, { rejectWithValue }) => {
    try {
      // Make an array of object
      const resultArray = [
        { id: 1, name: "Bisnis", data: {} },
        { id: 2, name: "Ekonomi", data: {} },
        { id: 3, name: "Teknologi", data: {} },
        { id: 4, name: "Olahraga", data: {} },
        { id: 5, name: "Kuliner", data: {} },
        { id: 6, name: "Internasional", data: {} },
        { id: 7, name: "Fiksi", data: {} },
      ];
      // GET list of all most conserved articles in a category,
      // then take the first object,
      // then push it to the resultArray
      // do these steps for every category

      /*-------[CATEGORY] id: 1   name: Bisnis---------------------*/
      const { data1 } = await api.get("/blog/pagFav?id_cat=1&sort=ASC");
      const data1Sorted = data1?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[0].data = data1Sorted[0]; // ? data1Sorted[0] : null;

      /*-------[CATEGORY] id: 2   name: Ekonomi---------------------*/
      const { data2 } = await api.get("/blog/pagFav?id_cat=2&sort=ASC");
      const data2Sorted = data2?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[1].data = data2Sorted[0]; // ? data2Sorted[0] : null;

      /*-------[CATEGORY] id: 3   name: Teknologi---------------------*/
      const { data3 } = await api.get("/blog/pagFav?id_cat=3&sort=ASC");
      const data3Sorted = data3?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[2].data = data3Sorted[0]; // ? data3Sorted[0] : null;

      /*-------[CATEGORY] id: 4   name: Olahraga---------------------*/
      const { data4 } = await api.get("/blog/pagFav?id_cat=4&sort=ASC");
      const data4Sorted = data4?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[3].data = data4Sorted[0]; // ? data4Sorted[0] : null;

      /*-------[CATEGORY] id: 5   name: Kuliner---------------------*/
      const { data5 } = await api.get("/blog/pagFav?id_cat=5&sort=ASC");
      const data5Sorted = data5?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[4].data = data5Sorted[0]; // ? data5Sorted[0] : null;

      /*-------[CATEGORY] id: 6   name: Internasional---------------------*/
      const { data6 } = await api.get("/blog/pagFav?id_cat=6&sort=ASC");
      const data6Sorted = data6?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[5].data = data6Sorted[0]; // ? data6Sorted[0] : null;

      /*-------[CATEGORY] id: 7   name: Fiksi---------------------*/
      const { data7 } = await api.get("/blog/pagFav?id_cat=7&sort=ASC");
      const data7Sorted = data7?.result?.sort(
        (a, b) => b.total_fav - a.total_fav
      );
      resultArray[6].data = data7Sorted[0]; // ? data7Sorted[0] : null;

      return resultArray;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

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
