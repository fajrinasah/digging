import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./Slices/Authorization";
import blogsReducer from "./Slices/Blogs";

// store
const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsReducer,
  },
});

export default store;
