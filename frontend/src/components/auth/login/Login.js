import React, { useState } from "react";
import { login } from "../../../services/AuthService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../Auth.css";

export default function Login(props) {
  const navigate = useNavigate();
  const [apiResponse, setApiResponse] = useState({
    message: "",
    isSuccessful: false,
  });

  const [customerSignIn, setCustomerSignIn] = useState({
    username: "",
    password: "",
  });

  // to handle the state changes
  const handleChange = (event) => {
    setCustomerSignIn({
      ...customerSignIn,
      [event.target.name]: event.target.value,
    });
  };

  // to handle signin post request
  const handleSignIn = (e) => {
    e.preventDefault();
    login(e.target.username.value, e.target.password.value).then((response) => {
      if (response.status === 200) {
        navigate("/");
      }
    });
  };

  return (
    <div className="d-flex justify-content-center mt-5 pb-3">
      <form className="auth-form d-flex flex-column" onSubmit={handleSignIn}>
        <h3 className="auth-form-title">Sign In</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <Link to={"/signup"} className="nav-link">
            Sign Up
          </Link>
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            name="username"
            value={customerSignIn.username}
            type="text"
            className="form-control mt-1"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            name="password"
            value={customerSignIn.password}
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>
        {/* based on the response from api we will render this component */}
        {apiResponse.message && (
          <div className="form-group">
            <div
              className={
                apiResponse.isSuccessful
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              role="alert"
            >
              {apiResponse.message}
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary align-self-center">
          Submit
        </button>
      </form>
    </div>
  );
}
