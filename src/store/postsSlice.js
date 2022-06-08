import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsAsync = createAsyncThunk(
    "posts/getPostsAsync",
    async function ({limit,skip}, { rejectWithValue }) {
        try {
            const response = await fetch(
                `https://dummyjson.com/posts?limit=${limit}&${skip}`
            );

            if (!response.ok) {
                throw new Error("Server Error");
            }
            const data = await response.json();
            return data.posts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const initialState = {
    posts: [],
    loading: false
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getPostsAsync.pending]: (state, action) => {
            state.loading = "loading";
        },
        [getPostsAsync.fulfilled]: (state, action) => {
            state.loading = "resolved";
            state.posts = action.payload;
        },
    }
})

export default postsSlice.reducer