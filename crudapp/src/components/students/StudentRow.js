import React from "react";
import "../../styles/StudentRow.css";
import axios from "axios";

function StudentRow(props) {
  function removeFromCampus() {
    const updateStudent = { ...props.student, campusName: "" };
    axios
      .put(`http://localhost:8080/students/${props.student.studentId}`, updateStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="student-row">
      <img
        className="student-row-image"
        src="https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png"
        alt="student"
      />
      <h2 className="student-row-name">{props.student.name}</h2>
      <button
        className="remove-student-campus-btn delete-student-btn link-buttons"
        onClick={removeFromCampus}>
        Remove From Campus
      </button>
    </div>
  );
}

export default StudentRow;
