import React from "react";
import { register } from "../../../services/AuthService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../Auth.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (values) => {
    register({ ...values })
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {});
  };

  const displayErrorMessage = (invalidInput, errorMessage) => {
    if (invalidInput)
      return <div className="text-info mt-1">{errorMessage}</div>;
    return null;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      usertype: "User",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required!")
        .min(5, "It must be of five characters!"),
      email: Yup.string()
        .email("Invalid email address")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Invalid email address"
        )
        .required("Email address is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long!")
        .matches(/[0-9]/, "Password requires a number!")
        .matches(/[a-z]/, "Password requires a lowercase letter!")
        .matches(/[A-Z]/, "Password requires an uppercase letter!")
        .matches(/[^\w]/, "Password requires a symbol!")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is Required"),
    }),
    onSubmit: (values) => {
      handleSignUp(values);
    },
  });

  return (
    <div className="d-flex justify-content-center mt-5 pb-3">
      <form
        className="auth-form d-flex flex-column"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="auth-form-title">Sign Up</h3>
        <div className="text-center">
          Already registered?{" "}
          <Link to={"/signin"} className="nav-link">
            Sign In
          </Link>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {displayErrorMessage(
            formik.touched.username && formik.errors.username,
            formik.errors.username
          )}{" "}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="abc@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {displayErrorMessage(
            formik.touched.email && formik.errors.email,
            formik.errors.email
          )}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {displayErrorMessage(
            formik.touched.password && formik.errors.password,
            formik.errors.password
          )}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {displayErrorMessage(
            formik.touched.confirmPassword && formik.errors.confirmPassword,
            formik.errors.confirmPassword
          )}{" "}
        </div>
        <div className="form-group align-self-center">
          <select
            name="usertype"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usertype}
          >
            <option value={"user"}>User</option>
            <option value={"employee"}>Employee</option>
            <option value={"admin"}>Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
