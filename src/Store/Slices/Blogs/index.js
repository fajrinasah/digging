import { createSlice } from "@reduxjs/toolkit";

// created AsyncThunks
import {
  getArticles,
  getCarouselArticles,
  getCategories,
  doConserveArticle,
  getConservedArticles,
  getMostConserved,
  publishArticle,
  deleteArticle,
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
  myInformation: [],
  myArticles: [],
  myFilteredArticles: [],
  myConservedArticles: [],
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
    /*=======================================*/
    // For: SectionDigging @ home
    /*=======================================*/
    setFilteredArticles: (state, action) => {
      state.filteredArticles = state.articles;
      console.log("DONE: setFilteredArticles");
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

    /*=======================================*/
    // For: SectionDigging @ myProfile
    /*=======================================*/
    setMyArticles: (state, action) => {
      // payload: userId
      state.myArticles = state.articles.filter(
        (article) => article?.UserId === action.payload
      );
    },

    setMyFilteredArticles: (state, action) => {
      state.myFilteredArticles = state.myArticles;
      console.log("DONE: setMyFilteredArticles");
    },

    searchMyArticlesTitle: (state, action) => {
      let regex = new RegExp(action?.payload, "i");

      state.myFilteredArticles = state.myArticles.filter((article) =>
        regex.test(article.title)
      );
    },

    searchMyArticlesKeyword: (state, action) => {
      let regex = new RegExp(action?.payload, "i");

      state.myFilteredArticles = state.myArticles.filter((article) =>
        article.Blog_Keywords.filter((keywordObj) =>
          regex.test(keywordObj.Keyword.name)
        )
      );
    },

    /*=======================================*/
    // For: PageArticleViewing
    /*=======================================*/
    setArticleData: (state, action) => {
      state.articleData = state.articles.filter(
        (article) => article.id === action?.payload
      );
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
    });

    // GET CONSERVED ARTICLES
    builder.addCase(getConservedArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getConservedArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.myConservedArticles = action.payload;
    });

    // GET MOST CONSERVED ARTICLES
    builder.addCase(getMostConserved.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMostConserved.fulfilled, (state, action) => {
      state.mostConservedArticles = action.payload?.result;
    });

    // POST COMPOSE ARTICLE
    builder.addCase(publishArticle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(publishArticle.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // PATCH DELETE ARTICLE
    builder.addCase(deleteArticle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      state.isLoading = false;
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
  // getFilteredArticles,
  // searchArticles,
  searchArticlesTitle,
  searchArticlesKeyword,
  setMyArticles,
  // setMyInformation,
  setMyFilteredArticles,
  searchMyArticlesTitle,
  searchMyArticlesKeyword,
  setArticleData,
  setArticleKeywords,
} = blogsSlice.actions;
