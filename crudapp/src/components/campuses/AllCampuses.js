import React from "react";
import { CampusCard } from ".";
import CampusButton from "./CampusButton";

import "../../styles/AllCampuses.css";

function AllCampuses(props) {
  const cards = props.campuses.map((campus) => <CampusCard campus={campus} />);

  return (
    <>
      <h2 className="heading">All Campuses</h2>
      <hr />
      <center><CampusButton
        styleName="add-student-btn"
        text="Add New Campus"
        linkTo="campus-form"
      /></center>

      <div >
      <div className="campusCards">{cards}</div>
      </div>
    </>
  );
}

export default AllCampuses;
