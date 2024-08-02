import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './actions/newsSlice';
import blogsReducer from './actions/blogsSlice';
export const store = configureStore({
  reducer: {
    news: newsReducer,
    blogs: blogsReducer,
  },
});
