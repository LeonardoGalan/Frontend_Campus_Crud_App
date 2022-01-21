import React, { useState } from "react";
import { StudentCard } from ".";
import { Pagination } from "../generic";
import { STUDENTS_PER_PAGE } from "../../constants";
import "../../styles/AllStudentsPage.css";

function AllCampuses(props) {
  const [startIndex, setStartIndex] = useState(0);

  const cards = props.campuses.map(campus => <CampusCard 
    campus = {campus}
  /> )

  return (
    <>
      <h2 className="all-student-header">Campuses</h2>
      <hr />
      {cards}
    </>
  );
}

export default AllStudentsPage;
