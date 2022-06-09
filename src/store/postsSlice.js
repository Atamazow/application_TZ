import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  pageCount: 0,
  currentPage: 1,
  loading: false,
  limit: 10,
  post: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.pageCount = Math.ceil(action.payload.total / state.limit);
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    searchSetPost: (state, action) => {
      state.posts = action.payload.posts;
      state.pageCount = Math.ceil(action.payload.total / state.limit);
    },
  },
});

export const { changeCurrentPage, setPosts, setPost, searchSetPost } =
  postsSlice.actions;

export const fetchPosts = (limit, skip) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
    );
    dispatch(setPosts(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/posts/${id}`);
    dispatch(setPost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const searchPost = (query) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/posts/search?q=${query}&limit=${10}`
    );
    console.log(data);
    dispatch(searchSetPost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
