import "./style.css";
import { Routes, Route } from "react-router-dom";

import PostList from "./components/PostList";
import React from "react";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <h1>Посты</h1>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
