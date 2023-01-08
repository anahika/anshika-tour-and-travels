import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center flex-column p-3"
    >
      <div
        style={{ maxWidth: "500px" }}
        className="alert alert-light p-4 text-secondary"
        role="alert"
      >
        <h4 style={{ color: "Tomato", fontFamily: "cursive" }}>So sorry!🥺</h4>
        <p style={{ color: "DodgerBlue" }}>
          We are extremely sorry that you have to face this issue. We are trying
          our best to solve it out as soon as possible.
        </p>
        <p style={{ color: "MediumSeaGreen" }}>
          You can explore other features till then.😁
        </p>
      </div>

      <Link to="/" className="btn btn-primary mt-3">
        GO HOME
      </Link>
    </div>
  );
}

export default Error;
