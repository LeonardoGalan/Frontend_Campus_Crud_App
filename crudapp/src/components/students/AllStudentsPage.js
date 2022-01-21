import React, { useState } from "react";
import { StudentCard } from ".";
import { Pagination } from "../generic";
import { STUDENTS_PER_PAGE } from "../../constants";
import "../../styles/AllStudentsPage.css";

function AllStudentsPage(props) {
  const [startIndex, setStartIndex] = useState(0);

  const cards = props.students.map(student => <StudentCard 
    student = {student}
  /> )


  /* display students from different starting index based on page number */
  const displayStudentCards = cards.slice(
    startIndex < 0 ? 0 : startIndex,
    startIndex + STUDENTS_PER_PAGE || cards.length
  );

  function updateStartIndex(perPage) {
    setStartIndex((prevStartIndex) => prevStartIndex + perPage);
  }

  return (
    <>
      <h2 className="all-student-header">Students</h2>
      <hr />
      <div className="all-student-container">{displayStudentCards}</div>
      <Pagination
        elements={props.students.length}
        perPage={STUDENTS_PER_PAGE}
        changeStartIndex={updateStartIndex}
      />
    </>
  );
}

export default AllStudentsPage;
