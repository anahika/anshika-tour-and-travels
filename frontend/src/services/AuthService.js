import axios from "axios";
import { toast } from "react-toastify";
import { usersURL } from "../config/URLConstants";

export const login = async (username, password) => {
  try {
    let res = await axios.post(usersURL + "/login", {
      username: username,
      password: password,
    });

    localStorage.setItem("user", JSON.stringify(res.data));
    toast.success("Login Successful!");
    return res;
  } catch (error) {
    if (
      error.message === "Network Error" ||
      error.message === "Service Unavailable"
    ) {
      toast.error(
        "We are unable to process your request. Please try after some time"
      );
    } else {
      const customError = error?.response?.data;
      if (customError.code === "INTERNAL_SERVER_ERROR") {
        toast.error(customError.message);
      } else if (customError.code === "BAD_REQUEST") {
        toast.error(customError.message);
      } else {
        toast.error("Oops!! try after some time");
      }
    }
    return error;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = async (props) => {
  const { username, email, password, usertype } = props;
  try {
    let res = await axios.post(usersURL + "/signup", {
      username: username,
      email: email,
      password: password,
      usertype: usertype,
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    if (
      error.message === "Network Error" ||
      error.message === "Service Unavailable"
    ) {
      toast.error(
        "We are unable to process your request. Please try after some time"
      );
    } else {
      const customError = error?.response?.data;
      if (customError.code === "INTERNAL_SERVER_ERROR") {
        toast.info(customError.message);
      } else if (customError.code === "BAD_REQUEST") {
        toast.error(customError.message);
      } else {
        toast.error("Oops!! try after some time");
      }
    }

    return;
  }
};
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
