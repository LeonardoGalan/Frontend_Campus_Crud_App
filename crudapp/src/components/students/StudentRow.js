import React from "react";
import axios from "axios";
import "../../styles/StudentRow.css";

function StudentRow(props) {
  // remove student button handler
  function removeFromCampus() {
    const updateStudent = { ...props.student, campusName: "" };
    axios
      .put(`http://localhost:8080/students/${props.student.studentId}`, updateStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="student-row">
      <img className="student-row-image" src={props.student.imageUrl} alt="student" />
      <h2 className="student-row-name">{`${props.student.firstName} ${props.student.lastName}`}</h2>
      <button
        className="remove-student-campus-btn delete-student-btn link-buttons"
        onClick={removeFromCampus}>
        Remove From Campus
      </button>
    </div>
  );
}

export default StudentRow;
