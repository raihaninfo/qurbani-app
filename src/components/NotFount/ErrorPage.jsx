import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="not-fount">
      <div className="center-text">
        <h5 className="header-error py-2">404 || Not Fount</h5>
        <p className="error-pra">
        দুঃখিত! আপনি যে পাতাটি খুঁজছেন, তা পাওয়া যাইনি। <Link to='/'>মূল পাতাতে</Link> ফিরে যান।
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
