import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost, selectPosts} from "../store/postsSlice";
import '../style.css'

function Post(props) {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { post } = useSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [id, dispatch]);
  return (
    <div>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p className='post-block'>{post.body}</p>
          </>
        )}

    </div>
  );
}

export default Post;
