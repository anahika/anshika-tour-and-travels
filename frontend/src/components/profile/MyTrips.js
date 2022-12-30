import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTripsForUser } from "../../services/UserService";
import "./MyTrips.css";
import Loading from "../pages/Loading";
import NoTrips from "../pages/NoTrips";

function MyTrips() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTripsForUser(params.userId).then((response) => {
      if (response.length === 0) {
        setIsEmpty(true);
      } else {
        setTours(response);
      }
      setIsLoading(false);
    });
  }, [params.userId]);

  const capitalizeFirstLowercaseRest = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
  };

  if (isLoading) {
    return <Loading />;
  } else if (isEmpty) {
    return <NoTrips />;
  } else {
    return (
      <div className="table-responsive d-flex justify-content-center">
        <table
          className="table mb-0 mt-3 table-borderless"
          style={{ width: "95%" }}
        >
          <thead>
            <tr className="table-primary">
              <th scope="col" className="text-center">
                {" "}
                S No.{" "}
              </th>
              <th scope="col" className="text-center">
                {" "}
                Date
              </th>
              <th scope="col" className="text-center">
                {" "}
                Boarding Station
              </th>
              <th scope="col" className="text-center">
                {" "}
                Destination
              </th>
              <th scope="col" className="text-center">
                {" "}
                Fare
              </th>
              <th scope="col" className="text-center">
                {" "}
                Mobile No.
              </th>
              <th scope="col" className="text-center">
                {" "}
                Passengers
              </th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  {" "}
                  {tour.tour.tourDate.slice(0, 10)}
                </td>
                <td className="text-center">
                  {" "}
                  {capitalizeFirstLowercaseRest(tour.boardingStation)}
                </td>
                <td className="text-center">
                  {" "}
                  {capitalizeFirstLowercaseRest(tour.tour.destination)}
                </td>
                <td className="text-center"> {tour.tour.fare}</td>
                <td className="text-center"> {tour.phoneNo}</td>
                <td className="text-center"> {tour.noOfPassengers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTrips;
