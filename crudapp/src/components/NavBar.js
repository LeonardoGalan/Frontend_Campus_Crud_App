import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function NavBar() {
  return (
    <nav>
      <Link className="nav-home-btn" to="/">
        Home
      </Link>
      <Link className="campus-btn" to="/campuses">
        Campuses
      </Link>
      <Link className="student-btn" to="/students">
        Students
      </Link>
    </nav>
  );
}

export default NavBar;
