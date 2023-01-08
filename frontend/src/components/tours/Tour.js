import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  getTours,
  getByPlace,
  getByDate,
  getByPrice,
} from "../../services/TourService";
import Loading from "../pages/Loading";
import { Form } from "react-bootstrap";

function Tour() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours(navigate)
      .then((response) => {
        setTours(response);
        setIsLoading(false);
      })
      .catch((res) => {
        setTours(res);
      });
  }, [navigate]);

  const searchByPlace = (e) => {
    e.preventDefault();
    getByPlace(e.target.destination.value).then((response) => {
      if (response.length === 0) {
        let problem =
          "Currently there are no tours available to " +
          e.target.destination.value;
        let sol = "Let's explore some other destination!";
        navigate("/tours/no-tours", {
          state: { problem: problem, sol: sol },
        });
      } else {
        setTours(response);
        e.target.destination.value = "";
      }
    });
  };

  const searchBydate = (e) => {
    e.preventDefault();
    getByDate(e.target.date.value).then((response) => {
      if (response.length === 0) {
        let problem =
          "Currently there are no tours available on " + e.target.date.value;
        let sol = "Let's explore some other date!";

        navigate("/tours/no-tours", {
          state: { problem: problem, sol: sol },
        });
      } else {
        setTours(response);
        e.target.date.value = "";
      }
    });
  };

  const searchByPrice = (e) => {
    e.preventDefault();
    let min = parseInt(e.target.min.value);
    let max = parseInt(e.target.max.value);
    if (min > max) {
      alert("Please enter the valid range. i.e. min should be less than max.");
    } else {
      getByPrice(min, max).then((response) => {
        if (response.length === 0) {
          let problem = `Currently there are no tours available for price range between ${min} and ${max}`;
          let sol = "Let's explore some other price range!";

          navigate("/tours/no-tours", {
            state: { problem: problem, sol: sol },
          });
        } else {
          setTours(response);
        }
      });
    }
    e.target.min.value = "";
    e.target.max.value = "";
  };

  const capitalizeFirstLowercaseRest = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
  };

  if (isLoading) {
    return <Loading />;
  } else {
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
                    <Form.Control
                      className="form-control mr-sm-2"
                      type="search"
                      name="destination"
                      placeholder="Search by Place"
                      required
                    />
                    <button className="btn btn-outline-info" type="submit">
                      Search
                    </button>
                  </form>
                </Nav.Item>
                <Nav.Item>
                  <form
                    className="d-flex my-2 my-lg-0 ml-auto mr-2"
                    onSubmit={searchBydate}
                  >
                    <Form.Control
                      className="form-control mr-sm-2"
                      type="date"
                      name="date"
                      required
                    />
                    <button className="btn btn-outline-info" type="submit">
                      Search
                    </button>
                  </form>
                </Nav.Item>
                <Nav.Item className="min-max-price">
                  <form
                    className="d-flex my-2 my-lg-0 ml-auto mr-2"
                    onSubmit={searchByPrice}
                  >
                    <Form.Control
                      className="form-control mr-sm-2"
                      type="number"
                      name="min"
                      placeholder="Min Price, >1000"
                      min={1000}
                      max={100000}
                      required
                    />
                    <Form.Control
                      className="form-control mr-sm-2"
                      type="number"
                      name="max"
                      placeholder="Max Price, <100000"
                      min={1000}
                      max={100000}
                      required
                    />
                    <button className="btn btn-outline-info" type="submit">
                      Search
                    </button>
                  </form>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="table-responsive d-flex justify-content-center p-2">
          <table
            className="table mb-0 mt-4 table-borderless text-center"
            style={{ width: "95%" }}
          >
            <thead>
              <tr className="table-primary">
                <th scope="col"> S No. </th>
                <th scope="col"> Date</th>
                <th scope="col"> Destination</th>
                <th scope="col"> Fare</th>
                <th scope="col"> Available seats</th>
                <th scope="col"> Register</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td> {tour.tourDate}</td>
                  <td> {capitalizeFirstLowercaseRest(tour.destination)}</td>
                  <td> {tour.fare}</td>
                  <td> {tour.seatsAvailable}</td>

                  <td>
                    {" "}
                    <Link
                      to={`/register/${tour.tourId}`}
                      className="btn btn-info"
                    >
                      Register
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Tour;
