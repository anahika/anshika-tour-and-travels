import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/pic1.jfif";
import pic2 from "../../assets/pic2.jfif";
import pic3 from "../../assets/pic3.jfif";
import pic4 from "../../assets/pic4.jfif";
import pic5 from "../../assets/pic5.jfif";
import pic6 from "../../assets/pic6.jfif";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-sm mt-4">
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
        <div className="col-sm mt-4">
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
        <div className="col-sm mt-4">
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
      {/* <!-- second row --> */}
      <div className="row mt-2">
        <div className="col-sm mt-4">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic4}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Dharamshala</b>
              </h4>
              <p>
                {" "}
                Dharamshala is a prominent name in Buddhist tour to the state,
                as the home of Dalai Lama and all the Tibetans in exile.
              </p>
              <Link to="./tours" className="btn btn-primary">
                More Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm mt-4">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic5}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Amritsar</b>
              </h4>
              <p>
                {" "}
                The best time to visit Amritsar is between November and March,
                when the weather is pleasant for visiting the Golden Temple.
              </p>
              <Link to="./tours" className="btn btn-primary">
                More Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm mt-4">
          <div className="card card1">
            <img
              className="card-img-top card1-img-top"
              src={pic6}
              alt="card1 cap"
            />
            <div className="card-body">
              <h4>
                <b>Kashmir</b>
              </h4>
              <p>
                The natural beauty and picturesque locations have made it a
                favoured destination for tourists across the world.
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
