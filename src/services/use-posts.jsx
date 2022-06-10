import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, searchPost, selectPosts } from "../store/postsSlice";

const usePosts = () => {
  const [query, setQuery] = useState("");
  const { posts, limit, currentPage, pageCount } = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(limit, currentPage));
  }, [dispatch, currentPage]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(searchPost(query));
    },
    [query]
  );

  return {
    posts,
    limit,
    currentPage,
    pageCount,
    setQuery,
    handleSubmit,
    query,
  };
};

export default usePosts;
