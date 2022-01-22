import React from "react";
import { Link } from "react-router-dom";
import "../../styles/AddStudentButton.css";

function AddStudentButton() {
  return (
    <Link className="add-student-btn" to="student-form">
      Add New Student
    </Link>
  );
}

export default AddStudentButton;
