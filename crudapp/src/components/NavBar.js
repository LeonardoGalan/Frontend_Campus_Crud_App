import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function NavBar() {
  return (
    <nav>
      <Link className="home-btn" to="/">
        Home
      </Link>
      <Link className="campus-btn" to="/CampusCard">
        Campuses
      </Link>
      <Link className="student-btn" to="/Students">
        Students
      </Link>
    </nav>
  );
}

export default NavBar;
