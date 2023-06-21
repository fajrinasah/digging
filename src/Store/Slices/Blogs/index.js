import { createSlice } from "@reduxjs/toolkit";

import { toastSuccess } from "../../../Components/01-Atoms/CustomToasts";

// created AsyncThunks
import {
  getArticles,
  getCarouselArticles,
  getCategories,
  doConserveArticle,
  getConservedArticles,
  getMostConserved,
  // setFilteredArticles,
} from "./slices";
import { isErrorOccured } from "../Authorization";

const INITIAL_STATE = {
  categories: [],
  carouselArticles: [],
  mostConservedArticles: [],
  articles: [],
  filteredArticles: [],
  totalPage: 1,
  currentPage: 1,
  isLoading: false,
  articleData: [],
  articleKeywords: [],
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
  reducers: {
    setFilteredArticles: (state, action) => {
      state.filteredArticles = state.articles;
      console.log("DONE: setFilteredArticles");
    },
    getFilteredArticles: (state, action) => {
      const getResult = () => {
        let filteredArticlesResult = [...state.filteredArticles];
        return filteredArticlesResult;
      };
      getResult();
    },
    searchArticles: (state, action) => {
      const { searchOption, searchInput } = action.payload;
      let regex = new RegExp(`${searchInput}`, "i");

      if (searchOption == "title") {
        state.filteredArticles = state.filteredArticles.filter((article) =>
          regex.test(article.title)
        );
      } else if (searchOption == "keyword") {
        state.filteredArticles = state.filteredArticles.filter((article) =>
          article.Blog_Keywords.filter((keywordObj) =>
            regex.test(keywordObj.Keyword.name)
          )
        );
      }
      console.log("DONE: searchArticles");
    },
    searchArticlesTitle: (state, action) => {
      let regex = new RegExp(action?.payload, "i");
      // state.filteredArticles = state.articles;
      state.filteredArticles = state.articles.filter((article) =>
        regex.test(article.title)
      );
      // state.articles = state.articles.filter((article) =>
      //   regex.test(article.title)
      // );
    },
    searchArticlesKeyword: (state, action) => {
      let regex = new RegExp(action?.payload, "i");
      // state.filteredArticles = state.articles;

      state.filteredArticles = state.articles.filter((article) =>
        article.Blog_Keywords.filter((keywordObj) =>
          regex.test(keywordObj.Keyword.name)
        )
      );
    },
    setArticleData: (state, action) => {
      state.articleData = state.articles.filter(
        (article) => article.id == action?.payload
      );
      state.articleKeywords = state.articleData?.Blog_Keywords;
    },
    setArticleKeywords: (state, action) => {
      let articleKeywords = [];
      state.articleData[0]?.Blog_Keywords.forEach((element) => {
        articleKeywords.push({
          id: element.Keyword?.id,
          name: element.Keyword?.name,
        });
      });

      state.articleKeywords = [...articleKeywords];
    },
  },
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
      toastSuccess("Successfully conserved!");
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
        // filteredArticles: action.payload?.result,
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

// export actions
export const {
  setFilteredArticles,
  getFilteredArticles,
  searchArticles,
  searchArticlesTitle,
  searchArticlesKeyword,
  setArticleData,
  setArticleKeywords,
} = blogsSlice.actions;
