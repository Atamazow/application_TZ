import React, {useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeCurrentPage, fetchPosts, searchPost, selectPosts} from "../store/postsSlice";
import "../style.css";
import Pagination from "./Pagination/Pagination";
import { Link } from "react-router-dom";
import usePosts from "../services/use-posts";

function PostList(props) {
    const [query, setQuery] = useState("");
  const { posts, limit, currentPage, pageCount } = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(limit, currentPage));
  }, [dispatch, currentPage]);

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      dispatch(searchPost(query));
  },[query]);
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input onChange={(e) => setQuery(e.target.value)} value={query} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {posts &&
          posts.map((post) => (
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
