import React from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import { Router } from "@reach/router";

import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="MainBody" primary={false}>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
        <IndividualArticle  path="/articles/:article_id" />
        <ErrorPage default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
