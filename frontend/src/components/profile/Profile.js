import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/AuthService";
import Card from "react-bootstrap/Card";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getCurrentUser);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center p-4">
      <Card style={{ width: "25rem", paddingTop: "1rem" }}>
        <Avatar
          name={user.username}
          color="#ffa500"
          size="200"
          round={true}
          className="icon align-self-center"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Text>
            <strong>Name:</strong> {user.username}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
          </Card.Text>
          <strong>Authorities:</strong> {user.usertype}
          <br />
          {/* <ul>
            {user.roles &&
              user.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul> */}
          <Link
            to={`/tours/${user.userId}`}
            className="btn btn-primary mt-3 align-self-center"
          >
            My Tours
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
