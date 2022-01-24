import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StudentCard.css";

function StudentCard(props) {
  return (
    <Link to={`${props.student.studentId}`}>
      <div className="student-card">
        <img className="student-img" src={props.student.imageUrl} alt="student-profile-pic" />
        <h2 className="student-name">{`${props.student.firstName} ${props.student.lastName}`}</h2>
        <h3 className="student-campus-name">Campus Name</h3>
        <p className="student-email">Email: {props.student.email}</p>
        <p className="student-gpa">GPA: {props.student.gpa}</p>
      </div>
    </Link>
  );
}

export default StudentCard;
