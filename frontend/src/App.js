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
import Profile from "./components/profile/Profile";
import MyTrips from "./components/profile/MyTrips";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";
import NoTours from "./components/pages/NoTours";
import NotFound from "./components/pages/NotFound";
import Error from "./components/pages/Error";

function App() {
  var expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + 1);
  localStorage.setItem("expiryDate", expiryDate);
  if (expiryDate.getTime() < new Date().getTime()) {
    localStorage.removeItem("user");
    window.location.reload();
  }
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
          <Route path="/tours/no-tours" element={<NoTours />} />
          <Route
            exact
            path="/mytrips/:userId"
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
          <Route path="/error" element={<Error />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
