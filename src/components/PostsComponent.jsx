import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "../store/postsSlice";

function PostsComponent(props) {
  const posts = useSelector((state) => state.posts);
  const [limit, setLimit] = useState(5)
  const [skip, setSkip] = useState(10)
  const dispatch = useDispatch();
  console.log(posts);
  useEffect(() => {
    dispatch(getPostsAsync({
      limit,
      skip
    }));
  }, []);

  return (
    <div>
      <h1>Посты</h1>
      <ul>{posts && posts.map((post) => <li>{post.title}</li>)}</ul>
    </div>
  );
}

export default PostsComponent;
