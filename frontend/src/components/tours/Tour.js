import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getTours, getByPlace, getByDate } from "../../services/TourService";

function Tour() {
  const [tourDetails, setTourDetails] = useState({
    tours: [],
    destination: "",
    date: "",
  });

  const handleChange = (event) => {
    setTourDetails({ ...tourDetails, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getTours()
      .then((response) => {
        setTourDetails({ tours: response });
      })
      .catch((res) => {
        setTourDetails({ tours: res });
      });
  }, []);

  const searchByPlace = (e) => {
    e.preventDefault();
    getByPlace(tourDetails.destination).then((response) => {
      setTourDetails({ tours: response, destination: "" });
    });
  };

  const searchBydate = (e) => {
    e.preventDefault();
    getByDate(tourDetails.date).then((response) => {
      setTourDetails({ tours: response, date: "" });
    });
  };

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Tours</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Item>
                <form
                  className="d-flex my-2 my-lg-0 ml-auto mr-2"
                  onSubmit={searchByPlace}
                >
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="destination"
                    value={tourDetails.destination}
                    placeholder="Search by Place"
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="btn btn-outline-info  my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </Nav.Item>
              <Nav.Item>
                <form
                  className="d-flex my-2 my-lg-0 ml-auto mr-2"
                  onSubmit={searchBydate}
                >
                  <input
                    className="form-control mr-sm-2"
                    type="date"
                    name="date"
                    value={tourDetails.date}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="btn btn-outline-info  my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <table className="table mb-0">
        <thead>
          <tr>
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
              Destination
            </th>
            <th scope="col" className="text-center">
              {" "}
              Fare
            </th>
            <th scope="col" className="text-center">
              {" "}
              Available seats
            </th>
            <th scope="col" className="text-center">
              {" "}
              Register
            </th>
          </tr>
        </thead>
        <tbody>
          {tourDetails.tours.map((tour, index) => (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center"> {tour.tourDate}</td>
              <td className="text-center"> {tour.destination}</td>
              <td className="text-center"> {tour.fare}</td>
              <td className="text-center"> {tour.seatsAvailable}</td>

              <td>
                {" "}
                <Link
                  to={`/register/${tour.tourId}`}
                  className="btn btn-success"
                >
                  Register
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tour;
