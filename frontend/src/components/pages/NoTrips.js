import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/omg-shocked.gif";

function NoTrips() {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center flex-column p-3"
    >
      <img src={error} alt="error" style={{ height: "150px" }} />
      <p className="mt-3 text-center text-danger">
        Currently you are not registered to any tours available.
      </p>
      <p className="text-success"> Feel free to register!</p>
      <Link to="/tours" className="btn btn-primary mt-3">
        LIST OF TOURS
      </Link>
    </div>
  );
}

export default NoTrips;
