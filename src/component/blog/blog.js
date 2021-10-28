import React, { useState, useEffect } from "react";
import Navbar from "../navbar/NavBar";
import { Container } from "@mui/material";
import axios from "axios";
import "./blog.css";

function Blog() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios(
        "https://blog-app-task.herokuapp.com/articles",
      );
      setArticles(response.data);
      console.log(response.data[0].author.name);
    };
    fetchArticles();
  }, []);

  const blogCont = articles.map((item, index) => {
    return (
      <div className="blog">
        <Navbar />
        <Container>
          <div key={index}>
            <h2>Title: {item.title}</h2>
            <h3>Written By: {item.author.name}</h3>
            {item.content}
          </div>
        </Container>
      </div>
    );
  });
  return <div className="postCard">{blogCont}</div>;
}

export default Blog;
