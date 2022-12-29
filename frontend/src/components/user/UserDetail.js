import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {getCurrentUser} from "../../services/AuthService";

export default function UserDetail()  {
  const navigate = useNavigate();

  useEffect ( () => {
    const user = getCurrentUser();
    if(!user.roles.includes("ROLE_USER")){
        navigate("/error");
    }
    // eslint-ignore-next
  },[])

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Hello</h3>
        </header>
      </div>
    )
}