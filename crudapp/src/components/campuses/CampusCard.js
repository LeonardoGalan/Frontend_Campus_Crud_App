import React from "react";
import { Link } from "react-router-dom";
import "../../styles/campusCard.css";

function CampusCard(props) {
  return (
    <Link to={`${props.campus.name}`}>
      <div className="campus-card-container">
        <img className="campus-card-img" src={props.campus.imageUrl} alt="campus-profile" />
        <div className="campus-card-info">
          <h1 className="campus-card-name">{props.campus.name}</h1>
        </div>
        <button className="campus-card-delete-btn">Delete</button>
      </div>
    </Link>
  );
}

export default CampusCard;
