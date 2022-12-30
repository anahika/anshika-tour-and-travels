import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/AuthService";

function Header() {
  let [user, setUser] = useState({
    showAdminBoard: false,
    showModeratorBoard: false,
    currentUser: undefined,
  });

  useEffect(() => {
    const user1 = getCurrentUser();
    if (user1) {
      setUser({
        currentUser: user1,
        // showModeratorBoard: user1.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user1.roles.includes("ROLE_ADMIN"),
      });
    }
  }, []);

  const logOut = () => {
    logout();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand ">
      <Link to={"/"} className="navbar-brand">
        Anshika Tour and Travels
      </Link>
      <div className="navbar-nav mr-auto">
        {user.showModeratorBoard && (
          <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
              Moderator Board
            </Link>
          </li>
        )}
        {user.showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin Board
            </Link>
          </li>
        )}
      </div>
      {user.currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {user.currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-primary rounded-pill"
              onClick={logOut}
            >
              Logout
            </button>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default Header;
