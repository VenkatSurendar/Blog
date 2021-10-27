import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = (props) => {
  const handleLogout = () => {
    props.logoutUser();
  };

  return (
    <div className="main">
      <header className="hello scroll">
        <ul style={{ paddingInlineStart: "0px" }}>
          <li>
            <Link to="/home">
              <span className="middle-main">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span className="middle-main">About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <span className="middle-main">Blogs</span>
            </Link>
          </li>
        </ul>
        <h2 style={{ textAlign: "center" }}>BlogSpot</h2>
        <span
          className="middle-main"
          style={{ float: "right", paddingRight: "25px" }}
          href="/login"
          onClick={handleLogout}
        >
          SIGN OUT
        </span>
      </header>
    </div>
  );
};

export default Navbar;
