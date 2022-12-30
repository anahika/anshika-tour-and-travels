import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.png";

const Error = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center flex-column p-3"
    >
      <img src={error} alt="error" style={{ width: "300px" }} />
      <p className="mt-3 text-center text-secondary">
        Unfortunately, this page does not exist. Please check the URL or return
        to Home Page.
      </p>
      <Link to="/" className="btn btn-secondary mt-3">
        GO HOME
      </Link>
    </div>
  );
};

export default Error;
