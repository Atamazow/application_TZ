import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage, searchPost } from "../store/postsSlice";
import "../style.css";
import Pagination from "./Pagination/Pagination";
import { Link } from "react-router-dom";
import usePosts from "../services/use-posts";

function PostList(props) {
  const dispatch = useDispatch();
  const { posts, pageCount, handleSubmit, setQuery, query } = usePosts();

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="search-fields"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} to={`/${post.id}`}>
            <li className="post-title">{post.title}</li>
          </Link>
        ))}
      </ul>

      <Pagination
        count={pageCount}
        onChange={(page) => dispatch(changeCurrentPage(page))}
      />
    </div>
  );
}

export default PostList;
