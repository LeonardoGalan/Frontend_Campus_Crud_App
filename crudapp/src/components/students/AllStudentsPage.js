import React, { useEffect, useState } from "react";
import axios from "axios";
import { STUDENTS_PER_PAGE } from "../../constants";
import { Pagination } from "../generic";
import { StudentCard } from ".";
import StudentButton from "./StudentButton";
import "../../styles/AllStudentsPage.css";

function AllStudentsPage(props) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/students/")
      .then((res) => props.retrieveHandler(res.data))
      .catch((err) => console.log(err));
  }, []);

  function updateStartIndex(perPage) {
    setStartIndex((prevStartIndex) => prevStartIndex + perPage);
  }

  function displayPage() {
    if (props.allStudents.length === 0) {
      return <p className="no-students-msg">No Students to Display</p>;
    }

    const studentCards = props.allStudents.map((student) => (
      <StudentCard key={student.studentId} student={student} />
    ));

    /* display students from different starting index based on page number */
    const displayStudentCards = studentCards.slice(
      startIndex < 0 ? 0 : startIndex,
      startIndex + STUDENTS_PER_PAGE || studentCards.length
    );

    return (
      <>
        <div className="all-student-container">{displayStudentCards}</div>
        <Pagination
          elements={studentCards.length}
          perPage={STUDENTS_PER_PAGE}
          changeStartIndex={updateStartIndex}
        />
      </>
    );
  }

  return (
    <div className="all-students-container">
      <h2 className="all-student-header">Students</h2>
      <hr />
      <StudentButton styleName="add-student-btn" text="Add New Student" linkTo="student-form" />
      {displayPage()}
    </div>
  );
}

export default AllStudentsPage;
