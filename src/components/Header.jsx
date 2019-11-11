import React, { Component } from "react";
import "../styles/Header.css";
import { Link } from "@reach/router";

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <Link to="/">
          <h1 className="main-header">
            <span>&gt;_&lt;</span>Brakkit
          </h1>
        </Link>
      </div>
    );
  }
}

export default Header;
