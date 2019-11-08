const axios = require("axios");

exports.updateVote = (id, direction, type) => {
  return axios
    .patch(`https://nc-news-tes.herokuapp.com/api/${type}/${id}`, direction)
    .then(data => {
      return data;
    });
};

exports.fetchArticles = (params, sort_by, direction) => {
  return axios
    .get(
      `https://nc-news-tes.herokuapp.com/api/articles?sort_by=${sort_by}&order_by=${direction}`,
      {
        params: {
          topic: params
        }
      }
    )
    .then(({ data }) => {
      return data;
    });
};

exports.fetchArticleById = article_id => {
  return axios
    .get(`https://nc-news-tes.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
};

exports.fetchCommentsArticleById = article_id => {
  return axios
    .get(
      `https://nc-news-tes.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

exports.postComment = (article_id, comment) => {
  return axios
    .post(
      `https://nc-news-tes.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data;
    });
};

exports.deleteComment = comment_id => {
  return axios
    .delete(`https://nc-news-tes.herokuapp.com/api/comments/${comment_id}`)
    .then(({ data }) => {
      return data;
    });
};
