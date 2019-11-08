import React, { Component } from "react";
import "../styles/Sorting.css";

class Sorting extends Component {
  state = {
    selected: "created_at"
  };
  updateSortBy = event => {
    const toPass = event.target.value.split(" ");
    this.setState({ selected: toPass[0] }, () => {
      this.props.sortData(this.state.selected, toPass[1]);
    });
  };
  componentDidMount() {
    if (this.props.hideCommentSort) {
      this.setState({ hideCommentSort: true, selected: "votes" });
    }
  }
  render() {
    return (
      <div className="sorting-box"><h3>Sort By: </h3>
        <select onChange={this.updateSortBy}>
          <option value="created_at desc">Newest</option>
          <option value="created_at asc">Oldest</option>
          <option value="votes desc">Upvotes</option>
          <option value="votes asc">Downvotes</option>
          <option value="comment_count desc">Comment Count</option>
        </select>
      </div>
    );
  }
}

export default Sorting;
