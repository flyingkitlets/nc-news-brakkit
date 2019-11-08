import React from "react";
import "../styles/IsLoading.css";

const IsLoading = () => {
  return (
    <div className="loading-animation">
        <h3 className="loader animated bounce">&gt;</h3>
        <h3 className="loader">
          <span className="mid">_</span>
        </h3>
        <h3 className="loader animated bounce">&lt;</h3>
    </div>
  );
};

export default IsLoading;
