import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { registerUser } from "../../services/TourService";

function Register() {
  const params = useParams();
  const [apiResponse, setApiResponse] = useState({
    message: "",
    isSuccessful: false,
  });
  // to handle signup post request
  const handleRegister = (values) => {
    let tourId = params.tourId;
    registerUser(
      tourId,
      values.boardingStation,
      values.noOfPassengers,
      values.phoneNumber
    )
      // .then(() => {
      //   navigate("/");
      //   window.location.reload();
      // })
      .catch((error) => {});
  };

  const displayErrorMessage = (invalidInput, errorMessage) => {
    if (invalidInput)
      return <div className="text-info mt-1">{errorMessage}</div>;
    return null;
  };

  const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const formik = useFormik({
    initialValues: {
      boardingStation: "",
      noOfPassengers: 0,
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      noOfPassengers: Yup.number()
        .positive("Please enter a positive number")
        .required("Please enter the number of passengers!"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Please enter the mobile number!"),
    }),
    onSubmit: (values) => handleRegister(values),
  });

  return (
    <div className="d-flex justify-content-center mt-5 pb-3">
      <form
        className=" d-flex flex-column auth-form"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="auth-form-title">Trip Registration Form </h3>

        <div className="form-group">
          <label>Boarding station</label>
          <input
            type="text"
            name="boardingStation"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.boardingStation}
          />
          {displayErrorMessage(
            formik.touched.boardingStation && formik.errors.boardingStation,
            formik.errors.boardingStation
          )}{" "}
        </div>
        <div className="form-group">
          <label>No. of passengers</label>
          <input
            type="number"
            className="form-control"
            name="noOfPassengers"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.noOfPassengers}
          />
          {displayErrorMessage(
            formik.touched.noOfPassengers && formik.errors.noOfPassengers,
            formik.errors.noOfPassengers
          )}{" "}
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {displayErrorMessage(
            formik.touched.phoneNumber && formik.errors.phoneNumber,
            formik.errors.phoneNumber
          )}{" "}
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
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
