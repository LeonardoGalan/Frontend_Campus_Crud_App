import React, { useState } from "react";
import { StudentCard } from ".";
import { Pagination } from "../generic";
import { STUDENTS_PER_PAGE } from "../../constants";
import "../../styles/AllStudentsPage.css";

function AllStudentsPage(props) {
  const [startIndex, setStartIndex] = useState(0);

  function updateStartIndex(perPage) {
    setStartIndex((prevStartIndex) => prevStartIndex + perPage);
  }

  const cards = props.students.map((student) => (
    <StudentCard student={student} />
  ));

  /* display students from different starting index based on page number */
  const displayStudentCards = cards.slice(
    startIndex < 0 ? 0 : startIndex,
    startIndex + STUDENTS_PER_PAGE || cards.length
  );

  const displayComponent = cards.length ? (
    <>
      <div className="all-student-container">{displayStudentCards}</div>
      <Pagination
        elements={cards.length}
        perPage={STUDENTS_PER_PAGE}
        changeStartIndex={updateStartIndex}
      />
    </>
  ) : (
    <p className="no-students-msg">No Students to Display</p>
  );

  return (
    <>
      <h2 className="all-student-header">Students</h2>
      <hr />
      {displayComponent}
    </>
  );
}

export default AllStudentsPage;
