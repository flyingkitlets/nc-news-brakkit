import React from "react";
import { Link } from "@reach/router";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/topics/football">Football</Link>
      <Link to="/topics/coding">Coding</Link>
      <Link to="/topics/cooking">Cooking</Link>
    </div>
  );
};

export default Nav;
