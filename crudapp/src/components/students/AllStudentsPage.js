import React, { useState } from "react";
import { STUDENTS_PER_PAGE } from "../../constants";
import { Pagination } from "../generic";
import { StudentCard } from ".";
import StudentButton from "./StudentButton";
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
  const displayStudentCards = studentCards.slice(
    startIndex < 0 ? 0 : startIndex,
    startIndex + STUDENTS_PER_PAGE || studentCards.length
  );

  /* show message to user if no students found in database */
  const displayComponent = studentCards.length ? (
    <>
      <div className="all-student-container">{displayStudentCards}</div>
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
    <div className="all-students-container">
      <h2 className="all-student-header">Students</h2>
      <hr />
      <StudentButton
        styleName="add-student-btn"
        text="Add New Student"
        linkTo="student-form"
      />
      {displayComponent}
    </div>
  );
}

export default AllStudentsPage;
