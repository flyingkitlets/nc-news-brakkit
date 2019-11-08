import React, { Component } from "react";
import * as api from "../utils/api";
import formatDates from "../utils/data-manipulation";
import Votes from "./Votes";
import ErrorPage from "./ErrorPage";
import "../styles/Comments.css";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    allComments: false,
    commentBody: "Write Your Comment Here",
    enteredCommentBox: false,
    addCommentShow: false,
    commentFailed: false,
    err: ""
  };

  getCommentsByArticleId = article_id => {
    api
      .fetchCommentsArticleById(article_id)
      .then(({ comments }) => {
        const sortedComments = comments
          .sort((a, b) => a.votes - b.votes)
          .reverse();
        this.setState({ comments: sortedComments, isLoading: false });
      })
      .catch(({ response: { data: { msg } } }) => {
        this.setState({ err: msg });
      });
  };

  updateCommentBody = event => {
    this.setState({ commentBody: event.target.value });
  };

  commentFailedNotification = () => {
    this.setState({ commentFailed: true });
  };

  writeComment = e => {
    e.preventDefault();
    if (
      this.state.commentBody.length === 0 ||
      this.state.commentBody === "Write Your Comment Here"
    ) {
      this.commentFailedNotification();
    } else {
      api
        .postComment(this.props.article_id, {
          username: "jessjelly",
          body: this.state.commentBody
        })
        .then(data => {
          const formatted = {
            created_at: new Date().toISOString(),
            ...data.comment
          };
          this.setState(currentState => {
            return {
              comments: [formatted, ...currentState.comments],
              commentBody: "Write Your Comment Here",
              isLoading: true
            };
          });
        })
        .then(() => {
          this.setState({ isLoading: false, commentFailed: false });
        });
    }
  };
  showAllComments = () => {
    !this.state.allComments
      ? this.setState({ allComments: true })
      : this.hideAllComments();
  };
  hideAllComments = () => {
    this.setState({ allComments: false });
  };

  addCommentShow = () => {
    this.setState({ addCommentShow: true });
  };

  clearCommentBox = () => {
    if (!this.state.enteredCommentBox)
      this.setState({ enteredCommentBox: true, commentBody: "" });
  };
  removeComment = comment_id => {
    api.deleteComment(comment_id).then(data => {
      this.setState(currentState => {
        const commentsClone = currentState.comments;
        const removal = commentsClone.filter(
          comment => comment.comment_id !== comment_id
        );
        return { comments: removal };
      });
    });
  };

  componentDidMount() {
    this.getCommentsByArticleId(this.props.article_id);
  }

  render() {
    return (
      <div className="comments">
        <div className="button-actions">
          <button className="show-comments" onClick={this.showAllComments}>
            {this.state.comments.length} Comment
            {this.state.comments.length > 1 && "s"}
          </button>
          <button className="add-comment" onClick={this.addCommentShow}>
            Add Comment
          </button>
        </div>
        {this.state.addCommentShow && (
          <div className="post-comment">
            <form onSubmit={this.writeComment}>
              {this.state.commentFailed && (
                <span>Comments must not be empty!</span>
              )}
              <label>
                <textarea
                  value={this.state.commentBody}
                  onChange={this.updateCommentBody}
                  onClick={this.clearCommentBox}
                ></textarea>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )}
        {this.state.err && <ErrorPage msg={this.state.err} />}
        {this.state.allComments && !this.state.isLoading && (
          <div className="rest-of-comments">
            {this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  <div>
                    <Votes
                      id={comment.comment_id}
                      votes={comment.votes}
                      type="comments"
                    />
                  </div>
                  <div>
                    <h5>{comment.author}</h5>
                    <p>{comment.body}</p>
                    <div className="comment-date-action">
                      {" "}
                      <p className="date">{formatDates(comment.created_at)}</p>
                      {comment.author === "jessjelly" && (
                        <button
                          className="delete-comment"
                          onClick={() => this.removeComment(comment.comment_id)}
                        >
                          Delete Comment
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
            <button className="hide-comments" onClick={this.hideAllComments}>
              Hide Comments
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
