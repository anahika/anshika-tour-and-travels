import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/pic1.jfif";
import pic2 from "../../assets/pic2.jfif";
import pic3 from "../../assets/pic3.jfif";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <div className="row ">
        <div className="col-sm p-5">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic1}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Shimla</b>
              </h4>
              <p>
                The town is famous for pleasant walking experiences on hillsides
                surrounded by pine and oak forests.
              </p>
              <Link to="./tours" className="btn btn-primary">
                More Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm p-5">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic2}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Dalhousie</b>
              </h4>
              <p>
                Dalhousie is one of the most visited and popular hill stations
                in the country. It is known for its pleasant climate.
              </p>
              <Link to="./tours" className="btn btn-primary">
                More Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm p-5">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic3}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Manali</b>
              </h4>
              <p>
                A gift of the Himalayas, Manali is a beautiful township nestled
                in the pictures of Beas River valley.
              </p>
              <Link to="./tours" className="btn btn-primary">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <Link to="./tours" className="btn btn-primary">
          {" "}
          List of All Tours
        </Link>
      </div>
    </div>
  );
}
