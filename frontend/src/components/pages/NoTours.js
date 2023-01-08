import React from "react";
import { Link, useLocation } from "react-router-dom";
import error from "../../assets/omg-shocked.gif";

function NoTrips() {
  const location = useLocation();
  if (location.state === null) {
    location.state = {
      problem: "Are you lost?",
      sol: "Don't worry. Let's expolre the available tours!",
    };
  }
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center flex-column p-3"
    >
      <img src={error} alt="error" style={{ height: "150px" }} />
      <p className="mt-3 text-center text-danger">{location.state.problem}</p>
      <p className="text-success"> {location.state.sol}</p>
      <Link to="/tours" className="btn btn-primary mt-3">
        LIST OF TOURS
      </Link>
    </div>
  );
}

export default NoTrips;
