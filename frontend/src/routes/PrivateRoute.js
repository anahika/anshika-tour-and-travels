import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  if (localStorage.getItem("user") != null) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
