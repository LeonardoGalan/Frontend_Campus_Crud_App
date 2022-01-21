import React from "react";
import { CampusCard } from ".";

import "../../styles/AllStudentsPage.css";

function AllCampuses(props) {
  const cards = props.campuses.map((campus) => <CampusCard campus={campus} />);

  return (
    <>
      <h2 className="all-student-header">Campuses</h2>
      <hr />
      {cards}
    </>
  );
}

export default AllCampuses;
