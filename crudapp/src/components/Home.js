import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="homeBack">
      {/* <video autoplay muted loop id="myVideo">
                <source src="rain.mp4" type="video/mp4"/>
            </video> */}
      <div className="btn-holder" >
     <button className="students-btn">Students</button> 
      <button className="campuses-btn">Campuses</button>
      </div>

      {/* { <button id="myBtn" onclick="myFunction()">Pause</button>} */}
    </div>
  );
}

export default Home;
