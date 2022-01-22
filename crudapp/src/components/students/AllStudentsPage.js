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

  // map each student to separate card
  const studentCards = props.students.map((student) => (
    <StudentCard
      key={student.studentId}
      student={student}
      selectHandler={props.selectHandler}
    />
  ));

  /* display students from different starting index based on page number */
  const displayStudentstudentCards = studentCards.slice(
    startIndex < 0 ? 0 : startIndex,
    startIndex + STUDENTS_PER_PAGE || studentCards.length
  );

  /* show message to user if no students found in database */
  const displayComponent = studentCards.length ? (
    <>
      <div className="all-student-container">{displayStudentstudentCards}</div>
      <Pagination
        elements={studentCards.length}
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
