import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUsers } from "../../services/UserService";
import { Link } from "react-router-dom";

export default function AdminBoard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((res) => {
        setUsers(res);
      });
  }, []);

  return (
    <table className="table" style={{ marginLeft: "3%", width: "97%" }}>
      <thead>
        <tr>
          <th scope="col"> user Id </th>
          <th scope="col"> Username</th>
          <th scope="col"> Address</th>
          <th scope="col"> Usertype</th>
          <th scope="col"> Edit </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.userId}>
            <td>{index + 1}</td>
            <td> {user.userName}</td>
            <td> {user.address}</td>
            {/* <td>
              {user.roles.map((role, index) => (
                <span key={role.id}>{role.name} &nbsp; </span>
              ))}
            </td> */}

            <td>
              {" "}
              <Link to="/register" className="btn btn-info">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
