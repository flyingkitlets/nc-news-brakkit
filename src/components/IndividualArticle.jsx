import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import "../styles/IndividualArticle.css";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";
import Votes from "./Votes";
import formatDates from "../utils/data-manipulation";

class IndividualArticle extends Component {
  state = {
    article: {},
    upVoted: false,
    downVoted: false,
    err: "",
    isloading: true
  };
  componentDidMount() {
    this.getArticleById(this.props.article_id);
  }
  getArticleById = article_id => {
    api
      .fetchArticleById(article_id)
      .then(({ article }) => {
        this.setState({ article });
      })
      .catch(({ response: { data: { msg } } }) => {
        this.setState({ err: msg });
      });
  };

  render() {
    const article = this.state.article;
    return (
      <>
        {this.state.err && <ErrorPage msg={this.state.err} />}
        {!this.state.err && (
          <div className="IndividualArticle">
            <h6>
              {!this.state.err && (
                <Votes
                  id={this.props.article_id}
                  votes={this.state.article.votes}
                  type="articles"
                />
              )}
            </h6>
            <div>
              {!this.state.err && !this.state.isLoading && (
                <>
                  <h3>{article.title}</h3>
                  <h4 className="posted-in">
                    Posted in <strong>{article.topic}</strong>
                  </h4>
                  <div className="time-and-author">
                    <h5>By {article.author}</h5>
                    <h6 className="time-posted">
                      {this.state.article.created_at
                        ? formatDates(article.created_at)
                        : article.created_at}
                    </h6>
                  </div>
                  <p>{article.body}</p>
                  <Link to="/">
                    <button className="back-to-list">Back</button>
                  </Link>{" "}
                </>
              )}
            </div>
          </div>
        )}
        {!this.state.err && <Comments article_id={this.props.article_id} />}
      </>
    );
  }
}

export default IndividualArticle;
