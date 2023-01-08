import axios from "axios";
import authHeader from "./AuthHeader";
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

export const getTripsForUser = async (userkiId, navigate) => {
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  try {
    let res = await axios.get(usersURL + `/user/trips/${userId}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    navigate("/error");
    return "error";
  }
};
