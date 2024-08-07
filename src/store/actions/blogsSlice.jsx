import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const BLOG_URL = import.meta.env.VITE_BLOG_URL;
const initialState = {
  headNews: [],
  podcast: [],
  mostViews: [],
  mostRecent: [],
  listBlogsById: [],
  blogsById: {},
  status: 'idle',
  error: null,
};

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BLOG_URL + '/blog/home/head-new');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchPodCast = createAsyncThunk(
  'podcast/fetchPodCast',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BLOG_URL + '/podcast');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchMostViews = createAsyncThunk(
  'mostViews/fetchMostViews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BLOG_URL + '/blog/posts/popular');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchMostRecent = createAsyncThunk(
  'mostRecent/fetchMostRecent',
  async (_, thunkAPI) => {
    try {
      const uniqueId = new Set();
      const newBlogs = [];
      const response = await axios.get(BLOG_URL + '/blog/posts/most-recent');
      for (let key of response.data.data) {
        const categoryId = key.category_id;
        if (!uniqueId.has(categoryId)) {
          uniqueId.add(categoryId);
          const temp = {
            categoryId: key.category_id,
            categoryName: key.category_name,
            categorySlug: key.category_slug,
            slug: key.slug,
          };
          newBlogs.push(temp);
        }
      }
      return newBlogs;
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchListBlogsId = createAsyncThunk(
  'listBlogsId/fetchListBlogsId',
  async (id, thunkAPI) => {
    try {
      const listBlogs = [];
      const response = await axios.get(
        BLOG_URL + `/blog/posts/most-recent?limit=6&category_id=${id}`
      );
      const temp = {
        firstBlogs: response.data.data[0].slug,
        blogs: response.data.data,
      };
      listBlogs.push(temp);
      return listBlogs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchBlogsId = createAsyncThunk(
  'blogsId/fetchBlogsId',
  async (slug, thunkAPI) => {
    try {
      const response = await axios.get(BLOG_URL + `/blog/posts/${slug}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.headNews = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchPodCast.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchPodCast.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.podcast = action.payload;
      })
      .addCase(fetchPodCast.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchMostViews.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchMostViews.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.mostViews = action.payload;
      })
      .addCase(fetchMostViews.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchMostRecent.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchMostRecent.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.mostRecent = action.payload;
      })
      .addCase(fetchMostRecent.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchListBlogsId.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchListBlogsId.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.listBlogsById = action.payload;
      })
      .addCase(fetchListBlogsId.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      })
      .addCase(fetchBlogsId.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchBlogsId.fulfilled, (state, action) => {
        console.log(state.status);
        state.status = 'succeeded';
        state.error = false;
        state.blogsById = action.payload;
      })
      .addCase(fetchBlogsId.rejected, (state) => {
        console.log(state.status);
        state.status = 'failed';
        state.error = true;
      });
  },
});
export const blogsStatus = (state) => {
  return state.blogs.status;
};
export const allBlogs = (state) => {
  return state.blogs.headNews;
};
export const allPodCast = (state) => {
  return state.blogs.podcast;
};
export const allMostViews = (state) => {
  return state.blogs.mostViews;
};
export const allMostRecent = (state) => {
  return state.blogs.mostRecent;
};
export const listBlogsById = (state) => {
  return state.blogs.listBlogsById[0]?.blogs;
};
export const firstBlogs = (state) => {
  return state.blogs.listBlogsById[0]?.firstBlogs;
};
export const blogsById = (state) => {
  return state.blogs.blogsById;
};
export default blogsSlice.reducer;
