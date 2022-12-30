import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Register from "./components/register/Register";
import Tour from "./components/tours/Tour";
import Header from "./components/header/Header";
import Login from "./components/auth/login/Login";
import SignUp from "./components/auth/signup/SignUp";
import UserBoard from "./components/user/UserDetail";
import AdminBoard from "./components/admin/AdminBoard";
import Error from "./components/pages/Error";
import Profile from "./components/profile/Profile";
import MyTrips from "./components/profile/MyTrips";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route path="/tours" element={<Tour />} />
          <Route
            exact
            path="/tours/:userId"
            element={<PrivateRoute component={MyTrips} />}
          />
          <Route
            exact
            path="/register/:tourId"
            element={<PrivateRoute component={Register} />}
          />
          <Route
            path="/user"
            element={<PrivateRoute component={UserBoard} />}
          />
          <Route
            path="/admin"
            element={<PrivateRoute component={AdminBoard} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
