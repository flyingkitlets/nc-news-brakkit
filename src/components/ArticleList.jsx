import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleList.css";
import Sorting from "./Sorting";
import ErrorPage from "./ErrorPage";
import IsLoading from "./IsLoading";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    sorted: false,
    sort_by: "created_at",
    order_by: "desc"
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles(this.state.sort_by, this.state.order_by);
    }
  }

  sortData = (sort_by, order_by) => {
    this.setState({ sort_by, order_by, sorted: true }, () => {
      this.getArticles(this.state.sort_by, this.state.order_by);
    });
  };

  getArticles = (sort_by = "created_at", order_by = "desc") => {
    api
      .fetchArticles(this.props.topic, sort_by, order_by)
      .then(data => {
        this.setState(
          { articles: data.articles, isLoading: false, sorted: false },
          () => {}
        );
      })
      .catch(({ response: { data: { msg } } }) => {
        this.setState({ err: msg });
      });
  };

  render() {
    return (
      <div className="ArticleList">
        {this.state.isLoading && <IsLoading />}
        <Sorting sortData={this.sortData} />
        {!this.state.err &&
          !this.state.isLoading &&
          this.state.articles.map(article => {
            return (
              <ArticleCard
                {...article}
                key={`article-component ${article.article_id}`}
              />
            );
          })}
        {this.state.err && <ErrorPage msg={this.state.err} />}
      </div>
    );
  }
}

export default ArticleList;
