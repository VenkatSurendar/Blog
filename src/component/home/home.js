import React from "react";
import Navbar from "../navbar/NavBar";
import PostCard from "../card/card";
import "./home.css";

function home() {
  return (
    <div className="home">
      <Navbar />
      <PostCard />
    </div>
  );
}

export default home;
