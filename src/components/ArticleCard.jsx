import React from "react";
import "../styles/ArticleCard.css";
import Comments from "./Comments";
import Votes from "./Votes";
import { Link } from "@reach/router";
import formatDates from "../utils/data-manipulation";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import IsLoading from "./IsLoading";

const ArticleCard = props => {
  const isOpen = props.isOpen;
  const article = props;
  return (
    <TransitionGroup component={null}>
      {isOpen && (
        <CSSTransition classNames="dialog" timeout={300}>
          <>
            <div>
              <li className="article-card" key={article.article_id}>
                <div>
                  <Votes
                    id={article.article_id}
                    votes={article.votes}
                    type="articles"
                  />
                </div>
                <div>
                  <h3>{article.title}</h3>
                  <h4 className="posted-in">
                    Posted in <strong>{article.topic}</strong>
                  </h4>
                  <div className="time-and-author">
                    <h5>
                      By <span>{article.author}</span>
                    </h5>
                    <h6 className="time-posted">
                      {formatDates(article.created_at)}
                    </h6>
                  </div>
                  <p>
                    {article.body
                      .split(" ")
                      .slice(0, 35)
                      .join(" ")}
                    ...
                    <Link to={`/articles/${article.article_id}`}>
                      <button className="read-more">Read More</button>
                    </Link>
                  </p>
                </div>
              </li>
            </div>
            <Comments article_id={article.article_id} />
          </>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default ArticleCard;
