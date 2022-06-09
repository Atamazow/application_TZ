// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {fetchPosts, selectPosts} from "../store/postsSlice";
//
// const usePosts = () => {
//     const { posts, limit, currentPage, pageCount } = useSelector(selectPosts);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(fetchPosts(limit, currentPage));
//     }, [dispatch, currentPage]);
//
//     return {posts, limit, currentPage, pageCount}
// };
//
// export default usePosts;
