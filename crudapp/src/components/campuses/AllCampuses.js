import React, { useEffect } from "react";
import { CampusCard } from ".";
import CampusButton from "./CampusButton";

import "../../styles/AllCampuses.css";
import axios from "axios";

function AllCampuses(props) {
  useEffect(() => {
    axios
      .get("http://localhost:8080/campuses/")
      .then((res) => props.retrieveHandler(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = props.campuses.map((campus) => (
    <CampusCard key={campus.campusId} campus={campus} />
  ));

  return (
    <div className="all-campus-container">
      <h2 className="campus-heading">All Campuses</h2>
      <hr />
      <CampusButton
        styleName="add-student-btn link-buttons"
        text="Add New Campus"
        linkTo="campus-form"
      />
      <div className="campus-cards">{cards}</div>
    </div>
  );
}

export default AllCampuses;
