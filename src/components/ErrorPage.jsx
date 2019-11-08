import React from "react";
import { Link } from "@reach/router";

const ErrorPage = props => {
  return (
    <div className="error-msg">
      <h1>{props.msg ? props.msg : "404, not found"}</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ErrorPage;
