import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="not-fount">
      <div className="center-text">
        <h5 className='header-error'>404 || Not Fount</h5>
        <p className='error-pra'>Sorry, but the page you were trying to view does not exist</p>
      </div>
    </div>
  );
};

export default ErrorPage;
