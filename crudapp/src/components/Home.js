import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="homeBack">
      <div className="btn-holder">
        <Link className="home-btn" to="/students">Students</Link>
        <Link className="home-btn" to="/campuses">Campuses</Link>
      </div>

    </div>
  );
}

export default Home;
