import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./styles.css";

const API_URL = "https://api.spacexdata.com/v3/history";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  const changeInput = (e) => {
    setFind(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //Get current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return posts.length > 0 ? (
    <div className="App">
      <div className="heading-spacex">
        <h1>SpaceX History</h1>
      </div>

      <div className="post-container">
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  ) : (
    <div className="container">Loading...</div>
  );
}
