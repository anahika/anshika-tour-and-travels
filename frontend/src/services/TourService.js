import axios from "axios";
import { toast } from "react-toastify";
import { toursURL } from "../config/URLConstants";

export const getTours = async () => {
  try {
    let res = await axios.get(toursURL);
    return res.data;
  } catch (error) {
    if (
      error.message === "Network Error" ||
      error.message === "Service Unavailable"
    ) {
      toast.error(
        "We are unable to find the list of tours. Please try after some time"
      );
    } else {
      toast.error("Oops!! try after some time");
    }
    return [];
  }
};

export const getByPlace = async (destination) => {
  try {
    let res = await axios.get(toursURL + `/destination/${destination}`);
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
      } else {
        toast.error("Oops!! try after some time");
      }
    }

    return [];
  }
};

export const getByDate = async (date) => {
  try {
    let res = await axios.get(toursURL + `/date/${date}`);
    if (res.data.length === 0) {
      toast.info(`No tours available for ${date}`);
    }
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

    return [];
  }
};
