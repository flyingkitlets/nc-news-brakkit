import { slide as Menu } from "react-burger-menu";
import React from "react";
import "../styles/BurgerMenu.css";
import { Link } from "@reach/router";
import Sorting from "./Sorting";

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  state = {
    articlesList: false,
    isLoading: true
  };
  componentDidUpdate(prevProps) {
    if (prevProps.articleList === true && this.state.isLoading) {
      this.setState({ articlesList: true, isLoading: false });
    }
  }

  render() {
    return (
      <Menu right>
        <Link to="/">Home</Link>
        <Link to="/topics/football">Football</Link>
        <Link to="/topics/coding">Coding</Link>
        <Link to="/topics/cooking">Cooking</Link>
        {this.state.articlesList && <Sorting sortData={this.props.sortData} />}
        <div className="user-actions">
          <h3>
            Logged In As: <span>jessjelly</span>
          </h3>
          <img src="/img/avatar.png" alt="user-avatar" />
        </div>
      </Menu>
    );
  }
}

export default BurgerMenu;
