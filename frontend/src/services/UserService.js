import axios from "axios";
import authHeader from "./AuthHeader";
import { toast } from "react-toastify";
import { usersURL } from "../config/URLConstants";

export const getUsers = async () => {
  try {
    let res = await axios.get(usersURL, { headers: authHeader() });
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getUserWithId = () => {};

export const getTripsForUser = async () => {
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  try {
    let res = await axios.get(usersURL + `/user/trips/${userId}`);
    return res.data;
  } catch (error) {
    if (error.message === "Network Error") {
      toast.error(
        "Oops!! We can't find the list of tours. Please try after some time"
      );
    } else {
      toast.error("Oops!! try after some time");
    }
    return [];
  }
};
