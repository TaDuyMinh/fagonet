import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const NEWS_URL = import.meta.env.VITE_NEWS_URL;
const initialState = {
  news: [],
  pressNews: [],
  status: 'idle',
  error: null,
};
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, thunkAPI) => {
    try {
      const newsList = [];
      const response = await axios.get(NEWS_URL);
      for (const key in response.data.data?.new_articles) {
        const newsData = response.data.data?.new_articles[key];
        const temp = {
          categoryId: newsData.length > 0 ? newsData[0]?.category?.id : null,
          news: newsData.map((n) => n),
        };
        newsList.push(temp);
      }
      return newsList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchPressNews = createAsyncThunk(
  'pressNews/fetchPressNews',
  async (_, thunkAPI) => {
    try {
      const newsList = [];
      const response = await axios.get(NEWS_URL);
      for (const key in response.data.data?.press_releases) {
        const newsData = response.data.data?.press_releases[key];
        const temp = {
          ...newsData,
        };
        newsList.push(temp);
      }
      return newsList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchPressNews.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchPressNews.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.pressNews = action.payload;
      })
      .addCase(fetchPressNews.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      });
  },
});
export const newsStatus = (state) => {
  return state.news.status;
};
export const allNews = (state) => {
  return state.news.news;
};
export const pressNews = (state) => {
  return state.news.pressNews;
};
export default newsSlice.reducer;
